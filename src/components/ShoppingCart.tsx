import { useContext } from 'react';

import { CartContext } from '@/providers/cart';
import { Badge } from './ui/Badge';

import { ShoppingCartIcon } from 'lucide-react';
import { CartItem } from './CartItem';
import { computeProductTotalPrice } from '@/helpers/product';
import { Separator } from './ui/Separator';
import { ScrollArea } from './ui/ScrollArea';
import Button from '@/components/ui/button';

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

          <Button className='uppercase font-bold rounded-xl mt-7'>
            Finalizar Compra
          </Button>
        </>
      )}
    </div>
  );
}
