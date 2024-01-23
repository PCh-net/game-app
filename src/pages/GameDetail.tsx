import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faPhotoFilm, faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faApple, faAndroid, faSteamSquare } from '@fortawesome/free-brands-svg-icons';


import LinkFontSize from '../components/LinkFontSize';
import YouTubeVideo from '../components/VideoPlayer';
import ProgressBar from '../components/ProgressBar';
import LinkBlank from '../components/LinkBlank';
import SeoMetaTags from '../components/SeoMetaTags';

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
  total_rating_count: number;
  total_rating: number;
  rating: number;
  release_dates: ReleaseDates[];
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
  checksum: number;
  category: number;
  trusted: boolean;
  url: string;
}
interface ReleaseDates {
  id: number;
  date: number;
  human: string;
  m: string;
  y: string;
}
interface PlayerPerspective {
  id: number;
  name: string;
  slug: string;
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
          endpoint: '/games',
          fields: 'name,storyline,summary,slug,category,created_at,first_release_date,total_rating,total_rating_count,rating,similar_games.name,similar_games.cover.image_id,platforms.name,platforms.slug,genres.name,genres.slug,language_supports.language.name,language_supports.language.native_name,cover.url,cover.image_id,game_engines.name,game_engines.slug,screenshots.image_id,screenshots.url,alternative_names.comment,alternative_names.name,keywords.name,keywords.slug,keywords.url,themes.name,themes.slug,themes.url,websites.category,websites.trusted,websites.url,websites.checksum,videos.name,videos.video_id,player_perspectives.name,player_perspectives.slug,player_perspectives.url',
          where: `id = ${gameId}`,
          sort: 'name desc',
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


  // useEffect(() => {
  //   console.log(game);
  // }, [game]);


  const convertUnixToDate = (unixTimestamp: number) => {
    const date = new Date(unixTimestamp * 1000);
    return date.toISOString().split('T')[0];
  };

