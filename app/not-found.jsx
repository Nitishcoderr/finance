import React from 'react';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <h2 className="text-2xl text-gray-600 mb-8">Page Not Found</h2>
      <p className="text-gray-500 mb-4">
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-black text-white rounded-lg hover:bg-black/80 transition-colors">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
