// src/pages/Homepage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MiniButton from '../components/MiniButton';

interface Game {
  id: number;
  name: string;
  aggregated_rating_count: string;
  url: string;
  first_release_date: number;
  created_at: number;

  game_localizations: GameGeo;
  cover: Cover;
  platforms: Platforms[];
  genres: Genre[];
  videos: Video[];
  release_dates: ReleaseDates;

}

interface Cover {
  id: number;
  url: string;
  image_id: string;
  alpha_channel: boolean;
}
interface Genre {
  id: number;
  name: string;
}
interface Video {
  id: number;
  video_id: string;
}
interface GameGeo {
  id: number;
  name: string;
}
interface Platforms {
  id: number;
  name: string;
}
interface ReleaseDates {
  id: number;
  date: string;
}



const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [loading, setLoading] = useState(true);

  const convertUnixToDate = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().split('T')[0];
  };
  

  useEffect(() => {
    const apiUrl = process.env.NODE_ENV === 'production' ? '/api/getGames' : 'http://localhost:3001/getGames';

    const fetchGameData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setGames(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, []);

  console.log(process.env.NODE_ENV);
  
  // useEffect(() => {
  //   console.log(games);
  // }, [games]);

  return (
    <div className="container mx-auto p-4">
      <div className='bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800'>
        {loading ? (
          <div className="loader-container">
            <h1 className='text-2xl text-slate-200'>Loading...</h1>
            <img className='w-40' src='/images/loader.gif' alt='loader'></img>
          </div>
        ) : (
          <div className=''>
            <h1 className='text-2xl md:text-4xl lg:text-4xl text-slate-200'>Games:</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4'>
            
            {games.map(game => (
              <div key={game.id} className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                <h1 className='text-xl md:text-2xl lg:text-2xl text-slate-100 hover:text-cyan-400 line-clamp-2 text-ellipsis min-h-[2rem]'>{game.name}</h1>
                <img className='w-full h-auto max-w-128 object-cover py-2' src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`} alt={`cover-${game.name}`} />
                <p className='text-sm text-slate-200 font-bold py-1'>First release date:&emssp;{convertUnixToDate(game.first_release_date)}</p>
                <p className='text-sm text-slate-200 font-bold py-1'>Game created:&emsp;{convertUnixToDate(game.created_at)}</p>

                <MiniButton gradientClass="gradient-2">More</MiniButton>
              </div>
            ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
