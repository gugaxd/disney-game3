export interface GameData {
  answer: string;
  answerPortuguese: string;
  imageUrl: string;
}

export interface GameState {
  gameData: GameData | null;
  guesses: string[];
  remainingAttempts: number;
  isGuessedCorrectly: boolean;
  isGameOver: boolean;
  date: string;
}
