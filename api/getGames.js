// TEMP LOCAL
// ----------
const axios = require('axios');

// access token
async function getAccessToken() {
  const params = new URLSearchParams();
  params.append('client_id', process.env.TWITCH_CLIENT_ID);
  params.append('client_secret', process.env.TWITCH_CLIENT_SECRET);
  params.append('grant_type', 'client_credentials');

  try {
    const tokenResponse = await axios.post('https://id.twitch.tv/oauth2/token', params);
    const accessToken = tokenResponse.data.access_token;
    console.log('Access token obtained:', accessToken);
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error;
  }
}


// funkcja serverless
module.exports = async (req, res) => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) {
      return res.status(500).send('Error fetching access token');
    }
    console.log('Token successfully obtained');
    console.log('tokken up');

    const igdbResponse = await axios({
      url: 'https://api.igdb.com/v4/games',
      method: 'POST',
      headers: {
        'Client-ID': process.env.TWITCH_CLIENT_ID,
        'Authorization': `Bearer ${accessToken}`,
      },
      data: 'fields age_ratings,aggregated_rating,aggregated_rating_count,alternative_names,artworks,bundles,category,checksum,collection,collections,cover,created_at,dlcs,expanded_games,expansions,external_games,first_release_date,follows,forks,franchise,franchises,game_engines,game_engines.name,game_engines.slug,game_localizations,game_modes,genres,hypes,involved_companies,keywords,language_supports,multiplayer_modes,name,parent_game,platforms,player_perspectives,ports,rating,rating_count,release_dates,remakes,remasters,screenshots,similar_games,slug,standalone_expansions,status,storyline,summary,tags,themes,total_rating,total_rating_count,updated_at,url,version_parent,version_title,videos,websites,cover.url,cover.image_id,cover.alpha_channel,genres.name,genres.slug,platforms.name,platforms.slug,release_dates.y,release_dates.date,release_dates.m,release_dates.human,player_perspectives.name,player_perspectives.slug,player_perspectives.url; where first_release_date < 1735685999 & first_release_date > 1672527599; sort rating desc; limit 22;'
});

  console.log('IGDB response received');
  res.status(200).json(igdbResponse.data);
} catch (error) {
  console.error('Error fetching data from IGDB:', error);
  res.status(500).send('Server error');
}
};