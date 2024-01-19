import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import MiniButton from '../components/MiniButton';
import Link from '../components/Link';
import LinkButton from '../components/LinkButton';
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
  screenshots: ScreenShots[];
  language_supports: LanguagesSup[];
  videos: Videos[];
  slug: string;
  similar_games: SimilarGames[];
  alternative_names: AlternativeNames[];
  category: number;
  created_at: number;
  first_release_date: number;
  keywords: KeyWords[];
  themes: Themes[];
  websites: Websites[];
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
interface ScreenShots {
  id: number;
  image_id: string;
  url: string;
}
interface LanguagesSup {
  id: number;
  name: string;
  language: Languages;
}
interface Languages {
  id: number;
  name: string;
  native_name: string;
}


interface Videos {
  id: number;
  name: string;
  video_id: string;
}
interface SimilarGames {
  id: number;
  name: string;
  cover: CoverId[];
}
interface CoverId {
  id: number;
  image_id: string;
}
interface AlternativeNames {
  id: number;
  comment: string;
  name: string;
}
interface KeyWords {
  id: number;
  name: string;
  slug: string;
  url: string;
}
interface Themes {
  id: number;
  name: string;
  slug: string;
  url: string;
}
interface Websites {
  id: number;
  category: number;
  trusted: boolean;
  url: string;
}