  const shortenSummary = (summary: string, maxLength: number = 160): string => {
    if (summary.length <= maxLength) {
      return summary;
    }
    return summary.substr(0, summary.lastIndexOf(' ', maxLength)) + '...';
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
        <SeoMetaTags 
          title={`Game info | ${game.name} |  | PCh`} 
          description={shortenSummary(game.summary, 160)} 
          imageUrl= {`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`}
        />
            <div className='flex-row basis-2/6 lg:basis-2/6 p-2'>
              <img
                key={game.created_at}
                className='w-full max-w-96 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90'
                src={`https://images.igdb.com/igdb/image/upload/t_cover_big/${game.cover?.image_id}.png`}
                alt={`cover-${game.name}`}
              />
              <div className='py-4'>
              {game.rating ? (
                <ProgressBar currentProgress={game.rating} maxProgress={100} />
              ) : (
                null
              )}
              </div>

            </div>
            <div className='flex-row basis-4/6 lg:basis-4/6 p-2'>
              <h1 className='text-2xl md:text-2xl lg:text-2xl text-slate-100'>{game.name}</h1>
              <p className='text-sm md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400'>First release date: {game.first_release_date ? convertUnixToDate(game.first_release_date) : "Data nieznana"}
</p>
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
                <span className='text-xs md:text-sm lg:text-sm text-cyan-400 hover:text-slate-100 font-bold'>Platforms:  </span>
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
                    <p className='text-xs md:text-sm lg:text-sm text-slate-100'><FontAwesomeIcon icon={faCaretRight} className="text-cyan-300" /> {alternative_name.comment}&emsp;{alternative_name.name}</p>
                  </div>
                ))
              ) : (
                null
              )}

              <p className='text-xs md:text-sm lg:text-sm text-slate-100 pt-3 line-clamp-3 text-ellipsis min-h-[3rem]'>
                <span className='text-xs md:text-sm lg:text-sm text-slate-100 hover:text-cyan-400 font-bold'>Keywords: </span>
                {game.keywords && game.keywords.length > 0
                ? game.keywords.map((keyword, index) => (
                    <React.Fragment key={keyword.id}>
                      <LinkFontSize to={`/keyword/${game.keywords[index].slug}`} fontSize="text-xs md:text-sm lg:text-sm" fontType="Tektur">
                        {keyword.name}
                      </LinkFontSize>
                      {index < game.keywords.length - 1 ? ', ' : ''}
                    </React.Fragment>
                  ))
                : false }
              </p>


              {/* --- */}

              {/* <p className='text-xs md:text-sm lg:text-sm text-slate-100 font-bold py-2'>
                Websites:
              </p>



              {game.websites && game.websites.length > 0
                ? game.websites.map((website, index) => (
                    <div key={website.id}>
                      {website.category === 13 ? (
                        <p>
                        <FontAwesomeIcon icon={faSteamSquare} className="text-sm md:text-lg lg:text-lg text-cyan-300 pr-4" />
                        <LinkBlank to={website.url} fontSize="text-sm md:text-sm lg:text-sm" fontType="Tektur">Steam</LinkBlank>
                        </p>
                      ) : website.category === 12 ? (
                        <p>
                        <FontAwesomeIcon icon={faAndroid} className="text-sm md:text-lg lg:text-lg text-cyan-300 pr-4" />
                        <LinkBlank to={website.url} fontSize="text-sm md:text-sm lg:text-sm" fontType="Tektur">Android</LinkBlank>
                        </p>
                      ) : website.category === 10 ? (
                        <p>
                        <FontAwesomeIcon icon={faApple} className="text-sm md:text-lg lg:text-lg text-cyan-300 pr-4" />
                        <LinkBlank to={website.url} fontSize="text-sm md:text-sm lg:text-sm" fontType="Tektur">Apple App</LinkBlank>
                        </p>
                      ) : website.category === 16 ? (
                        <p>
                        <FontAwesomeIcon icon={faGamepad} className="text-sm md:text-lg lg:text-lg text-cyan-300 pr-4" />
                        <LinkBlank to={website.url} fontSize="text-sm md:text-sm lg:text-sm" fontType="Tektur">Epic games </LinkBlank>
                        </p>
                      ) : (
                        null
                      )}
                      
                    </div>
                  ))
                : null }


              {/* --- */}
              {game.videos && game.videos.length > 0 ? (
                game.videos.map(video => (
                  <div key={video.id} className='pb-4'>
                    <h3 className='text-lg md:text-lg lg:text-2xl text-cyan-100 pb-4 pt-2'>
                    <FontAwesomeIcon icon={faYoutube} className="text-cyan-300" /> Video  - {video.name}</h3>
                    <YouTubeVideo videoId={video.video_id} rel={1} color="white" />
                  </div>
                ))
              ) : (
                null
              )}

              <h3 className='text-lg md:text-xl lg:text-xl text-slate-100 hover:text-cyan-400 pt-3'>Screen shots</h3>

              {game.screenshots && game.screenshots.length > 0 ? (
                game.screenshots.map((screenshot, index) => (
                  <React.Fragment key={screenshot.id}>
                    <p className='text-sm md:text-lg lg:text-lg text-slate-100'><FontAwesomeIcon icon={faPhotoFilm} className="text-cyan-300" />  Screen #{index + 1}</p>
                    <img
                      key={screenshot.id}
                      loading='lazy'
                      className='w-full border-solid border-2 border-cyan-400 max-h-96 mb-4 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70'
                      src={`https://images.igdb.com/igdb/image/upload/t_screenshot_big/${screenshot?.image_id}.jpg`}
                      alt={`screenshot-${screenshot.image_id}`}
                    />
                  </React.Fragment>
                ))
              ) : (
                <p className='text-slate-100'>No screen shots.</p>
              )}


              <h1 className='text-lg md:text-xl lg:text-2xl text-slate-100 pt-3'>Similar games:</h1>
              {game.similar_games && game.similar_games.length > 0 ? (
                game.similar_games.map(similar_game => (
                  <div key={similar_game.id}>
                    <FontAwesomeIcon icon={faCaretRight} className="text-sm md:text-lg lg:text-lg text-cyan-300" />&emsp;<LinkFontSize to={`/game/${similar_game.id}`} fontSize="text-sm md:text-lg lg:text-lg" fontType="Tektur">{similar_game.name}</LinkFontSize>
                  </div>
                ))
              ) : (
                null
              )}

              {/* {JSON.stringify(game.alternative_names)} */}



            </div>
          </div>
        )
      )}
    </div>
  );
};

export default GameDetail;
