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
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/4k-lionking/full/4k-lionking-animationscreencaps.com-13028.jpg?ssl=1',
  },
  {
    answer: 'Frozen',
    answerPortuguese: 'Frozen: Uma Aventura Congelante',
    imageUrl: 'https://i0.wp.com/img.screencaps.us/201/4k-frozen/full/4k-frozen-animationscreencaps.com-14652.jpg?ssl=1',
  },
  {
    answer: 'Moana',
    answerPortuguese: 'Moana: Um Mar de Aventuras',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/201/4k-moana/full/4k-moana-animationscreencaps.com-15660.jpg?ssl=1',
  },
  {
    answer: 'Aladdin',
    answerPortuguese: 'Aladdin',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/4k-aladdin/full/4k-aladdin-animationscreencaps.com-15127.jpg?ssl=1',
  },
  {
    answer: 'Beauty and the Beast',
    answerPortuguese: 'A Bela e a Fera',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/4k-batb/full/4k-batb-animationscreencaps.com-9395.jpg?ssl=1',
  },
  {
    answer: 'Cinderella',
    answerPortuguese: 'Cinderela',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/195/4k-0-cinderella/full/4k-cinderella-animationscreencaps.com-5453.jpg?ssl=1',
  },
  {
    answer: 'The Little Mermaid',
    answerPortuguese: 'A Pequena Sereia',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/198/9-tlm/full/little-mermaid-1080p-disneyscreencaps.com-3121.jpg?ssl=1',
  },
  {
    answer: 'Hercules',
    answerPortuguese: 'Hércules',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/7-hercules-br/full/hercules-br-disneyscreencaps.com-1447.jpg?ssl=1',
  }
];
