// src/api/getData.js
const axios = require('axios');
console.log('getData-src');
// Funkcja do uzyskiwania dostępu do tokenu z serwisu Twitch
async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('client_id', process.env.TWITCH_CLIENT_ID);
  params.append('client_secret', process.env.TWITCH_CLIENT_SECRET);
  params.append('grant_type', 'client_credentials');

  try {
    const tokenResponse = await axios.post('https://id.twitch.tv/oauth2/token', params);
    const accessToken = tokenResponse.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
}

// Serverless endpoint
module.exports = async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return res.status(500).send('Error fetching access token');
    }
console.log('token');
    // Pobieranie parametrów z zapytania front-endu
    const { endpoint, fields, sort, limit } = req.body;

    const igdbResponse = await axios({
      url: `https://api.igdb.com/v4${endpoint}`,
      method: 'POST',
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
      data: `fields ${fields}; sort ${sort}; limit ${limit};`,
    });
console.log('IGDB response received');
    res.status(200).json(igdbResponse.data);
  } catch (error) {
    console.error('Error fetching data from IGDB:', error);
    res.status(500).send('Server error');
  }
console.log('ok');  
};
