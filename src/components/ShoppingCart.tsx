import { useContext } from 'react';

import { CartContext } from '@/providers/cart';
import { Badge } from './ui/Badge';

import { ShoppingCartIcon } from 'lucide-react';
import { CartItem } from './CartItem';
import { computeProductTotalPrice } from '@/helpers/product';
import { Separator } from './ui/Separator';

export function ShoppingCart() {
  const { products, total, subTotal, totalDiscount } = useContext(CartContext);

  return (
    <div className='flex flex-col gap-8'>
      <Badge
        className='w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]'
        variant='outline'
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      {products.length > 0 ? (
        products.map(product => (
          <div
            key={product.id}
            className='flex flex-col gap-5'
          >
            <CartItem product={computeProductTotalPrice(product) as any} />
          </div>
        ))
      ) : (
        <div className='text-center'>
          <p className='text-lg'>Carrinho vazio</p>
          <p className='text-xl'>Vamos fazer compras?</p>
        </div>
      )}

      {products.length > 0 && (
        <div className='flex flex-col gap-3'>
          <Separator />

          <div className='flex items-center justify-between text-xs'>
            <p>Subtotal</p>
            <p>R$ {subTotal.toFixed(2)}</p>
          </div>

          <Separator />

          <div className='flex items-center justify-between text-xs'>
            <p>Entrega</p>
            <p className='uppercase'>Grátis</p>
          </div>

          <Separator />

          <div className='flex items-center justify-between text-xs'>
            <p>Descontos</p>
            <p>- R$ {totalDiscount.toFixed(2)}</p>
          </div>

          <Separator />

          <div className='flex items-center justify-between text-sm font-bold'>
            <p>Total</p>
            <p>R$ {total.toFixed(2)}</p>
          </div>
        </div>
      )}
    </div>
  );
}
