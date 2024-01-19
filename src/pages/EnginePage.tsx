import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import MiniButton from '../components/MiniButton';
import { motion } from 'framer-motion';

const EnginePage = () => {


  return (
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 pt-4">
    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/rage" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/rage.png" alt="rage"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/rage">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/creation-engine" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/creation-engine-2.png" alt="creation-engine-2"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/creation-engine">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/re-engine" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/re-engine.png" alt="re-engine"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/re-engine">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/unreal-engine-4--1" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/unreal-engine-4.png" alt="unreal-engine-4"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/unreal-engine-4--1">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/havok" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/havok.png" alt="havok"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/havok">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/anvilnext" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/anvil-next.png" alt="anvil-next"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/anvilnext">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/unity-5" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/unity-5.png" alt="anvil-next"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/unity-5">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>

    {/* --- */}
    <div className="flex flex-col bg-gradient-to-r from-slate-600 via-slate-700 to-slate-500 p-4 shadow-lg shadow-cyan-400/50 hover:shadow-xl hover:shadow-cyan-400/70 focus:shadow-cyan-200/90">
      <Link to="/engine/source" onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}>
        <motion.div
          whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(55, 175, 230, 0.7)' }}
        >
          <img className='w-full h-auto max-w-128 object-cover' src="/images/engine/source.png" alt="source"/>
        </motion.div>
      </Link>
      <Link className='pt-4' onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }} to="/engine/source">
        <MiniButton gradientClass="gradient-2" size="text-sm" fullWidth={true}>
          Games
        </MiniButton>
      </Link>
    </div>


    </div>
  </div>
  );
};

export default EnginePage;
