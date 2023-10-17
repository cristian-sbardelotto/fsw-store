import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Header } from '@/components/Header';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'FSW Store',
  description: 'Website de E-Commerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='pt-br'>
      <body className={poppins.className}>
        <Header />

        {children}
      </body>
    </html>
  );
}
