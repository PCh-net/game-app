// src/pages/PlatformGamesPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

import MiniButton from '../components/MiniButton';
import MidButton from '../components/MidButton';
import LinkFontSize from '../components/LinkFontSize';
import ProgressBar from '../components/ProgressBar';
import SeoMetaTags from '../components/SeoMetaTags';

// Interfejsy Game, Genre, Cover, Platforms, GameEngines pozostają bez zmian
interface Game {
  id: number;
  name: string;
  genres: Genre[];
  cover: Cover;
  platforms: Platforms[];
  storyline: string;
  summary: string;
  game_engines: GameEngines[];
  release_dates: ReleaseDates[];
  total_rating_count: number;
  total_rating: number;
  rating: number;
  player_perspectives: PlayerPerspective[];
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
interface ReleaseDates {
  id: number;
  date: number;
  human: string;
  m: number;
  y: number;
}
interface PlayerPerspective {
  id: number;
  name: string;
  slug: string;
  url: string;
}


const PlatformGamesPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { platformSlug } = useParams<{ platformSlug: string }>();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const safePlatformSlug = platformSlug ?? 'unknown-platform';

  useEffect(() => {

    if (!platformSlug) {
      // ... 404
      navigate('/404');
    } else {
      // ... logic
      const fetchGames = async () => {
        setLoading(true);
        setIsLoading(true);

        try {
          let apiUrl: string;
          if (process.env.NODE_ENV === 'production') {
            apiUrl = '/api/getData'; 
          } else {
            apiUrl = 'http://localhost:3001/getData';
          }
    
          const gamesResponse = await axios.post(apiUrl, {
            endpoint: '/games',
            fields: 'name,rating_count,storyline,summary,total_rating_count,total_rating,rating,platforms.slug,platforms.name,cover.url,cover.image_id,genres.name,genres.slug,game_engines.name,game_engines.slug,release_dates.created_at,release_dates.date,release_dates.human,release_dates.m,release_dates.y,player_perspectives.name,player_perspectives.slug,player_perspectives.url',
            where: `platforms.slug = "${platformSlug}" & release_dates.date >= 1672527599`,
            sort: 'rating desc',
            limit: pageSize,
            offset: (page - 1) * pageSize,
          });
          setIsLoading(false);
          setGames(gamesResponse.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        } finally {
          setLoading(false);
        }
      };
      fetchGames();
    }
  }, [platformSlug, navigate, page, pageSize]);


  // useEffect(() => {
  //   console.log(games);
  // }, [games]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl lg:text-4xl text-slate-200 py-3">
      Games for platform {safePlatformSlug.toUpperCase().replace(/-/g, ' ')}
      </h1>
      {/* ... */}
      <div className="">
        {loading ? (
          <div className="loader-container">
            <h1 className="text-2xl md:text-2xl lg:text-2xl text-slate-200">Loading page {page}</h1>
            <img className="w-40" src="/images/loader.gif" alt="loader"></img>
          </div>
        ) : (
          <>
            {isLoading && <img className="w-20" src="/images/loader.gif" alt="Loading..." />}
            <div className="flex items-center justify-center space-x-4 pb-4">
            <SeoMetaTags 
              title={`Games for platform | PCh`}
              description="Discover Games for All Platforms: PC, Consoles, and Mobile Devices. Immerse Yourself in Diverse Worlds Without Platform Boundaries."
              imageUrl="/images/poster-platforms.jpg" 
            />
              <div className='text-right'>
                <MidButton
                  onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                  disabled={page === 1}
                  gradientClass="gradient-1"
                  size="text-lg md:text-xl lg:text-2xl"
                  fullWidth={true}
                >
                  Prev
                </MidButton>
              </div>
              <div className='text-center'>
                <MidButton
                  disabled={page === 1}
                  gradientClass="gradient-1"
                  size="text-lg md:text-xl lg:text-2xl"
                >
                  {page}
                </MidButton>
              </div>
              <div className='text-left'>
                <MidButton
                  onClick={() => setPage((prevPage) => prevPage + 1)}
                  disabled={games.length < pageSize}
                  gradientClass="gradient-1"
                  size="text-lg md:text-xl lg:text-2xl"
                  fullWidth={true}
                >
                  Next
                </MidButton>
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="flex bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90"
                >
                  <div className="flex-row basis-2/6">
                  <Link to={`/game/${game.id}`} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
                    <img
                      className="h-full max-h-96 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90"
                      src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`}
                      alt={`cover-${game.name}`}
                    />
                    </Link>
                  </div>
                  <div className="flex-row basis-4/6 p-2 text-slate-300">

                    <div className='pb-4'>
                      <LinkFontSize to={`/game/${game.id}`} fontSize="text-xl md:text-2xl lg:text-2xl">{game.name}</LinkFontSize>
                    </div>

                    <p className="text-xs md:text-sm lg:text-sm text-slate-100 line-clamp-3 text-ellipsis min-h-[3rem]">
                      {game.summary}
                    </p>

                    <p className='text-xs md:text-sm lg:text-sm text-slate-100'>
                      <span className='text-xs md:text-sm lg:text-sm text-cyan-400 font-bold'>Genres:&nbsp;</span>
                      {game.genres && game.genres.length > 0
                      ? game.genres.map((genre, index) => (
                          <span key={genre.id}>
                            <LinkFontSize to={`/genre/${genre.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                              {genre.name}
                            </LinkFontSize>
                            {index < game.genres.length - 1 ? ', ' : ''}
                          </span>
                        ))
                      : 'No data'}              
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
                        <span className='text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold'>Game engines: </span>
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
                      <span className='text-xs md:text-sm lg:text-sm text-cyan-400 font-bold'>Player perspective: </span>
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


                    <div className="mt-2">
                      <Link onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to={`/game/${game.id}`}>
                        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
                          More
                        </MiniButton>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* --- */}

            <div className="flex items-center justify-center space-x-4 pt-4">
              <div className='text-right'>
                <MidButton
                  onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
                  disabled={page === 1}
                  gradientClass="gradient-1"
                  size="text-lg md:text-xl lg:text-2xl"
                  fullWidth={true}
                >
                  Prev
                </MidButton>
              </div>
              <div className='text-center'>
                <MidButton
                  disabled={page === 1}
                  gradientClass="gradient-1"
                  size="text-lg md:text-xl lg:text-2xl"
                >
                  {page}
                </MidButton>
              </div>
              <div className='text-left'>
                <MidButton
                  onClick={() => setPage((prevPage) => prevPage + 1)}
                  disabled={games.length < pageSize}
                  gradientClass="gradient-1"
                  size="text-lg md:text-xl lg:text-2xl"
                  fullWidth={true}
                >
                  Next
                </MidButton>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PlatformGamesPage;
