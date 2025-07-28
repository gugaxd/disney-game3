
import React, { useState } from 'react';

interface GuessInputProps {
  onGuess: (guess: string) => void;
  disabled: boolean;
}

const GuessInput: React.FC<GuessInputProps> = ({ onGuess, disabled }) => {
  const [currentGuess, setCurrentGuess] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentGuess.trim() && !disabled) {
      onGuess(currentGuess);
      setCurrentGuess('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        value={currentGuess}
        onChange={(e) => setCurrentGuess(e.target.value)}
        placeholder="Enter your guess..."
        disabled={disabled}
        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300"
        aria-label="Guess input"
      />
      <button
        type="submit"
        disabled={disabled || !currentGuess.trim()}
        className="w-full px-4 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-slate-800 transition-all duration-300 disabled:bg-slate-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Guess
      </button>
    </form>
  );
};

export default GuessInput;
