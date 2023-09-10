import Image from 'next/image';
import Hero from '../public/images/hero.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center p-24 justify-between">
      <Image
        src={Hero}
        className=''
        width={500}
        height={500}
        alt='Cube'
      />
      <div className='text-4xl text-center'>
        Welcome to Haoting&apos;s Cube World!
      </div>
    </div>
  );
}
