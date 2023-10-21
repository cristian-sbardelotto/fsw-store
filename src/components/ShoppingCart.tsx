import { useContext } from 'react';

import { CartContext } from '@/providers/cart';
import { Badge } from './ui/Badge';

import { ShoppingCartIcon } from 'lucide-react';

export function ShoppingCart() {
  const { products } = useContext(CartContext);

  return (
    <div>
      <Badge
        className='w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]'
        variant='outline'
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.map(product => (
        <h1 key={product.id}>{product.name}</h1>
      ))}
    </div>
  );
}
