// src/pages/Homepage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MiniButton from '../components/MiniButton';
import LinkFontSize from '../components/LinkFontSize';

interface Game {
  id: number;
  name: string;
  aggregated_rating_count: string;
  url: string;
  first_release_date: number;
  created_at: number;
  summary: string;
  game_localizations: GameGeo;
  cover: Cover;
  platforms: Platforms[];
  genres: Genre[];
  videos: Video[];
  release_dates: ReleaseDates;
  game_engines: GameEngines[];
  total_rating: string;
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
  slug: string;
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
  slug: string;
}
interface ReleaseDates {
  id: number;
  date: string;
}
interface GameEngines {
  id: number;
  name: string;
  slug: string;
}

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [loading, setLoading] = useState(true);

  const convertUnixToDate = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().split('T')[0];
  };
  

  useEffect(() => {

    let apiUrl: string;
    if (process.env.NODE_ENV === 'production') {
      apiUrl = '/api/getGames';
    } else {
      apiUrl = 'http://localhost:3001/getGames';
    }

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
          <div className=''>
            <h1 className='text-2xl md:text-4xl lg:text-4xl text-slate-200'>Games start</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            
            {games.map(game => (
              <div key={game.id} className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                <div className='pb-4'>
                  <LinkFontSize to={`/game/${game.id}`} fontSize="text-xl md:text-2xl lg:text-2xl">{game.name}</LinkFontSize>
                </div>
                <Link to={`/game/${game.id}`} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70' src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`} alt={`cover-${game.name}`} />
                </Link>
                <p className='text-xs md:text-sm lg:text-sm text-slate-100 line-clamp-3 text-ellipsis min-h-[3rem] pt-4'>{game.summary}</p>

                <p className='text-sm text-slate-200 pt-1'>First release date:&emsp;{convertUnixToDate(game.first_release_date)}</p>
                <p className='text-sm text-slate-200'>Game created:&emsp;{convertUnixToDate(game.created_at)}</p>

                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>
                  <span className='text-xs md:text-sm lg:text-sm text-cyan-100 font-bold'>Genres: </span>
                  {game.genres && game.genres.length > 0
                  ? game.genres.map((genre, index) => (
                      <React.Fragment key={genre.id}>
                        <LinkFontSize to={`/genre/${genre.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                          {genre.name}
                        </LinkFontSize>
                        {index < game.genres.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))
                  : null }              
                </p>

                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>
                  <span className='text-xs md:text-sm lg:text-sm text-cyan-100 font-bold'>Platforms: </span>
                  {game.platforms && game.platforms.length > 0
                  ? game.platforms.map((platform, index) => (
                      <React.Fragment key={platform.id}>
                        <LinkFontSize to={`/platform/${platform.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                          {platform.name}
                        </LinkFontSize>
                        {index < game.platforms.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))
                  : 'No data'}              
                </p>                

                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>
                  {game.game_engines && game.game_engines.length > 0 ? (
                    <span className='text-xs md:text-sm lg:text-sm text-cyan-100 font-bold'>Game engines: </span>
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
                  <Link to={`/game/${game.id}`} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>More</MiniButton>
                  </Link>
                </p>
              </div>
            ))}
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:hidden">
                <div className='pb-4'>
                  <LinkFontSize to="/game/185251" fontSize="text-xl md:text-2xl lg:text-2xl">The Matrix: Awakens - An Unreal Engine 5 Experience</LinkFontSize>
                </div>
                <Link to="/game/185251">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/foo/co4abs.png" alt="cover-matrix" />
                </Link>
                <p className='text-xs md:text-sm lg:text-sm text-slate-100 line-clamp-3 text-ellipsis min-h-[3rem] pt-4'>The Matrix: Awakens morphs from breathtakingly realistic cinematic to fast-paced third-person shooter experience, complete with action-packed car chase sequence, and also provides a rich, vastly detailed open world to explore, set within the universe of 'The Matrix'.</p>
                <p className='text-sm text-slate-200 pt-1'>First release date:&emsp;2021-12-06</p>
                <p className='text-sm text-slate-200'>Game created:&emsp;2021-12-10</p>
                <p className='pt-4'>
                  <Link to="/game/185251">
                    <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>More</MiniButton>
                  </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:hidden">
                <div className='pb-4'>
                  <LinkFontSize to="/game/279623" fontSize="text-xl md:text-2xl lg:text-2xl">God of War Ragnarök: Valhalla</LinkFontSize>
                </div>
                <Link to="/game/279623">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/foo/co7jl8.png" alt="cover-Valhalla" />
                </Link>
                <p className='text-xs md:text-sm lg:text-sm text-slate-100 line-clamp-3 text-ellipsis min-h-[3rem] pt-4'>God of War Ragnarök: Valhalla is a free DLC that introduces a new mode that uses elements of the roguelite genre. Players progress through a series of trials set in procedurally generated levels, where they must choose a relic, shield, and rage ability for each trial run.</p>
                <p className='text-sm text-slate-200 pt-1'>First release date:&emsp;2023-12-12</p>
                <p className='text-sm text-slate-200'>Game created:&emsp;2023-12-08</p>
                <p className='pt-4'>
                <Link to="/game/279623">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>More</MiniButton>
                </Link>
                </p>
              </div>

              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/ps2" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 2</LinkFontSize>
                </div>
                <Link to="/platform/ps2" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-2.png" alt="playstation-2" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/ps2">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 2</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/ps3" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 3</LinkFontSize>
                </div>
                <Link to="/platform/ps3">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-3.png" alt="playstation-3" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/ps3">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 3</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/ps4--1" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 4</LinkFontSize>
                </div>
                <Link to="/platform/ps4--1">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-4.png" alt="playstation-4" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/ps4--1">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 4</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/ps5" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 5</LinkFontSize>
                </div>
                <Link to="/platform/ps5">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-5.png" alt="playstation-5" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/ps5">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 5</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/xbox" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox</LinkFontSize>
                </div>
                <Link to="/platform/xbox">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox.png" alt="Xbox" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/xbox">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/xbox360" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox 360</LinkFontSize>
                </div>
                <Link to="/platform/xbox360">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-360.png" alt="xbox360" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/xbox360">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox 360</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/xboxone" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox One</LinkFontSize>
                </div>
                <Link to="/platform/xboxone">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-one.png" alt="xboxone" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/xboxone">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox One</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/series-x" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox Series X/S</LinkFontSize>
                </div>
                <Link to="/platform/series-x">
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-x-s.png" alt="series-x" />
                </Link>
                <p className='pt-4'>
                <Link to="/platform/series-x">
                  <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox Series X/S</MiniButton>
                </Link>
                </p>
              </div>





            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
