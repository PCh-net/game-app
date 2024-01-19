import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import MiniButton from '../components/MiniButton';
import { motion } from 'framer-motion';
import LinkFontSize from '../components/LinkFontSize';

const PlatformPage = () => {


  return (
    
  <div className="container mx-auto p-4">

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
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/android" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/android-13.png"
            alt="android-13"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/android">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/win" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/windows-11.png"
            alt="windows-11"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/win">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/switch" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/nintendo-switch.png"
            alt="nintendo-switch"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/switch">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/oculus-go" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/oculus-go.png"
            alt="oculus-go"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/oculus-go">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/mac" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/mac.png"
            alt="mac"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/mac">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/ios" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/ios.png"
            alt="ios"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/ios">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/platform/linux" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img
            className='w-full h-auto max-w-128 object-cover'
            src="/images/platform/linux.png"
            alt="linux"
          />
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/platform/linux">
        <MiniButton gradientClass="gradient-1" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

  </div>
  {/* ---------- */}
  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps2" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 2</LinkFontSize>
      </div>
      <Link to="/platform/ps2" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-2.png" alt="playstation-2" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps2">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 2</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps3" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 3</LinkFontSize>
      </div>
      <Link to="/platform/ps3">
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-3.png" alt="playstation-3" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps3">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 3</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps4--1" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 4</LinkFontSize>
      </div>
      <Link to="/platform/ps4--1">
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-4.png" alt="playstation-4" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps4--1">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 4</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/ps5" fontSize="text-xl md:text-2xl lg:text-2xl">Playstation 5</LinkFontSize>
      </div>
      <Link to="/platform/ps5">
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/playstation-5.png" alt="playstation-5" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/ps5">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Playstation 5</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/xbox" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox</LinkFontSize>
      </div>
      <Link to="/platform/xbox">
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox.png" alt="Xbox" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/xbox">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/xbox360" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox 360</LinkFontSize>
      </div>
      <Link to="/platform/xbox360">
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-360.png" alt="xbox360" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/xbox360">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox 360</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/xboxone" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox One</LinkFontSize>
      </div>
      <Link to="/platform/xboxone">
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-one.png" alt="xboxone" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/xboxone">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox One</MiniButton>
      </Link>
      </p>
    </div>
    {/* --- */}
    <div className="bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90 sm:visible md:visible lg:visible">
      <div className='pb-4'>
        <LinkFontSize to="/platform/series-x" fontSize="text-xl md:text-2xl lg:text-2xl">Xbox Series X/S</LinkFontSize>
      </div>
      <Link to="/platform/series-x">
      <img className='w-full h-auto max-w-128 object-cover shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90' src="/images/platform/xbox-x-s.png" alt="series-x" />
      </Link>
      <p className='pt-4'>
      <Link to="/platform/series-x">
        <MiniButton gradientClass="gradient-2" size='text-sm' fullWidth={true}>Xbox Series X/S</MiniButton>
      </Link>
      </p>
    </div>
    {/* ---------- */}


  </div>



</div>



  );
};

export default PlatformPage;
