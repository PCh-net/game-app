import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import HomePage from './pages/Homepage';
import News from './pages/News';
import GameDetail from './pages/GameDetail';
import PS5GamesPage from './pages/PS5GamesPage';
import PlatformGamesPage from './pages/PlatformGamesPage';
import GenreGamesPage from './pages/GenreGamesPage';
import NotFoundPage from './pages/NotFoundPage';
import EngineGamesPage from './pages/EngineGamesPage';
import EnginePage from './pages/EnginePage';
import PlatformPage from './pages/PlatformPage';
import MarvelGamesPage from './pages/MarvelGamesPage';
import ThemeGamesPage from './pages/ThemeGamesPage';
import ThemePage from './pages/ThemePage';
import PerspectiveGamesPage from './pages/PerspectiveGamesPage';
import KeywordGamesPage from './pages/KeywordGamesPage';
import PerspectivePage from './pages/PerspectivePage';



import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <HelmetProvider>
    <Router>
      <NavBar />
      <div className="bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800">

        {/* Routing */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />
          <Route path="/game/:gameId" element={<GameDetail />} />
          <Route path="/playstation5" element={<PS5GamesPage />} />
          <Route path="/platform" element={<PlatformPage />} />
          <Route path="/platform/:platformSlug" element={<PlatformGamesPage />} />
          <Route path="/genre/:genreSlug" element={<GenreGamesPage />} />
          <Route path="/engine/:gameEngineSlug" element={<EngineGamesPage />} />
          <Route path="/engine" element={<EnginePage />} />
          <Route path="/marvel" element={<MarvelGamesPage />} />
          <Route path="/theme/:themeSlug" element={<ThemeGamesPage />} />
          <Route path="/theme" element={<ThemePage />} />
          <Route path="/perspective/:perspectiveSlug" element={<PerspectiveGamesPage />} />
          <Route path="/keyword/:keywordSlug" element={<KeywordGamesPage />} />
          <Route path="/perspective" element={<PerspectivePage />} />

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
       <Footer /> 
      </div>
      
    </Router>
    </HelmetProvider>
  );
};

export default App;
