import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MiniButton from '../components/MiniButton';
import LinkFontSize from '../components/LinkFontSize';


interface Game {
  id: number;
  name: string;
  genres: Genre[];
  cover: Cover;
  platforms: Platforms[];
  storyline: string;
  summary: string;
  game_engines: GameEngines[];
}

interface Genre {
  id: number;
  name: string;
  slug: string;
}
interface Cover {
  id: number;
  url: string;
  image_id: string;
}
interface Platforms {
  id: number;
  name: string;
  slug: string;
  abbreviation: string;
  alternative_name: string;
}
interface GameEngines {
  id: number;
  name: string;
  slug: string;
  url: string;
}


const News: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

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
            endpoint: '/games',
            fields: 'name,rating_count,storyline,summary,platforms.name,platforms.slug,platforms.abbreviation,platforms.alternative_name,cover.url,cover.image_id,genres.name,genres.slug,game_engines.name,game_engines.slug,game_engines.url',
            where: 'first_release_date < 1735685999 & first_release_date > 1672527599',
            sort: 'total_rating_count desc',
            limit: 12,
            offset: '',
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

  useEffect(() => {
    console.log(games);
  }, [games]);

  
  return (
    <div className="container mx-auto p-4">
      <div className=''>
        {loading ? (
        <div className="loader-container">
          <h1 className='text-2xl text-slate-200'>Loading...</h1>
          <img className='w-40' src='/images/loader.gif' alt='loader'></img>
        </div>
        ) : (
        <div className=''>
        <h1 className='text-2xl md:text-4xl lg:text-4xl text-slate-200'>Games:</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4'>
          {games.map(game => (
            <div key={game.id} className="flex bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
              <div className='flex-row basis-2/6'>
              <Link className='cursor-pointer' to={`/game/${game.id}`} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <img className='h-full max-h-96 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`} alt={`cover-${game.name}`} />
              </Link>
              </div>
              <div className='flex-row basis-4/6 p-2 text-slate-300'>

                <div className='pb-4 '>
                  <LinkFontSize to={`/game/${game.id}`} fontSize="text-xl md:text-2xl lg:text-2xl">{game.name}</LinkFontSize>
                </div>


                <p className='text-xs md:text-sm lg:text-sm text-slate-100 line-clamp-3 text-ellipsis min-h-[3rem]'>{game.summary}</p>

                <p className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>
                <span className='text-xs md:text-sm lg:text-sm text-cyan-400 font-bold'>Genres: </span>
                {game.genres && game.genres.length > 0
                ? game.genres.map((genre, index) => (
                    <span key={genre.id}>
                      <LinkFontSize to={`/genre/${genre.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                        {genre.name}
                      </LinkFontSize>
                      {index < game.genres.length - 1 ? ', ' : ''}
                    </span>
                  ))
                : null }              
                </p>

                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>
                  <span className='text-xs md:text-sm lg:text-sm text-cyan-400 font-bold'>Platforms: </span>
                  {game.platforms && game.platforms.length > 0
                  ? game.platforms.map((platform, index) => (
                      <span key={platform.id}>
                        <LinkFontSize to={`/platform/${platform.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                          {platform.name}
                        </LinkFontSize>
                        {index < game.platforms.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  : 'No data'}              
                </p>

                <p className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>
                  {game.game_engines && game.game_engines.length > 0 ? (
                    <span className='text-xs md:text-sm lg:text-sm text-cyan-400 font-bold'>Game engines: </span>
                  ) : (
                    null
                  )}
                  {game.game_engines && game.game_engines.length > 0
                  ? game.game_engines.map((game_engine, index) => (
                      <span key={game_engine.id}>
                        <LinkFontSize to={`/engine/${game_engine.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                          {game_engine.name}
                        </LinkFontSize>
                        {index < game.game_engines.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  : null }              
                </p>



                <p className='pt-4'>
                <Link className='cursor-pointer' to={`/game/${game.id}`} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} >
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>More</MiniButton>
                </Link>
                </p>
              </div>
            </div>
            ))}
          </div>

        </div>
        )}
      </div>
    </div>
  );
};

export default News;