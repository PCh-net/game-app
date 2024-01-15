// server.js
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
      data: 'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites,cover.url,cover.image_id,cover.alpha_channel,genres.name,platforms.name,release_dates.y,release_dates.date; where first_release_date < 1735685999 & first_release_date > 1672527599; sort total_rating_count asc; limit 24;'
    });
    console.log('IGDB response received');
    res.json(igdbResponse.data);
  } catch (error) {
    console.error('Error fetching data from IGDB:', error);
    res.status(500).send('Server error');
  }
});




app.get('/getDataaa', async (req, res) => {
  let endpoint; // Deklaracja poza blokiem try
console.log({endpoint});
  try {
    //endpoint = req.body.endpoint; // Przypisanie wartości
    //const queryData = req.body.data; // dane do zapytania
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return res.status(500).send('Error fetching access token');
    }

    // Pobieranie parametrów z zapytania front-endu
    const { endpoint, fields, sort, limit } = req.body;
console.log('OOOOK');
console.log(`params-${endpoint}-${fields}-${sort}-${limit}`);
console.log(`endpoint-${endpoint}`);

    const igdbResponse = await axios({
      url: `https://api.igdb.com/v4${endpoint}`,
      method: 'GET',
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
      data: `fields ${fields}; sort ${sort}; limit ${limit};`,
    });

    res.status(200).json(igdbResponse.data);
  } catch (error) {
    console.log('error');
  }
});






app.post('/getData', async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return res.status(500).send('Error fetching access token');
    }
    if (!accessToken) {
      console.log('token OFF');
    } else{
      console.log('YOO');
    }


    const { endpoint, fields, sort, limit } = req.body;
    //console.log('OOOOK');
    console.log(`---params-endpoint-${endpoint}-${fields}-${sort}-${limit}`);
    //console.log(`fields ${fields}; sort ${sort}; limit ${limit};`);
    const igdbResponse = await axios({
      url: `https://api.igdb.com/v4${endpoint}`,
      method: 'POST',
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
      data: `fields ${fields}; sort ${sort}; limit ${limit};`,
    });

    // console.log('IGDB Response:', igdbResponse.data);
    // console.log('IGDB Response Status:', igdbResponse.status);
    // console.log('IGDB Response Headers:', igdbResponse.headers);


    res.status(200).json(igdbResponse.data);
  } catch (error) {
    // LONG console.error('Error fetching data from IGDB:', error);
    res.status(500).send('Server error');
    // console.log('error');
  }
});





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



