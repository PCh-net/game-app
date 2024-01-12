import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

// Importuj komponenty stron
import HomePage from './pages/Homepage';
import News from './pages/News';
// import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="container mx-auto">
        {/* Nawigacja */}
        <nav className="bg-gray-800 p-4 text-white">
          <ul className="flex space-x-4">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link>
            </li>
          </ul>
        </nav>

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
