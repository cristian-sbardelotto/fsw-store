'use client';

import Image from 'next/image';
import { useContext } from 'react';

import Button from '@/components/ui/button';
import { formatPrice } from '@/helpers/product';
import { CartContext, CartProduct } from '@/providers/cart';
import { toast } from 'react-toastify';

import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react';

type CartItemProps = {
  product: CartProduct;
};

export function CartItem({ product }: CartItemProps) {
  const { increaseProductQuantity, decreaseProductQuantity, removeProduct } =
    useContext(CartContext);

  function handleRemoveProduct(productId: string) {
    removeProduct(productId);

    toast('Produto removido do carrinho!', {
      position: 'bottom-center',
      type: 'success',
    });
  }

  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='flex items-center justify-center w-[77px] h-[77px] rounded-lg bg-accent'>
          <Image
            src={product.imageUrls[0]}
            alt={product.name}
            height={0}
            width={0}
            sizes='100vw'
            className='w-auto h-auto max-w-[80%] max-h-[80%] object-contain'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <p className='text-lg'> {product.name}</p>

          <div className='flex items-center gap-2'>
            <p className='font-bold text-sm'>
              {formatPrice(product.totalPrice)}
            </p>

            {product.discountPercentage > 0 && (
              <p className='opacity-75 line-through text-xs'>
                {formatPrice(+product.basePrice)}
              </p>
            )}
          </div>
          <div className='flex items-center gap-2'>
            <Button
              size='iconXs'
              variant='outline'
              disabled={product.quantity <= 1}
              onClick={() => decreaseProductQuantity(product.id)}
            >
              <MinusIcon size={11} />
            </Button>

            <span className='text-sm'>{product.quantity}</span>

            <Button
              size='iconXs'
              variant='outline'
              onClick={() => increaseProductQuantity(product.id)}
            >
              <PlusIcon size={11} />
            </Button>
          </div>
        </div>
      </div>

      <Button
        size='icon'
        variant='destructiveOutline'
        onClick={() => handleRemoveProduct(product.id)}
        className='px-3'
      >
        <TrashIcon size={16} />
      </Button>
    </div>
  );
}
