import React from 'react';

const MiniButton = ({ size = 'text-lg', fullWidth = false, gradientClass = 'gradient-2', ...props }) => {
  const buttonClasses = `
    ${size}
    ${fullWidth ? 'w-full' : ''}
    text-slate-100
    ripple-button ${gradientClass}
    focus:outline-none
    focus:ring-2 focus:ring-cyan-300/80
    dark:focus:ring-slate-800
    shadow-lg shadow-slate-500/50 dark:shadow-lg dark:shadow-slate-800/80
    rounded-none px-5 py-0.5 text-center me-2 mb-2
    transition-all duration-300 ease-in-out
    transform hover:-translate-y-1 hover:scale-90
    transform-origin: center
    px-5
    py-0.5
    text-center
    me-2
    mb-2
  `;

  return (
    <button className={buttonClasses} {...props} />
  );
};

export default MiniButton;