const GameDetail: React.FC = () => {
  const { gameId } = useParams(); // gameId
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGameDetails = async () => {
      try {
        let apiUrl: string;
        if (process.env.NODE_ENV === 'production') {
          apiUrl = '/api/getData'; //
        } else {
          apiUrl = 'http://localhost:3001/getData'; //
        }
        
        const gameResponse = await axios.post(apiUrl, {
          endpoint: '/games', // Ścieżka endpointu do IGDB API
          fields: 'name,storyline,summary,slug,category,created_at,first_release_date,similar_games.name,similar_games.cover.image_id,platforms.name,platforms.slug,genres.name,genres.slug,language_supports.language.name,language_supports.language.native_name,cover.url,cover.image_id,game_engines.name,game_engines.slug,screenshots.image_id,screenshots.url,alternative_names.comment,alternative_names.name,keywords.name,keywords.slug,keywords.url,themes.name,themes.slug,themes.url,websites.category,websites.trusted,websites.url',
          where: `id = ${gameId}`,
          sort: 'name asc',
          limit: 1,
          offset: '',
        });

        if (gameResponse.data.length === 1) {
          setGame(gameResponse.data[0]);
        } else {
          console.error('Game not found');
        }
      } catch (error) {
        console.error('Error fetching game details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGameDetails();
  }, [gameId]);



  const convertUnixToDate = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().split('T')[0];
  };

  return (
    <div className="container mx-auto p-4">
      {loading ? (
        <div className="loader-container">
          <h1 className='text-2xl text-slate-200'>Loading...</h1>
          <img className='w-40' src='/images/loader.gif' alt='loader'></img>
        </div>
      ) : (
        game && (
          <div className='sm:flex bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90'>
            <div className='flex-row basis-2/6 lg:basis-2/6'>
              <img
                key={game.id}
                className='w-full max-w-96 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90'
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`}
                alt={`cover-${game.name}`}
              />
            </div>
            <div className='flex-row basis-4/6 p-2 lg:basis-4/6'>
              <h1 className='text-2xl md:text-2xl lg:text-2xl text-slate-100'>{game.name}</h1>
              <p className='text-sm md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>First release date: {convertUnixToDate(game.first_release_date)}</p>
              <p className='text-sm md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>Ceated at: {convertUnixToDate(game.created_at)}</p>

              {game.storyline ? (
                <>
                <h3 className='text-lg md:text-xl lg:text-xl text-slate-100 hover:text-cyan-400'>Storyline:</h3>
                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>{game.storyline}</p>
                </>
              ) : (
                null
              )}

              {game.summary ? (
                <>
                <h3 className='text-lg md:text-xl lg:text-xl text-slate-100 hover:text-cyan-400'>Summary:</h3>
                <p className='text-xs md:text-sm lg:text-sm text-slate-100'>{game.summary}</p>
                </>
              ) : (
                null
              )}

              {game.videos && game.videos.length > 0 ? (
                game.videos.map(video => (
                  <div key={video.id}>
                    <p className='text-slate-200'>Video</p>
                  </div>
                ))
              ) : (
                null
              )}

              <p className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>
                <span className='text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold'>Genres: </span>
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

              <p className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>
                <span className='text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold'>Platforms: </span>
                {game.platforms && game.platforms.length > 0
                ? game.platforms.map((platform, index) => (
                    <React.Fragment key={platform.id}>
                      <LinkFontSize to={`/platform/${platform.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                        {platform.name}
                      </LinkFontSize>
                      {index < game.platforms.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))
                : null }              
              </p>

              <p className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>
                <span className='text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold'>Game engines: </span>
                {game.game_engines && game.game_engines.length > 0
                ? game.game_engines.map((game_engine, index) => (
                    <React.Fragment key={game_engine.id}>
                      <LinkFontSize to={`/engine/${game_engine.slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                        {game_engine.name}
                      </LinkFontSize>
                      {index < game.game_engines.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))
                : null }              
              </p>



              <p className='text-xs md:text-sm lg:text-sm text-slate-100'>
                {game.language_supports && game.language_supports.length > 0 ? (
                  <>
                    <span className='text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold'>Language supports: </span>
                    {game.language_supports.map((language_support) => language_support.language.native_name).join(', ')}
                  </>
                ) : (
                  null
                )}
              </p>

              {game.alternative_names && game.alternative_names.length > 0 ? (
                <h1 className='text-lg md:text-xl lg:text-xl text-slate-100 pt-3'>Alternative names:</h1>
              ) : (
                null
              )}
              {game.alternative_names && game.alternative_names.length > 0 ? (
                game.alternative_names.map(alternative_name => (
                  <div key={alternative_name.id}>
                    <p className='text-xs md:text-sm lg:text-sm text-slate-100'><FontAwesomeIcon icon={faCaretRight} className="text-cyan-300" />&emsp;{alternative_name.comment}&emsp;{alternative_name.name}</p>
                  </div>
                ))
              ) : (
                null
              )}

              <p className='text-xs md:text-sm lg:text-sm text-slate-100 pt-3'>
                <span className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400 font-bold'>Keywords: </span>
                {game.keywords && game.keywords.length > 0
                ? game.keywords.map((keyword, index) => (
                    <React.Fragment key={keyword.id}>
                      <Link to={`/game/${game.id}`}>
                        {keyword.name}
                      </Link>
                      {index < game.keywords.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))
                : null }              
              </p>

              <p className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>
                <span className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400 font-bold'>Themes: </span>
                {game.themes && game.themes.length > 0
                ? game.themes.map((theme, index) => (
                    <React.Fragment key={theme.id}>
                      <Link to={`/game/${game.id}`}>
                        {theme.name}
                      </Link>
                      {index < game.themes.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))
                : null }              
              </p>

              <h3 className='text-lg md:text-xl lg:text-xl text-slate-100 hover:text-cyan-400 pt-3'>Screen shots:</h3>
              {game.screenshots.map(screenshot => (
                <img
                key={screenshot.id}
                loading='lazy'
                className='w-full max-h-96 object-cover py-2 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90'
                src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${screenshot?.image_id
                }.jpg`}
                  alt={`screenshot-${screenshot.image_id}`}
                />
              ))}

              <h1 className='text-lg md:text-xl lg:text-2xl text-slate-100 pt-3'>Similar games:</h1>
              {game.similar_games && game.similar_games.length > 0 ? (
                game.similar_games.map(similar_game => (
                  <div key={similar_game.id}>
                    <FontAwesomeIcon icon={faCaretRight} className="text-sm md:text-lg lg:text-lg text-cyan-300" />&emsp;<LinkFontSize to={`/genre/${similar_game.id}`} fontSize="text-sm md:text-lg lg:text-lg" fontType="Tektur">{similar_game.name}</LinkFontSize>
                  </div>
                ))
              ) : (
                null
              )}

              {/* {JSON.stringify(game.alternative_names)} */}


              <p className='pt-4'>
                <LinkButton to='/'>
                  <MiniButton gradientClass='gradient-2' size='text-sm' fullWidth={true}>Home Page</MiniButton>
                </LinkButton>
              </p>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default GameDetail;
