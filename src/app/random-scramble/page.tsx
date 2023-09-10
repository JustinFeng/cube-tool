'use client';

import { useEffect, useState } from 'react';

const MOVE_LIST = [
  "R",
  "L",
  "F",
  "B",
  "U",
  "D",
  "R2",
  "L2",
  "F2",
  "B2",
  "U2",
  "D2",
  "R'",
  "L'",
  "F'",
  "B'",
  "U'",
  "D'",
];

export default function Index() {
  const [moves, setMoves] = useState(['']);

  useEffect(randomPick, []);

  function randomPick() {
    const moves = []
    for (let i = 0; i < 100; i++) {
      moves.push(
        MOVE_LIST[Math.floor(Math.random() * MOVE_LIST.length)]
      );
    }
    setMoves(moves);
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-16'>
      <div className='w-full break-normal text-5xl text-orange-400'>{moves.join(' ')}</div>

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
