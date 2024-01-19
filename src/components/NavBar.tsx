import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import MiniButton from './MiniButton';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-500">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link to="/" className="flex items-center py-5 px-2">
                <img src="/images/logo/log-igdb-200px.jpg" alt="igdb-logo" className="h-8 md:h-10" />
              </Link>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <Link to="/" ><MiniButton fullWidth={true} >Home page</MiniButton></Link>
              <Link to="/news" className='pl-4' ><MiniButton fullWidth={true} >News</MiniButton></Link>
              <Link to="/platform" className='pl-4' ><MiniButton fullWidth={true} >Platform</MiniButton></Link>
              <Link to="/engine" className='pl-4' ><MiniButton fullWidth={true} >Engine</MiniButton></Link>
            </div>
          </div>
          {/* mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="mobile-menu-button">
              <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-white pr-4" size="lg" />
            </button>
          </div>
        </div>
      </div>
      {/* mobile menu */}
      <div className={isOpen ? 'mobile-menu md:hidden' : 'hidden'}>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/" onClick={() => window.scrollTo(0, 0)} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Home page
          </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/news" onClick={() => window.scrollTo(0, 0)} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;News
          </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform" onClick={() => window.scrollTo(0, 0)} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Platform
          </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/engine" onClick={() => window.scrollTo(0, 0)} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Engine
          </Link>
        </p>

      </div>
    </nav>
  );
};

export default NavBar;
