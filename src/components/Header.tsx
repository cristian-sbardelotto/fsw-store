'use client';

import Link from 'next/link';

import Button from '@/components/ui/button';
import { SheetMenu } from './SheetMenu';
import { ShoppingCart } from './ShoppingCart';
import { Card } from './ui/Card';
import { Sheet, SheetContent, SheetTrigger } from './ui/Sheet';

import { ShoppingCartIcon } from 'lucide-react';
import { Separator } from './ui/Separator';

export function Header() {
  return (
    <header>
      <Card className='flex justify-between items-center p-[1.875rem]'>
        <div className='md:hidden'>
          <SheetMenu />
        </div>

        <Link href='/'>
          <h1 className='font-semibold text-lg'>
            <span className='text-primary'>FSW</span> Store
          </h1>
        </Link>

        <nav className='hidden md:flex gap-7 items-center text-white font-bold'>
          <Link href='/catalog'>Catálogo</Link>

          <Separator
            orientation='vertical'
            className='h-6'
          />

          <Link href='/deals'>Ofertas</Link>
        </nav>

        <div className='flex gap-7'>
          <div className='hidden md:block'>
            <SheetMenu side='right' />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                size='icon'
                variant='outline'
              >
                <ShoppingCartIcon />
              </Button>
            </SheetTrigger>

            <SheetContent>
              <ShoppingCart />
            </SheetContent>
          </Sheet>
        </div>
      </Card>
    </header>
  );
}
