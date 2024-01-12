require('dotenv').config();
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();

app.use(express.json());

app.use(cors());

async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('client_id', process.env.TWITCH_CLIENT_ID);
  params.append('client_secret', process.env.TWITCH_CLIENT_SECRET);
  params.append('grant_type', 'client_credentials');

  try {
    const tokenResponse = await axios.post('https://id.twitch.tv/oauth2/token', params);
    return tokenResponse.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error);
    return null;
  }
}

app.get('/getGames', async (req, res) => {
  try {
    console.log('Making request to IGDB');
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return res.status(500).send('Error fetching access token');
    }

    const igdbResponse = await axios({
      url: 'https://api.igdb.com/v4/games',
      method: 'POST',
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
      data: 'fields name,genres.name,release_dates.date,summary; sort release_dates.date desc; limit 5;'
    });
    console.log('IGDB response received');
    res.json(igdbResponse.data);
  } catch (error) {
    console.error('Error fetching data from IGDB:', error);
    res.status(500).send('Server error');
  }
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


app.post('/igdb', async (req, res) => {
  let endpoint; // Deklaracja poza blokiem try
  try {
    endpoint = req.body.endpoint; // Przypisanie wartości
    const queryData = req.body.data; // dane do zapytania
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return res.status(500).send('Error fetching access token');
    }

    const igdbResponse = await axios({
      url: `https://api.igdb.com/v4${endpoint}`,
      method: 'POST',
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
      data: queryData
    });

    res.json(igdbResponse.data);
  } catch (error) {
    console.error(`Error fetching data from IGDB endpoint ${endpoint}:`, error);
    res.status(500).send('Server error');
  }
});
