import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface Game {
  id: number;
  name: string;
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}


const News: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGamesAndGenres = async () => {
      try {
        // Pobieranie gier
        const gamesResponse = await axios.post('http://localhost:3001/igdb', {
          endpoint: '/games',
          data: 'fields name,genres.name; sort release_dates.date desc; limit 10;'
        });
        setGames(gamesResponse.data);

        // Pobieranie dodatkowych gatunków
        const genresResponse = await axios.post('http://localhost:3001/igdb', {
          endpoint: '/genres',
          data: 'fields name; limit 15;'
        });
        setGenres(genresResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
console.log(games)
console.log(genres)
    fetchGamesAndGenres();
  }, []);

  return (
    <div className='bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800'>
      {loading ? <p>Loading...</p> : (
       <div>
          <h1>Najnowsze Gry</h1>
          <ul>
            {games.map(game => (
              <li key={game.id}>
                {game.name} - Gatunki: {game.genres?.map(genre => genre.name).join(', ')}
              </li>
            ))}
          </ul>
          <h2>Gatunki Gier</h2>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default News;
