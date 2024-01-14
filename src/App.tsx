import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importuj komponenty stron
import HomePage from './pages/Homepage';
import News from './pages/News';
// import NotFoundPage from './pages/NotFoundPage';

import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <div className="bg-gradient-to-tr from-slate-600 via-slate-700 to-slate-800">
        {/* Nawigacja */}

        {/* Routing */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news" element={<News />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
