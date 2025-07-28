import React, { useState, useEffect, useCallback } from 'react';
import { GameState } from './types';
import { MAX_ATTEMPTS, LOCAL_STORAGE_KEY, BLUR_LEVELS, DAILY_CHALLENGES } from './constants';
import Header from './components/Header';
import ImageContainer from './components/ImageContainer';
import GuessInput from './components/GuessInput';
import GameResult from './components/GameResult';
import AttemptsTracker from './components/AttemptsTracker';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const initializeOrLoadGame = useCallback(() => {
    setIsLoading(true);
    setError(null);
    const today = new Date().toDateString();

    // Simulate a short delay to show the loading animation, since data loading is now instant.
    setTimeout(() => {
      try {
        const savedStateJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
        const savedState: GameState | null = savedStateJSON ? JSON.parse(savedStateJSON) : null;

        if (savedState && savedState.date === today && savedState.gameData?.imageUrl) {
          setGameState(savedState);
        } else {
          // Get the day of the year to pick a consistent daily challenge
          const now = new Date();
          const startOfYear = new Date(now.getFullYear(), 0, 0);
          const diff = (now.getTime() - startOfYear.getTime()) + ((startOfYear.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
          const oneDay = 1000 * 60 * 60 * 24;
          const dayOfYear = Math.floor(diff / oneDay);

          const gameData = DAILY_CHALLENGES[dayOfYear % DAILY_CHALLENGES.length];
          
          const newGameState: GameState = {
            gameData,
            guesses: [],
            remainingAttempts: MAX_ATTEMPTS,
            isGuessedCorrectly: false,
            isGameOver: false,
            date: today,
          };
          setGameState(newGameState);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newGameState));
        }
      } catch (err) {
        console.error("Error initializing game from static data:", err);
        setError("Could not load the daily challenge. Please try refreshing the page.");
      } finally {
        setIsLoading(false);
      }
    }, 500); // 500ms delay for UX
  }, []);

  useEffect(() => {
    initializeOrLoadGame();
  }, [initializeOrLoadGame]);

  const handleGuess = (guess: string) => {
    if (!gameState || gameState.isGameOver || !gameState.gameData) return;

    const cleanedGuess = guess.toLowerCase().trim();
    const isCorrect = cleanedGuess === gameState.gameData.answer.toLowerCase().trim() || 
                      cleanedGuess === gameState.gameData.answerPortuguese.toLowerCase().trim();

    const newGuesses = [...gameState.guesses, guess];
    const remainingAttempts = gameState.remainingAttempts - 1;
    const isGameOver = isCorrect || remainingAttempts === 0;

    const updatedState: GameState = {
      ...gameState,
      guesses: newGuesses,
      isGuessedCorrectly: isCorrect,
      remainingAttempts: remainingAttempts,
      isGameOver: isGameOver,
    };

    setGameState(updatedState);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedState));
  };
  
  const blurLevel = gameState ? BLUR_LEVELS[gameState.remainingAttempts] : 'blur-3xl';

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-4">
      <Header />
      <main className="w-full max-w-md mx-auto bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl shadow-purple-500/10 p-6 md:p-8 border border-slate-700">
        {isLoading ? (
          <LoadingSpinner />
        ) : error ? (
          <div className="text-center text-red-400 p-4 bg-red-500/10 rounded-lg">
            <h3 className="font-bold text-lg mb-2">Something went wrong!</h3>
            <p>{error}</p>
          </div>
        ) : gameState && gameState.gameData ? (
          <>
            <ImageContainer 
              imageUrl={gameState.gameData.imageUrl} 
              blurLevel={gameState.isGameOver ? 'blur-none' : blurLevel} 
            />
            <AttemptsTracker remainingAttempts={gameState.remainingAttempts} maxAttempts={MAX_ATTEMPTS} />
            
            {gameState.isGameOver ? (
              <GameResult 
                isWin={gameState.isGuessedCorrectly} 
                correctAnswer={gameState.gameData.answer}
                correctAnswerPortuguese={gameState.gameData.answerPortuguese}
              />
            ) : (
              <GuessInput onGuess={handleGuess} disabled={gameState.isGameOver} />
            )}
          </>
        ) : (
           <div className="text-center text-gray-400">Could not load game data.</div>
        )}
      </main>
      <footer className="text-center p-4 text-xs text-slate-500 mt-4">
          <p>A new magical puzzle appears every day!</p>
          <p>&copy; {new Date().getFullYear()} Disney Daily Guesser. All images are for illustrative purposes.</p>
      </footer>
    </div>
  );
};

export default App;
