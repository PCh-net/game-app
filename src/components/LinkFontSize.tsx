import React from 'react';

interface LinkWithFontSizeProps {
  to: string;
  children: React.ReactNode;
  fontSize?: string;
  fontType?: 'Russo One' | 'Tektur';
}

const LinkFontSize: React.FC<LinkWithFontSizeProps> = ({
  to,
  children,
  fontSize = '',
  fontType = 'Russo One'
}) => {
  const fontFamily = fontType === 'Tektur' ? "'Tektur', sans-serif" : "'Russo One', sans-serif";


  return (
    <a
      href={to}
      className={`relative text-cyan-200 hover:text-cyan-400 transition-colors duration-300 hover:underline ${fontSize}`}
      style={{
        textDecoration: 'none',
        position: 'relative',
        overflow: 'bottom',
        fontFamily: fontFamily
      }}
      onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); }}
    >
      {children}
      {/* <style>{`
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
      `}</style> */}
    </a>
  );
};

export default LinkFontSize;
