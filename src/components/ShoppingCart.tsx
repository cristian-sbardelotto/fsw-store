import { useContext } from 'react';

import { computeProductTotalPrice, formatPrice } from '@/helpers/product';
import { CartContext } from '@/providers/cart';
import { CartButton } from './CartButton';
import { CartItem } from './CartItem';
import { Badge } from './ui/Badge';
import { ScrollArea } from './ui/ScrollArea';
import { Separator } from './ui/Separator';

import { ShoppingCartIcon } from 'lucide-react';

export function ShoppingCart() {
  const { products, total, subTotal, totalDiscount } = useContext(CartContext);

  return (
    <div className='flex flex-col gap-8 h-full  '>
      <Badge
        className='w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]'
        variant='outline'
      >
        <ShoppingCartIcon size={16} />
        Carrinho
      </Badge>

      <div className='flex h-full ma  x-h-full flex-col gap-5 overflow-hidden'>
        <ScrollArea className='h-full'>
          <div className='flex h-full flex-col gap-8 pr-3'>
            {products.length > 0 ? (
              products.map(product => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product) as any}
                />
              ))
            ) : (
              <div className='text-center'>
                <p className='text-lg'>Carrinho vazio</p>
                <p className='text-xl'>Vamos fazer compras?</p>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <>
          <div className='flex flex-col gap-3'>
            <Separator />

            <div className='flex items-center justify-between text-xs'>
              <p>Subtotal</p>
              <p>{formatPrice(subTotal)}</p>
            </div>

            <Separator />

            <div className='flex items-center justify-between text-xs'>
              <p>Entrega</p>
              <p className='uppercase'>Grátis</p>
            </div>

            <Separator />

            <div className='flex items-center justify-between text-xs'>
              <p>Descontos</p>
              <p>- {formatPrice(totalDiscount)}</p>
            </div>

            <Separator />

            <div className='flex items-center justify-between text-sm font-bold'>
              <p>Total</p>
              <p>{formatPrice(total)}</p>
            </div>
          </div>

          <CartButton />
        </>
      )}
    </div>
  );
}
