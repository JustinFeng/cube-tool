'use client';

import { useState } from 'react';

const CHAR_LIST = [
  'A',
  'B',
  'C',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'R',
  'S',
  'T',
  'W',
  'X',
  'Y',
  'Z',
];

export default function Home() {
  const [chars, setChars] = useState(['']);

  function randomPick() {
    const selectedChars = [];
    for (let i = 0; i < 5; i++) {
      selectedChars.push(
        CHAR_LIST[Math.floor(Math.random() * CHAR_LIST.length)]
      );
    }
    setChars(selectedChars);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='text-8xl text-orange-400'>{chars.join('')}</div>

      <button
        className='px-8 py-4 border-2 rounded-md border-solid border-white'
        onClick={randomPick}
      >
        Generate
      </button>
    </main>
  );
}
