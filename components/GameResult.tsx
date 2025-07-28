import React from 'react';

interface GameResultProps {
  isWin: boolean;
  correctAnswer: string;
  correctAnswerPortuguese: string;
}

const GameResult: React.FC<GameResultProps> = ({ isWin, correctAnswer, correctAnswerPortuguese }) => {
  return (
    <div className={`text-center p-6 rounded-lg ${isWin ? 'bg-green-500/20 border-green-500' : 'bg-red-500/20 border-red-500'} border animate-fade-in`}>
      {isWin ? (
        <h2 className="text-3xl font-bold font-cinzel text-green-300">You got it!</h2>
      ) : (
        <h2 className="text-3xl font-bold font-cinzel text-red-300">So Close!</h2>
      )}
      <p className="mt-2 text-slate-300">The correct answer was:</p>
      <p className="text-2xl font-semibold text-yellow-300 mt-1">{correctAnswer}</p>
      <p className="text-lg font-medium text-yellow-200">({correctAnswerPortuguese})</p>
       <p className="mt-4 text-sm text-slate-400">Come back tomorrow for a new challenge!</p>
    </div>
  );
};

export default GameResult;