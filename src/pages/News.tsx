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
    const fetchGames = async () => {
      try {
        let apiUrl: string;
          if (process.env.NODE_ENV === 'production') {
            apiUrl = '/api/getData'; // Środowisko produkcyjne
          } else {
            apiUrl = 'http://localhost:3001/getData'; // Środowisko lokalne
          }
          const gamesResponse = await axios.post(apiUrl, {
            endpoint: '/games', // Ścieżka endpointu do IGDB API
            fields: 'name,rating_count; where first_release_date < 1735685999 & first_release_date > 1672527599', // Pola, które chcesz pobrać
            sort: 'first_release_date desc', // Sortowanie, np. po nazwie w porządku alfabetycznym
            limit: 30, // Limit wyników
          });
          setGames(gamesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  console.log('OKKK');
  useEffect(() => {
    console.log(games);
  }, [games]);

  
  return (
    <div className="container mx-auto p-4">
      <div className='bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800'>
        {loading ? (
        <div className="loader-container">
          <h1 className='text-2xl text-slate-200'>Loading...</h1>
          <img className='w-40' src='/images/loader.gif' alt='loader'></img>
        </div>
        ) : (
        <div>
            <h1>Najnowsze Gry</h1>
            <ul>
              {games.map(game => (
                <li className='text-slate-300' key={game.id}>
                  {/* {game.name} - Gatunki: {game.genres?.map(genre => genre.name).join(', ')} */}
                  Gatunki:{game.name}
                </li>
              ))}
            </ul>
            <h2>Gatunki Gier</h2>

          </div>
        )}
      </div>
    </div>
  );
};

export default News;