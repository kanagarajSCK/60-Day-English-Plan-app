import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-4 py-6 text-center">
        <h1 className="animated-gradient text-4xl md:text-5xl font-bold tracking-tight mb-1.5">
          Kanagaraj's 60-Day English Plan
        </h1>
        <p className="mt-2 text-lg text-gray-300">
          Guided by Sabi my love ❤️
        </p>
      </div>
    </header>
  );
};

export default Header;
