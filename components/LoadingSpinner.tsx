
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-64 text-center">
        <div className="w-16 h-16 border-4 border-t-4 border-slate-600 border-t-purple-500 rounded-full animate-spin"></div>
        <p className="mt-4 text-slate-300 font-cinzel tracking-wider">Summoning a new challenge...</p>
    </div>
  );
};

export default LoadingSpinner;
