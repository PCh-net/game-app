import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MiniButton from '../components/MiniButton';
import { motion } from 'framer-motion';
import LinkFontSize from '../components/LinkFontSize';

import SeoMetaTags from '../components/SeoMetaTags';

const ThemePage = () => {


  return (
    
  <div className="container mx-auto p-4">
  <SeoMetaTags 
    title={`Games theme | PCh`}
    description="Thematically Sorted Games: Experience the Diversity of Worlds, from Dark Fantasy to Bright and Colorful Realities. Find the Perfect Game for Your Taste."
    imageUrl="/images/poster-themes.jpg" 
  />
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/fantasy" fontSize="text-xl md:text-xl lg:text-2xl">Fantasy games</LinkFontSize>
      </div>
      <Link to="/theme/fantasy" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-fantasy.jpg" alt="theme-fantasy"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/fantasy">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>Fantasy</MiniButton>
      </Link>
    </div>
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/survival" fontSize="text-xl md:text-xl lg:text-2xl">Survival games</LinkFontSize>
      </div>
      <Link to="/theme/survival" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-survival.jpg" alt="theme-survival"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/survival">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>Survival</MiniButton>
      </Link>
    </div>
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/non-fiction" fontSize="text-xl md:text-xl lg:text-2xl">Non fiction games</LinkFontSize>
      </div>
      <Link to="/theme/non-fiction" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-non-fiction.jpg" alt="theme-non-fiction"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/non-fiction">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>Non fiction</MiniButton>
      </Link>
    </div>
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/open-world" fontSize="text-xl md:text-xl lg:text-2xl">Open world games</LinkFontSize>
      </div>
      <Link to="/theme/open-world" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-open-world.jpg" alt="theme-open-world"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/open-world">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>Open world</MiniButton>
      </Link>
    </div>
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/warfare" fontSize="text-xl md:text-xl lg:text-2xl">Warfare games</LinkFontSize>
      </div>
      <Link to="/theme/warfare" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-war-fare.jpg" alt="theme-war-fare"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/warfare">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>Warfare</MiniButton>
      </Link>
    </div>
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/horror" fontSize="text-xl md:text-xl lg:text-2xl">Horror games</LinkFontSize>
      </div>
      <Link to="/theme/horror" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-horror.jpg" alt="theme-horror"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/horror">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>Horror</MiniButton>
      </Link>
    </div>
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/science-fiction" fontSize="text-sm md:text-xl lg:text-2xl">SF  games</LinkFontSize>
      </div>
      <Link to="/theme/science-fiction" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-science-fiction.jpg" alt="theme-science-fiction"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/science-fiction">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>SF</MiniButton>
      </Link>
    </div>
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <div className='pb-4'>
        <LinkFontSize to="/theme/mystery" fontSize="text-xl md:text-xl lg:text-2xl">Mystery  games</LinkFontSize>
      </div>
      <Link to="/theme/mystery" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/themes/theme-mystery.jpg" alt="theme-mystery"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/theme/mystery">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>Mystery</MiniButton>
      </Link>
    </div>


    {/* ---------- */}


  </div>

</div>



  );
};

export default ThemePage;
