import React from 'react';
import ReactPlayer from 'react-player/youtube';

interface YouTubePlayerVars {
    color?: 'red' | 'white';
    rel?: 0 | 1;
    origin?: string;
    // Możesz dodać więcej opcji playerVars tutaj
}

interface YouTubeConfig {
    playerVars?: YouTubePlayerVars;
}

interface YouTubeVideoProps {
  videoId: string;
  config?: YouTubeConfig;
  rel?: 0 | 1;
  color?: 'red' | 'white';
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, config, rel = 0, color = 'red' }) => {
  const url = `https://www.youtube.com/watch?v=${videoId}`;

  const effectiveConfig = {
      ...config,
      playerVars: {
          ...config?.playerVars,
          origin: config?.playerVars?.origin ?? window.location.origin,
          rel: rel, // Użyj wartości rel
          color: color, // Użyj wartości color
      }
  };

    return (
        <div className="player-wrapper shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70" style={{ position: 'relative', paddingTop: '56.25%' }}>
            <ReactPlayer
                url={url}
                config={effectiveConfig}
                className="react-player"
                style={{ position: 'absolute', top: 0, left: 0 }}
                width="100%"
                height="100%"
                // Pozostałe opcje konfiguracji
                playing={false}
                controls={true}
                light={true}
                loop={false}
                muted={false}
                pip={true}
                stopOnUnmount={true}
                volume={0.8}
                playbackRate={1.0}
                progressInterval={1000}
                // onReady={() => console.log('Film gotowy do odtwarzania')}
                // onStart={() => console.log('Rozpoczęto odtwarzanie filmu')}
                // onPlay={() => console.log('Film jest odtwarzany')}
                // onPause={() => console.log('Film został wstrzymany')}
                // onBuffer={() => console.log('Film buforowany')}
                // onSeek={time => console.log(`Przesunięto do: ${time}`)}
                // onEnded={() => console.log('Film się zakończył')}
                // onError={e => console.log('Wystąpił błąd:', e)}
            />
        </div>
    );
}

export default YouTubeVideo;

// autoplay: Kontroluje, czy wideo ma być odtwarzane automatycznie. (1 = auto-play, 0 = no auto-play)
// cc_load_policy: Określa, czy napisy mają być wyświetlane domyślnie. (1 = pokazuj napisy)
// color: Pozwala wybrać kolor paska postępu. ('red' lub 'white')
// controls: Określa, czy kontrolki odtwarzacza mają być wyświetlane. (0, 1, lub 2)
// disablekb: Włącza/wyłącza sterowanie klawiaturą odtwarzacza. (0 = włączone, 1 = wyłączone)
// enablejsapi: Określa, czy interfejs API JavaScript odtwarzacza jest włączony. (0 = wyłączony, 1 = włączony)
// fs: Włącza lub wyłącza przycisk pełnego ekranu. (0 = wyłączony, 1 = włączony)
// hl: Ustawia język odtwarzacza.
// iv_load_policy: Określa, czy anotacje wideo mają być wyświetlane. (1 = zawsze pokazuj, 3 = nie pokazuj)
// list: Określa listę odtwarzania YouTube, z której mają być odtwarzane filmy.
// listType: Określa typ listy odtwarzania ('playlist', 'search', lub 'user_uploads').
// loop: Określa, czy wideo ma być odtwarzane w pętli. (0 = nie, 1 = tak)
// modestbranding: Ukrywa logo YouTube na pasku sterowania. (1 = ukryj logo)
// origin: Określa źródłowy adres URL strony, na której osadzony jest odtwarzacz.
// playlist: Określa konkretne wideo lub wideo z listy odtwarzania, które mają być odtwarzane.
// playsinline: Określa, czy odtwarzanie na urządzeniach iOS ma odbywać się w oknie, a nie w pełnoekranowym trybie. (0 = pełnoekranowy, 1 = w oknie)
// rel: Określa, czy po zakończeniu odtwarzania wideo mają być pokazywane powiązane filmy. (0 = nie, 1 = tak)
// showinfo: Określa, czy na początku odtwarzania mają być wyświetlane informacje o wideo. (0 = nie, 1 = tak)
// start: Określa czas (w sekundach), od którego ma rozpocząć się odtwarzanie wideo.
// widget_referrer: Określa URL strony internetowej, z której użytkownik został przekierowany.