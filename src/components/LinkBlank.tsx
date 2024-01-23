import React from 'react';
import { Link } from 'react-router-dom';

interface LinkBlankProps {
  to: string;
  fontSize: string;
  fontType: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const LinkBlank: React.FC<LinkBlankProps> = ({
  to,
  fontSize = 'xl',
  fontType = 'Russo One',
  target = '_blank',
  rel = 'noopener noreferrer',
  children,
}) => {
  return (
    <span className={`text-${fontSize} ${fontType}`}>
      <Link to={to} target={target} rel={rel} className="text-cyan-200 hover:text-cyan-400 transition-colors duration-300">
        {children}
      </Link>
    </span>
  );
};

export default LinkBlank;
