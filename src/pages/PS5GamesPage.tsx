// src/pages/PS5GamesPage.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import MiniButton from '../components/MiniButton';
import MidButton from '../components/MidButton';

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

const PS5GamesPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [pageSize] = useState(12);

  useEffect(() => {
    const fetchPS5Games = async () => {
      setIsLoading(true);
      console.log("Aktualna strona:", page);
      console.log("Ilość elementów na stronie:", pageSize);
      try {
        let apiUrl: string;
        if (process.env.NODE_ENV === 'production') {
          apiUrl = '/api/getData'; // Środowisko produkcyjne
        } else {
          apiUrl = 'http://localhost:3001/getData'; // Środowisko lokalne
        }
  
        // Zapytanie do IGDB API z filtrem na platformę PlayStation 5
        const gamesResponse = await axios.post(apiUrl, {
          endpoint: '/games',
          fields: 'name,rating_count,storyline,summary,platforms.slug,platforms.name,cover.url,cover.image_id,genres.name,game_engines.name',
          where: 'release_dates.platform = (48,49,6)',
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
  
    fetchPS5Games();
  }, [page, pageSize]);
  

  // useEffect(() => {
  //   console.log(games);
  // }, [games]);


  return (
    <div className="container mx-auto p-4">
      <div className="">
        {loading ? (
          <div className="loader-container">
            <h1 className="text-2xl text-slate-200">Loading...</h1>
            <img className="w-40" src="/images/loader.gif" alt="loader"></img>
          </div>
        ) : (
          <>
            <h1 className="text-2xl md:text-4xl lg:text-4xl text-slate-200">PlayStation 5 Games</h1>{isLoading && <img className="w-20" src="/images/loader.gif" alt="Loading..." />}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
              {games.map((game) => (
                <div
                  key={game.id}
                  className="flex bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90"
                >
                  <div className="flex-row basis-2/6">
                    <img
                      className="h-full max-h-96 object-cover py-2 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90"
                      src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`}
                      alt={`cover-${game.name}`}
                    />
                  </div>
                  <div className="flex-row basis-4/6 p-2 text-slate-300">
                    <h1 className="text-lg md:text-xl lg:text-xl text-slate-100 hover:text-cyan-400 line-clamp-2 text-ellipsis min-h-[2rem]">
                      {game.name}
                    </h1>
                    <p className="text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400 line-clamp-3 text-ellipsis min-h-[3rem]">
                      {game.summary}
                    </p>
                    <p className="text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400 line-clamp-2 text-ellipsis min-h-[2rem]">
                      <span className="text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold">
                        Genres:&emsp;
                      </span>
                      {game.genres && game.genres.length > 0 ? game.genres.map((genre) => genre.name).join(', ') : 'No data'}
                    </p>
                    <p className="text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400 line-clamp-2 text-ellipsis min-h-[2rem]">
                      <span className="text-xs md
-md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold">
                        Platforms:&emsp;
                      </span>
                      {game.platforms && game.platforms.length > 0
                        ? game.platforms.map((platforma) => platforma.name).join(', ')
                        : 'No data'}
                    </p>
                    <p className="text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400 line-clamp-2 text-ellipsis min-h-[2rem]">
                      {game.game_engines && game.game_engines.length > 0 ? (
                        <>
                          <span className="text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold">
                            Game engines:
                          </span>
                          {game.game_engines.map((game_engine) => game_engine.name).join(', ')}
                        </>
                      ) : (
                        'No data'
                      )}
                    </p>
                    <p className="pt-4">
                      <Link className="cursor-pointer" to={`/game/${game.id}`}>
                        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
                          More
                        </MiniButton>
                      </Link>
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* --- */}
            <div className="flex justify-center mt-4">
            <MidButton
              onClick={() => setPage((prevPage) => Math.max(prevPage - 1, 1))}
              disabled={page === 1}
              gradientClass="gradient-1"
              size="text-xl"
            >
              Previous
            </MidButton>
            <MidButton
              onClick={() => setPage((prevPage) => prevPage + 1)}
              disabled={games.length < pageSize}
              gradientClass="gradient-1"
              size="text-xl"
            >
              Next
            </MidButton>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PS5GamesPage;
