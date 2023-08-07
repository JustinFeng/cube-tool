'use client';

import { useEffect, useState } from 'react';

const LETTER_LIST = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
];

export default function Home() {
  const [letters, setLetters] = useState(['']);
  const [removed, setRemoved] = useState('');

  useEffect(randomPick, []);

  function randomPick() {
    const removedList = removed.toUpperCase().split('');
    const candidates = LETTER_LIST.filter((l) => !removedList.includes(l));
    const selectedLetters = [];
    for (let i = 0; i < 5; i++) {
      selectedLetters.push(
        candidates[Math.floor(Math.random() * candidates.length)]
      );
    }
    setLetters(selectedLetters);
  }

  function onChange(e: any) {
    setRemoved(e.target.value);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='w-64'>
        <label
          htmlFor='price'
          className='block text-md font-medium leading-6 text-white-400'
        >
          Remove
        </label>
        <div className='relative mt-2 rounded-md shadow-sm'>
          <input
            type='text'
            name='removed'
            id='removed'
            value={removed}
            onChange={onChange}
            className='block w-full rounded-md border-0 py-2 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
            placeholder='Letter to exclude...'
          />
        </div>
      </div>

      <div className='text-8xl text-orange-400'>{letters.join('')}</div>

      <div className='mb-8'>
        <button
          className='px-8 py-4 border-2 rounded-md border-solid border-white bg-gray-800'
          onClick={randomPick}
        >
          Generate
        </button>
      </div>
    </main>
  );
}
