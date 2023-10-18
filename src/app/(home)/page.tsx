import Image from 'next/image';

export default function Home() {
  return (
    <main className='p-5'>
      <Image
        src='/banner-home-01.png'
        alt='Até 55% de desconto esse mês!'
        className='h-auto w-full'
        sizes='100vw'
      />
    </main>
  );
}
