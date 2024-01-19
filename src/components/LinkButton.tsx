import React from 'react';
import { Link } from 'react-router-dom';

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton: React.FC<LinkButtonProps> = ({ to, children }) => {
  return (
    <Link to={to}>
      {children}
    </Link>
  );
};

export default LinkButton;
