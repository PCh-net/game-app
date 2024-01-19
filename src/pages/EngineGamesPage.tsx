// src/pages/EngineGamesPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';

import MiniButton from '../components/MiniButton';
import MidButton from '../components/MidButton';
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

const EngineGamesPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const { gameEngineSlug } = useParams<{ gameEngineSlug: string }>();
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);
  const safePlatformSlug = gameEngineSlug ?? 'unknown-genre';

  useEffect(() => {

    if (!gameEngineSlug) {
      // ... 404
      navigate('/404');

      console.log({gameEngineSlug});
      console.log('ok'); 

    } else {
      // ... logic
      const fetchGames = async () => {
        setLoading(true);
        setIsLoading(true);
        console.log("Aktualna strona:", page);
        console.log("Ilość elementów na stronie:", pageSize);
        try {
          let apiUrl: string;
          if (process.env.NODE_ENV === 'production') {
            apiUrl = '/api/getData'; 
          } else {
            apiUrl = 'http://localhost:3001/getData';
          }
    console.log({gameEngineSlug});
    console.log('ok');

          const gamesResponse = await axios.post(apiUrl, {
            endpoint: '/games',
            fields: 'name,rating_count,storyline,summary,platforms.slug,platforms.name,cover.url,cover.image_id,genres.name,genres.slug,game_engines.name,game_engines.slug',
            where: `game_engines.slug = "${gameEngineSlug}"`,
            sort: 'total_rating_count desc',
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
  }, [gameEngineSlug, navigate, page, pageSize]);


  useEffect(() => {
    console.log(games);
  }, [games]);


  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl md:text-4xl lg:text-4xl text-slate-200 py-3">
      Games engine {safePlatformSlug.toUpperCase().replace('-', ' ')}
      </h1>
      {/* ... */}
      <div className="">
        {loading ? (
          <div className="loader-container">
            <h1 className="text-2xl text-slate-200">Loading...</h1>
            <img className="w-40" src="/images/loader.gif" alt="loader"></img>
          </div>
        ) : (
          <>
            {isLoading && <img className="w-20" src="/images/loader.gif" alt="Loading..." />}
            <div className="flex items-center justify-center space-x-4 pb-4">
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
                  <Link to={`/game/${game.id}`}>
                    <img
                      className="h-full max-h-96 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90"
                      src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`}
                      alt={`cover-${game.name}`}
                    />
                    </Link>
                  </div>
                  <div className="flex-row basis-4/6 p-2 text-slate-300">
                    <div className='pb-4'>
                      <LinkFontSize to={`/game/${game.id}`} fontSize="text-lg md:text-xl lg:text-xl">{game.name}</LinkFontSize>
                    </div>

                    <p className="text-xs md:text-sm lg:text-sm text-slate-100 line-clamp-3 text-ellipsis min-h-[3rem]">
                      {game.summary}
                    </p>

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
                      : null }              
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

                    <div className="mt-2">
                      <Link onClick={() => window.scrollTo(0, 0)}  to={`/game/${game.id}`}>
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

export default EngineGamesPage;
