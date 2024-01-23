import React from 'react';

import SeoMetaTags from '../components/SeoMetaTags';

const NotFoundPage: React.FC = () => {
  return (
    <div className="text-center">
     <SeoMetaTags 
          title={`Not found | PCh`}
          description="The page you are looking for does not exist."
          imageUrl="/images/poster-404.jpg" 
        />
      <h1 className="text-4xl text-cyan-500">404 - Page Not Found</h1>
      <p className="text-lg text-cyan-200">The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFoundPage;
