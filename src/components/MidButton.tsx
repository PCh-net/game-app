import React from 'react';

interface MidButtonProps {
  size?: string;
  fullWidth?: boolean;
  gradientClass?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children?: React.ReactNode;
}

const MidButton: React.FC<MidButtonProps> = ({
  size = 'text-2xl',
  fullWidth = false,
  gradientClass = 'gradient-2',
  onClick,
  disabled,
  children
}) => {
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
    ${disabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : ''}
  `;

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(event);
    }

    window.scrollTo(0, 0);
  };

  return (
    <button className={buttonClasses} onClick={handleClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default MidButton;
