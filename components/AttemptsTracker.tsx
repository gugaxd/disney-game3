
import React from 'react';

interface AttemptsTrackerProps {
  remainingAttempts: number;
  maxAttempts: number;
}

const MagicOrb: React.FC<{ filled: boolean }> = ({ filled }) => (
    <div className={`w-8 h-8 rounded-full transition-all duration-300 ${filled ? 'bg-purple-500 shadow-lg shadow-purple-500/50' : 'bg-slate-700'}`}></div>
);


const AttemptsTracker: React.FC<AttemptsTrackerProps> = ({ remainingAttempts, maxAttempts }) => {
  return (
    <div className="mb-6 flex flex-col items-center">
        <p className="text-sm text-slate-400 mb-2">Attempts Remaining</p>
        <div className="flex justify-center items-center gap-3">
            {Array.from({ length: maxAttempts }).map((_, index) => (
                <MagicOrb key={index} filled={index < remainingAttempts} />
            ))}
        </div>
    </div>
  );
};

export default AttemptsTracker;
