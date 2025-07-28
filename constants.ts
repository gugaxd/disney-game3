import { GameData } from './types';

export const MAX_ATTEMPTS = 5;
export const LOCAL_STORAGE_KEY = 'disney-daily-guesser-state';

// Maps remaining attempts to Tailwind CSS blur classes
export const BLUR_LEVELS = [
  'blur-none',   // 0 attempts left (game over)
  'blur-sm',     // 1
  'blur-md',     // 2
  'blur-lg',     // 3
  'blur-xl',     // 4
  'blur-2xl'     // 5 (start)
];

export const DAILY_CHALLENGES: GameData[] = [
  {
    answer: 'The Lion King',
    answerPortuguese: 'O Rei Leão',
    imageUrl: 'https://images.pexels.com/photos/162140/lion-roxo-lioness-lion-cub-162140.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    answer: 'Frozen',
    answerPortuguese: 'Frozen: Uma Aventura Congelante',
    imageUrl: 'https://images.pexels.com/photos/899659/pexels-photo-899659.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    answer: 'Moana',
    answerPortuguese: 'Moana: Um Mar de Aventuras',
    imageUrl: 'https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    answer: 'Aladdin',
    answerPortuguese: 'Aladdin',
    imageUrl: 'https://images.pexels.com/photos/1577735/pexels-photo-1577735.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    answer: 'Beauty and the Beast',
    answerPortuguese: 'A Bela e a Fera',
    imageUrl: 'https://images.pexels.com/photos/133472/rose-rose-blossom-bloom-133472.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    answer: 'Cinderella',
    answerPortuguese: 'Cinderela',
    imageUrl: 'https://images.pexels.com/photos/277406/pexels-photo-277406.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    answer: 'The Little Mermaid',
    answerPortuguese: 'A Pequena Sereia',
    imageUrl: 'https://images.pexels.com/photos/3214798/pexels-photo-3214798.jpeg?auto=compress&cs=tinysrgb&w=800',
  }
];
