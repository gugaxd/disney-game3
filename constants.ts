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
    answerPortuguese: 'O Rei Leão', 'rei leao',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/4k-lionking/full/4k-lionking-animationscreencaps.com-13028.jpg?ssl=1',
  },
  {
    answer: 'Frozen',
    answerPortuguese: 'Frozen: Uma Aventura Congelante', 'frozen',
    imageUrl: 'https://i0.wp.com/img.screencaps.us/201/4k-frozen/full/4k-frozen-animationscreencaps.com-14652.jpg?ssl=1',
  },
  {
    answer: 'Moana',
    answerPortuguese: 'Moana: Um Mar de Aventuras', 'moana',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/201/4k-moana/full/4k-moana-animationscreencaps.com-15660.jpg?ssl=1',
  },
  {
    answer: 'Aladdin',
    answerPortuguese: 'Aladdin', 'aladin',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/4k-aladdin/full/4k-aladdin-animationscreencaps.com-15127.jpg?ssl=1',
  },
  {
    answer: 'Beauty and the Beast',
    answerPortuguese: 'A Bela e a Fera', 'a bela e a fera',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/4k-batb/full/4k-batb-animationscreencaps.com-9395.jpg?ssl=1',
  },
  {
    answer: 'Cinderella',
    answerPortuguese: 'Cinderela', 'cinderela',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/195/4k-0-cinderella/full/4k-cinderella-animationscreencaps.com-5453.jpg?ssl=1',
  },
  {
    answer: 'The Little Mermaid',
    answerPortuguese: 'A Pequena Sereia', 'a pequena sereia',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/198/9-tlm/full/little-mermaid-1080p-disneyscreencaps.com-3121.jpg?ssl=1',
  },
  {
    answer: 'Hercules',
    answerPortuguese: 'Hércules', 'hercules',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/7-hercules-br/full/hercules-br-disneyscreencaps.com-1447.jpg?ssl=1',
  },
  {
    answer: 'Encanto',
    answerPortuguese: 'Encanto', 'encanto',
    imageUrl: 'https://i0.wp.com/img.screencaps.us/202/1-encanto/full/encanto-animationscreencaps.com-1084.jpg?ssl=1',
  },
  {
    answer: 'Zootopia',
    answerPortuguese: 'Zootopia', 'zootopia',
    imageUrl: 'https://i0.wp.com/img.screencaps.us/201/4k-zootopia/full/4k-zootopia-animationscreencaps.com-998.jpg?ssl=1',
  },
  {
    answer: 'The Princess and the Frog',
    answerPortuguese: 'A Princesa e o Sapo', 'a princesa e o sapo',
    imageUrl: 'https://i0.wp.com/img.screencaps.us/200/4k-princessfrog/full/4k-princessfrog-animationscreencaps.com-908.jpg?ssl=1',
  },
  {
    answer: 'Mulan',
    answerPortuguese: 'Mulan', 'mulan',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/199/4k-mulan/full/4kmulan-animationscreencaps.com-1342.jpg?ssl=1',
  },
  {
    answer: 'Lilo & Stitch',
    answerPortuguese: 'Lilo e Stitch', 'lilo e stitch', 'lilo stitch',
    imageUrl: 'https://i0.wp.com/imgs.screencaps.us/200/2-lilo-stitch/full/lilo-stitch-disneyscreencaps.com-1828.jpg?ssl=1',
  }
];
