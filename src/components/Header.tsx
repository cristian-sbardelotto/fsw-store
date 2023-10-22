'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/Button';
import { Card } from './ui/Card';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from './ui/Sheet';
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar';
import { Separator } from './ui/Separator';
import { ShoppingCart } from './ShoppingCart';

import { signIn, signOut, useSession } from 'next-auth/react';

import {
  MenuIcon,
  ShoppingCartIcon,
  LogInIcon,
  PercentIcon,
  ListOrderedIcon,
  HomeIcon,
  LogOut,
} from 'lucide-react';

export function Header() {
  const { data, status } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <header>
      <Card className='flex justify-between p-[1.875rem]'>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              size='icon'
              variant='outline'
            >
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side='left'>
            <SheetHeader className='text-left text-lg font-semibold'>
              Menu
            </SheetHeader>

            <div className='flex flex-col gap-2 mt-2'>
              {status === 'authenticated' ? (
                <div className='flex flex-col gap-2 w-full'>
                  <div className='flex gap-2 items-center mb-2'>
                    <Avatar>
                      <AvatarFallback>
                        {data?.user?.name && data.user.name[0].toUpperCase()}
                      </AvatarFallback>

                      <AvatarImage src={data.user?.image!} />
                    </Avatar>

                    <div className='flex flex-col justify-between'>
                      <p className='font-medium text-lg break-all'>
                        {data.user?.name}
                      </p>
                      <span className='text-zinc-500 break-all'>
                        {data.user?.email}
                      </span>
                    </div>
                  </div>

                  <Separator className='mb-2' />

                  <Button
                    variant='destructive'
                    className='w-full gap-2'
                    onClick={handleLogout}
                  >
                    <LogOut size={16} />
                    Sair
                  </Button>
                </div>
              ) : (
                <Button
                  variant='outline'
                  className='w-full gap-2'
                  onClick={handleLogin}
                >
                  <LogInIcon size={16} />
                  Fazer login
                </Button>
              )}
              <SheetClose asChild>
                <Link href='/catalog'>
                  <Button
                    variant='outline'
                    className='w-full gap-2'
                  >
                    <HomeIcon size={16} />
                    Início
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Button
                  variant='outline'
                  className='w-full gap-2'
                >
                  <PercentIcon size={16} />
                  Ofertas
                </Button>
              </SheetClose>

              <SheetClose asChild>
                <Link href='/catalog'>
                  <Button
                    variant='outline'
                    className='w-full gap-2'
                  >
                    <ListOrderedIcon size={16} />
                    Catálogo
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href='/'>
          <h1 className='font-semibold text-lg'>
            <span className='text-primary'>FSW</span> Store
          </h1>
        </Link>

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
      </Card>
    </header>
  );
}
