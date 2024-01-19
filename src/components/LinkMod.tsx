import React from 'react';

interface LinkModProps {
  to: string;
  children: React.ReactNode;
}

const LinkMod: React.FC<LinkModProps> = ({ to, children }) => {
  return (
    <a
      href={to}
      className="relative text-cyan-400 hover:text-slate-100 transition-colors duration-300"
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
          color: #0d4a6a; /* Wartość dla text-cyan-800 z Tailwind */
        }
      `}</style>
    </a>
  );
};

export default LinkMod;
