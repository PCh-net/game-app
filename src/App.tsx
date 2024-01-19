import React from 'react';
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


import Footer from './components/Footer';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
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
          
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
       <Footer /> 
      </div>
      
    </Router>
  );
};

export default App;
