// src/components/Footer.tsx
import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faCaretRight, faGamepad , faRobot } from '@fortawesome/free-solid-svg-icons';
import MiniButton from './MiniButton';
import { motion } from 'framer-motion';
import LinkFontSize from '../components/LinkFontSize';

const Footer = () => {
  const [firstMenuOpen, setFirstMenuOpen] = useState(true);
  const [secondMenuOpen, setSecondMenuOpen] = useState(false);
  const footerRef = useRef<HTMLDivElement>(null);

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleFirstMenu = () => {
    setFirstMenuOpen(!firstMenuOpen);
    if(secondMenuOpen) setSecondMenuOpen(false);
    scrollToFooter();
  };

  const toggleSecondMenu = () => {
    setSecondMenuOpen(!secondMenuOpen);
    if(firstMenuOpen) setFirstMenuOpen(false);
    scrollToFooter();
  };

  return (
  <div className="container mx-auto p-4 ">
    <div className="bg-gradient-to-tr from-slate-900 via-slate-700 to-slate-500 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      {/* first mobile menu */}
      <div className={firstMenuOpen ? 'mobile-menu md:visible' : 'hidden'}>
        {/* menu items */}

          <div onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 text-slate-100 bg-slate-500 shadow-lg shadow-cyan-400/70">
              <FontAwesomeIcon icon={faRobot} className='text-xl' />&emsp;
              <LinkFontSize to="/platform" fontSize="text-xl md:text-2xl lg:text-2xl">Platforms</LinkFontSize>
          </div>
     
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/ps5" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Playstation 5
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/win" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;PC Microsoft Windows
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/mac" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Mac OS
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/ios" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;iOS
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/ps4--1" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;PlayStation 4
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/series-x" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Xbox Series X|S
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/linux" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Linux
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/ps3" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;PlayStation 3
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/xbox360" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Xbox 360
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/android" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Android
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/switch" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Nintendo Switch
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/ps2" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;PlayStation 2
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/c64" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Commodore C64/128/MAX
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/amiga" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Amiga
        </Link>
        </p>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
          <Link to="/platform/browser" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Web browser
        </Link>
        </p>
      </div>

      {/* second mobile menu */}
      <div className={secondMenuOpen ? 'mobile-menu md:visible' : 'hidden'}>
        {/* menu items */}

        <div onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 text-slate-100 bg-slate-500 shadow-lg shadow-cyan-400/70">
          <FontAwesomeIcon icon={faGamepad} className='text-xl' />&emsp;
          <LinkFontSize to="#" fontSize="text-xl md:text-2xl lg:text-2xl">Genres</LinkFontSize>
        </div>
        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/role-playing-rpg" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Role-playing (RPG)
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/adventure" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Adventure
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/shooter" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Shooter
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/platform" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Platform
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/sport" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Sport
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/racing" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Racing
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/arcade" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Arcade
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/hack-and-slash-beat-em-up" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Hack and slash/Beat
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/puzzle" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Puzzle
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/tactical" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Tactical
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/simulator" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Simulator
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/real-time-strategy-rts" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Real Time Strategy (RTS)
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/moba" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Moba
        </Link>
        </p>

        <p className='text-xl text-slate-100 hover:text-cyan-300'>
        <Link to="/genre/music" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="block py-2 px-4 hover:bg-slate-500 hover:shadow-lg hover:shadow-cyan-400/50 focus:shadow-xl focus:shadow-cyan-400/80 focus:text-cyan-300">
            <FontAwesomeIcon icon={faCaretRight} className='text-xl' />&emsp;Music
        </Link>
        </p>





      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* other components */}
          <div className="flex space-x-4">
            {/* logo */}
            <div>
              <Link to="/" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center py-5 px-2">
                <img src="/apple-icon.png" alt="pch-logo" className="h-8 md:h-10" />
              </Link>
            </div>
            {/* primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              
              <Link to="/platform" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}><MiniButton size="text-sm" fullWidth={true} >Platform</MiniButton></Link>

              <Link to="/engine" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} className='pl-4'><MiniButton size="text-sm" fullWidth={true} >Engine</MiniButton></Link>

            </div>
          </div>

          {/* mobile menu buttons */}
          <div className="flex items-center">
          <div className='text-xs md:text-xs lg:text-xs text-cyan-400 hover:text-cyan-500 py-5 pr-8'>Powered by IGDB | API | PCh 2024</div>
          <motion.div
            onClick={toggleFirstMenu}
            className="mobile-menu-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.4, 1], transition: { repeat: Infinity, duration: 1 } }}
            style={{ transformOrigin: 'center center' }}
          >
            <FontAwesomeIcon
              icon={firstMenuOpen ? faTimes : faRobot}
              className="text-white pr-8 cursor-pointer"
              size="lg"
            />
          </motion.div>
          <motion.div
            onClick={toggleSecondMenu}
            className="mobile-menu-button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{ scale: [1, 1.4, 1], transition: { repeat: Infinity, duration: 1 } }}
            style={{ transformOrigin: 'center center' }}
          >
            <FontAwesomeIcon
              icon={secondMenuOpen ? faTimes : faGamepad}
              className="text-white pr-4 cursor-pointer"
              size="lg"
            />
          </motion.div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
