import { Button } from './ui/button';
import { Card } from './ui/card';

import { MenuIcon, ShoppingCartIcon } from 'lucide-react';

export function Header() {
  return (
    <header>
      <Card className='flex justify-between p-[1.875rem]'>
        <Button
          size='icon'
          variant='outline'
        >
          <MenuIcon />
        </Button>

        <h1 className='font-semibold text-lg'>
          <span className='text-primary'>FSW</span>Store
        </h1>

        <Button
          size='icon'
          variant='outline'
        >
          <ShoppingCartIcon />
        </Button>
      </Card>
    </header>
  );
}
