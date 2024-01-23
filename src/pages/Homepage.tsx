// src/pages/Homepage.tsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import MiniButton from '../components/MiniButton';
import LinkFontSize from '../components/LinkFontSize';
import YouTubeVideo from '../components/VideoPlayer';
import ProgressBar from '../components/ProgressBar';
import SeoMetaTags from '../components/SeoMetaTags';
import MidButton from '../components/MidButton';

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
  release_dates: ReleaseDates[];
  game_engines: GameEngines[];
  total_rating: number;
  total_rating_count: number;
  rating: number;
  player_perspectives: PlayerPerspective[];
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
  date: number;
  human: string;
  m: number;
  y: number;
}
interface GameEngines {
  id: number;
  name: string;
  slug: string;
}
interface PlayerPerspective {
  id: number;
  name: string;
  slug: string;
  url: string;
}

const HomePage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  const [loading, setLoading] = useState(true);

  
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

 
  
  // useEffect(() => {
  //   console.log(games);
  // }, [games]);

  return (
    <div className="container mx-auto p-4">
      <SeoMetaTags 
        title="Home page | Internet Games Data Base | PCh" 
        description="Explore the Thrilling World of Video Games." 
        imageUrl="/images/poster-home-page.jpg" 
      />
      <div className='bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800'>
        {loading ? (
          <div className="loader-container">
            <h1 className='text-2xl text-slate-200'>Loading...</h1>
            <img className='w-40' src='/images/loader.gif' alt='loader'></img>
          </div>
        ) : (
          <div className=''>
            <h1 className="text-2xl md:text-4xl lg:text-4xl text-slate-200 py-3">Home page</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {games.map((game, index) => (
            <React.Fragment key={game.id}>
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                <div className='pb-4 text-cyan-200'>
                  <LinkFontSize to={`/game/${game.id}`} fontSize="text-xl md:text-2xl lg:text-2xl">{game.name}</LinkFontSize>
                </div>
                <Link to={`/game/${game.id}`} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70' src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`} alt={`cover-${game.name}`} />
                </Link>
                <p className='text-xs md:text-sm lg:text-sm text-slate-100 line-clamp-3 text-ellipsis min-h-[3rem] pt-4'>{game.summary}</p>
                {/* --- */}
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
                {/* --- */}
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
                {/* --- */}
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
                {/* --- */}

                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>
                  {game.player_perspectives && game.player_perspectives.length > 0
                  ? game.player_perspectives.map((player_perspective, index) => (
                      <span key={player_perspective.id}>
                        <LinkFontSize to={`/perspective/${player_perspective.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                          {player_perspective.name}
                        </LinkFontSize>
                        {index < game.player_perspectives.length - 1 ? ', ' : ''}
                      </span>
                    ))
                  : null }              
                </p>

                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>{game.release_dates[0].y}.{game.release_dates[0].m}</p>

                {game.rating ? (
                  <ProgressBar currentProgress={game.rating} maxProgress={100} />
                ) : (
                  null
                )}

                <p className='pt-4'>
                  <Link to={`/game/${game.id}`}>
                    <MiniButton onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} gradientClass="gradient-1" size='text-sm' fullWidth={true}>More</MiniButton>
                  </Link>
                </p>
              </div>
              {/* ------ */}
              {index === 2 && (
                <div className="flex flex-col">
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/engine" fontSize="text-xl md:text-xl lg:text-xl">Engines</LinkFontSize>
                  </div>

                  <div className="grid grid-cols-4 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-4">
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/rage" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/rage.png" alt="rage"/>
                        </motion.div>
                      </Link>
                    </div>
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/creation-engine" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/creation-engine-2.png" alt="creation-engine-2"/>
                        </motion.div>
                      </Link>
                    </div>
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/re-engine" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/re-engine.png" alt="re-engine"/>
                        </motion.div>
                      </Link>
                    </div>
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/unreal-engine-4--1" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/unreal-engine-4.png" alt="unreal-engine-4"/>
                        </motion.div>
                      </Link>
                    </div>
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/havok" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/havok.png" alt="havok"/>
                        </motion.div>
                      </Link>
                    </div>
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/anvilnext" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/anvil-next.png" alt="anvil-next"/>
                        </motion.div>
                      </Link>
                    </div>
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/unity-5" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/unity-5.png" alt="anvil-next"/>
                        </motion.div>
                      </Link>
                    </div>
                    {/* --- */}
                    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                      <Link to="/engine/source" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                        <motion.div
                          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                        >
                          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/source.png" alt="source"/>
                        </motion.div>
                      </Link>
                    </div>


                  </div>
                </div>
              )}
              {/* ------ */}
              {/* ------ */}
              {index === 5 && (
              <div className="flex flex-col">
                <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                  <LinkFontSize to="/theme" fontSize="text-xl md:text-xl lg:text-xl">Theme games</LinkFontSize>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 pt-4">
                {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/theme/fantasy" fontSize="text-xs md:text-xs lg:text-xs">Fantasy</LinkFontSize>
                    <Link to="/theme/fantasy" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-fantasy.jpg" alt="theme-fantasy"/>
                      </motion.div>
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/theme/survival" fontSize="text-xs md:text-xs lg:text-xs">Survival</LinkFontSize>
                    <Link to="/theme/survival" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-survival.jpg" alt="theme-survival"/>
                      </motion.div>
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/theme/non-fiction" fontSize="text-xs md:text-xs lg:text-xs">Non fiction</LinkFontSize>
                    <Link to="/theme/non-fiction" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-non-fiction.jpg" alt="theme-non-fiction"/>
                      </motion.div>
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/theme/open-world" fontSize="text-xs md:text-xs lg:text-xs">Open world</LinkFontSize>
                    <Link to="/theme/open-world" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-open-world.jpg" alt="theme-open-world"/>
                      </motion.div>
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/theme/warfare" fontSize="text-xs md:text-xs lg:text-xs">Warfare</LinkFontSize>
                    <Link to="/theme/warfare" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-war-fare.jpg" alt="theme-war-fare"/>
                      </motion.div>
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/theme/horror" fontSize="text-xs md:text-xs lg:text-xs">Horror</LinkFontSize>
                    <Link to="/theme/horror" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-horror.jpg" alt="theme-horror"/>
                      </motion.div>
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                    <LinkFontSize to="/theme/science-fiction" fontSize="text-xs md:text-xs lg:text-xs">Science fiction</LinkFontSize>
                    <Link to="/theme/science-fiction" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-science-fiction.jpg" alt="theme-science-fiction"/>
                      </motion.div>
                    </Link>
                  </div>
                  {/* --- */}
                  <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
                  <LinkFontSize to="/theme/mystery" fontSize="text-xs md:text-xs lg:text-xs">Mystery</LinkFontSize>
                      <Link to="/theme/mystery" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                      <motion.div
                        whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
                      >
                        <img className='w-full h-auto max-w-128 object-cover pt-2' src="/images/themes/theme-mystery.jpg" alt="theme-mystery"/>
                      </motion.div>
                    </Link>
                  </div>

                  {/* ---------- */}

                </div>
              </div>
              )}
              {/* ------ */}
              {/* ------ */}






            </React.Fragment>
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
                    <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>More</MiniButton>
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
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>More</MiniButton>
                </Link>
                </p>
              </div>


              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/ps4--1" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 4</LinkFontSize>
                </div>
                <Link to="/platform/ps4--1">
                <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-4.png" alt="playstation-4" />
                </motion.div>
                </Link>
                <p className='pt-4'>
                <Link to="/platform/ps4--1">
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>Playstation 4</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/ps5" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 5</LinkFontSize>
                </div>
                <Link to="/platform/ps5">
                <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-5.png" alt="playstation-5" />
                </motion.div>
                </Link>
                <p className='pt-4'>
                <Link to="/platform/ps5">
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>Playstation 5</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/xbox" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox</LinkFontSize>
                </div>
                <Link to="/platform/xbox">
                <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox.png" alt="Xbox" />
                </motion.div>
                </Link>
                <p className='pt-4'>
                <Link to="/platform/xbox">
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>Xbox</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/xbox360" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox 360</LinkFontSize>
                </div>
                <Link to="/platform/xbox360">
                <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-360.png" alt="xbox360" />
                </motion.div>
                </Link>
                <p className='pt-4'>
                <Link to="/platform/xbox360">
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>Xbox 360</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/xboxone" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox One</LinkFontSize>
                </div>
                <Link to="/platform/xboxone">
                <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-one.png" alt="xboxone" />
                </motion.div>
                </Link>
                <p className='pt-4'>
                <Link to="/platform/xboxone">
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>Xbox One</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/platform/series-x" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox Series X/S</LinkFontSize>
                </div>
                <Link to="/platform/series-x">
                <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-x-s.png" alt="series-x" />
                </motion.div>
                </Link>
                <p className='pt-4'>
                <Link to="/platform/series-x">
                  <MiniButton gradientClass="gradient-1" size='text-sm' fullWidth={true}>Xbox Series X/S</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-2'>
                  <LinkFontSize to="/perspective" fontSize="text-xl md:text-2xl lg:text-2xl">Perspectives</LinkFontSize>
                </div>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/perspective/auditory" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-sm md:text-sm lg:text-sm' fullWidth={true}>Auditory</MiniButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/perspective/bird-view-slash-isometric" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-sm md:text-sm lg:text-sm' fullWidth={true}>Bird view / Isometric</MiniButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/perspective/first-person" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-sm md:text-sm lg:text-sm' fullWidth={true}>First person</MiniButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/perspective/side-view" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-sm md:text-sm lg:text-sm' fullWidth={true}>Side view</MiniButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/perspective/text" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-sm md:text-sm lg:text-sm' fullWidth={true}>Text</MiniButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/perspective/third-person" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-sm md:text-sm lg:text-sm' fullWidth={true}>Third person</MiniButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/perspective/virtual-reality" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-sm md:text-sm lg:text-sm' fullWidth={true}>Virtual Reality</MiniButton>
                </Link>
                </p>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-2'>
                  <LinkFontSize to="#" fontSize="text-xl md:text-2xl lg:text-2xl">Popular tags</LinkFontSize>
                </div>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/keyword/city-builder">
                  <MidButton gradientClass="gradient-1" size="text-sm md:text-sm lg:text-sm" fullWidth={true}>City builder</MidButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/keyword/esports">
                  <MidButton gradientClass="gradient-1" size="text-sm md:text-sm lg:text-sm" fullWidth={true}>eSports</MidButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>
                <Link to="/keyword/greek-mythology">
                  <MidButton gradientClass="gradient-1" size="text-sm md:text-sm lg:text-sm" fullWidth={true}>Greek mythology</MidButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>                
                <Link to="/keyword/mmorpg">
                  <MidButton gradientClass="gradient-1" size="text-sm md:text-sm lg:text-sm" fullWidth={true}>Mmorpg</MidButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>                
                <Link to="/keyword/alien-world">
                  <MidButton gradientClass="gradient-1" size="text-sm md:text-sm lg:text-sm" fullWidth={true}>Alien world</MidButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>                
                <Link to="/keyword/blockchain-game">
                  <MidButton gradientClass="gradient-1" size="text-sm md:text-sm lg:text-sm" fullWidth={true}>Blockchain game</MidButton>
                </Link>
                </p>
                <p className='pt-4 md:pt-2 lg:pt-2'>                
                <Link to="/keyword/artificial-intelligence">
                  <MidButton gradientClass="gradient-1" size="text-sm md:text-sm lg:text-sm" fullWidth={true}>Artificial intelligence</MidButton>
                </Link>
                </p>
              </div>

            </div>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4'>

              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/game/127044" fontSize="text-xl md:text-xl lg:text-2xl">Marvel's Spider-Man 2</LinkFontSize>
                </div>
                <div className=''>
                  <YouTubeVideo videoId="9fVYKsEmuRo" rel={1} color="white" />
                </div>
                <div className='pt-4'>
                  <Link to="/game/127044" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-xl' fullWidth={true}>Game info</MiniButton>
                  </Link>
                </div>
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/game/266157" fontSize="text-xl md:text-xl lg:text-2xl">eFootball 2024</LinkFontSize>
                </div>
                <div className=''>
                  <YouTubeVideo videoId="BdyXsZMPjWo" rel={1} color="white" />
                </div>
                <div className='pt-4'>
                  <Link to="/game/266157" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-xl' fullWidth={true}>Game info</MiniButton>
                  </Link>
                </div>               
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/game/254221" fontSize="text-xl md:text-xl lg:text-2xl">Avatar: Frontiers of Pandora - Gold Edition</LinkFontSize>
                </div>
                <div className=''>
                  <YouTubeVideo videoId="QwbHtwpdJ4o" rel={1} color="white" />
                </div>
                <div className='pt-4'>
                  <Link to="/game/254221" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-xl' fullWidth={true}>Game info</MiniButton>
                  </Link>
                </div>               
              </div>
              {/* --- */}
              <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
                <div className='pb-4'>
                  <LinkFontSize to="/game/215769" fontSize="text-xl md:text-xl lg:text-2xl">Cyberpunk 2077: Phantom Liberty</LinkFontSize>
                </div>
                <div className=''>
                  <YouTubeVideo videoId="PbVKBoDuhZ0" rel={1} color="white" />
                </div>
                <div className='pt-4'>
                  <Link to="/game/215769" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                  <MiniButton gradientClass="gradient-1" size='text-xl' fullWidth={true}>Game info</MiniButton>
                  </Link>
                </div>               
              </div>
              {/* --- */}


            </div>
          
          
          </div>
        )}

      </div>
    </div>
  );
};

export default HomePage;
