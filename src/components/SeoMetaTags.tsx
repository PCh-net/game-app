import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoMetaTags: React.FC<{ title: string; description: string; imageUrl?: string }> = ({ title, description, imageUrl }) => {
  return (
    <Helmet>
      {/* Podstawowe meta tagi SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* OpenGraph meta tagi dla mediów społecznościowych */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {imageUrl && <meta property="og:image" content={imageUrl} />}
      <meta property="og:type" content="website" />

      {/* Dodatkowe tagi, które mogą być przydatne */}
      <meta name="robots" content="noindex, nofollow" />
      <meta name="author" content="PCh" />
      <meta name="keywords" content="Gaming,VideoGames,eSports,GameReviews,PCGames,ConsoleGaming, OnlineMultiplayer,GameReleases,VRGaming,IGDB,pch" />

      {/* Twitter Card meta tagi */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}

      {/* Dodatkowe tagi specyficzne dla aplikacji */}
      {/* <meta name="application-name" content="Nazwa Twojej Aplikacji" /> */}
      {/* <meta name="theme-color" content="#kolor" /> */}
    </Helmet>
  );
};

export default SeoMetaTags;
