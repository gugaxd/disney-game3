
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.007z" clipRule="evenodd" />
  </svg>
);


const Header: React.FC = () => {
  return (
    <header className="text-center mb-6 relative">
       <StarIcon className="absolute -top-2 -left-10 h-6 w-6 text-yellow-300 opacity-80 animate-pulse" />
       <StarIcon className="absolute -top-4 left-2 h-4 w-4 text-yellow-200 opacity-70 animate-pulse delay-300" />
       <StarIcon className="absolute top-8 -left-6 h-5 w-5 text-yellow-300 opacity-90 animate-pulse delay-500" />
       <StarIcon className="absolute -top-2 -right-10 h-6 w-6 text-yellow-300 opacity-80 animate-pulse" />
       <StarIcon className="absolute -top-4 right-2 h-4 w-4 text-yellow-200 opacity-70 animate-pulse delay-300" />
       <StarIcon className="absolute top-8 -right-6 h-5 w-5 text-yellow-300 opacity-90 animate-pulse delay-500" />
      <h1 className="font-cinzel text-4xl md:text-5xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-500">
        Disney Daily Guesser
      </h1>
      <p className="text-slate-400 mt-2 text-sm">Can you guess today's magic word?</p>
    </header>
  );
};

export default Header;
