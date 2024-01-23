import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniButton from '../components/MiniButton';
import { motion } from 'framer-motion';
import LinkFontSize from '../components/LinkFontSize';
import SeoMetaTags from '../components/SeoMetaTags';

const PerspectivePage = () => {


  return (
    
  <div className="container mx-auto p-4">
  <SeoMetaTags 
    title={`Games perspectives | PCh`}
    description="Discover Games from Various Perspectives: Feel the Adrenaline in First-Person, Strategy and Tactics in Top-Down View, and Full Immersion in 3D Worlds."
    imageUrl="/images/poster-perspectives.jpg" 
  />
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/meta-quest-3" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/meta-quest-3.png"
            alt="meta-quest-3"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/meta-quest-3">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}


  </div>
  {/* ---------- */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps2" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 2</LinkFontSize>
      </div>
      <Link to="/platform/ps2" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-2.png" alt="playstation-2" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps2" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 2</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps3" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 3</LinkFontSize>
      </div>
      <Link to="/platform/ps3" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-3.png" alt="playstation-3" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps3" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 3</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps4--1" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 4</LinkFontSize>
      </div>
      <Link to="/platform/ps4--1" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-4.png" alt="playstation-4" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps4--1" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 4</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps5" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 5</LinkFontSize>
      </div>
      <Link to="/platform/ps5" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-5.png" alt="playstation-5" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps5" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 5</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/xbox" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox</LinkFontSize>
      </div>
      <Link to="/platform/xbox" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox.png" alt="Xbox" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/xbox" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/xbox360" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox 360</LinkFontSize>
      </div>
      <Link to="/platform/xbox360" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-360.png" alt="xbox360" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/xbox360" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox 360</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/xboxone" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox One</LinkFontSize>
      </div>
      <Link to="/platform/xboxone" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-one.png" alt="xboxone" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/xboxone" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox One</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/series-x" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox Series X/S</LinkFontSize>
      </div>
      <Link to="/platform/series-x" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <motion.div whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }} onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-x-s.png" alt="series-x" />
      </motion.div>
      </Link>
      <p className='pt-4'>
      <Link to="/platform/series-x" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox Series X/S</MiniButton>
      </Link>
      </p>
    </div>
    {/* ---------- */}


  </div>

</div>



  );
};

export default PerspectivePage;
