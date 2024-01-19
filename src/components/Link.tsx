import React from 'react';

interface LinkProps {
  to: string;
  children: React.ReactNode;
}

const Link: React.FC<LinkProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      className="relative text-cyan-300 hover:text-cyan-600 transition-colors duration-300"
      style={{ textDecoration: 'none', position: 'relative', overflow: 'hidden' }}
    >
      {children}
      <style>{`
        a::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -2px;
          left: 0;
          background-color: currentColor;
          transition: width 0.3s ease;
        }
        a:hover::after {
          width: 100%;
        }
      `}</style>
    </a>
  );
};

export default Link;
