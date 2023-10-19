import Link from 'next/link';

export function Footer() {
  return (
    <footer className='bg-accent px-8 py-4 text-sm mt-6'>
      Desenvolvido com 🧡 por{' '}
      <Link
        href='https://linkedin.com/in/cristian-k-sbardelotto'
        target='_blank'
        className='underline hover:text-gray-400 transition-colors'
      >
        Cristian Sbardelotto
      </Link>
    </footer>
  );
}
