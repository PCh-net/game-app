import React from 'react';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl text-red-500">404 - Page Not Found</h1>
      <p className="text-lg text-gray-600">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
