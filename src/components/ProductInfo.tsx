'use client';

import { useState, useContext } from 'react';

import { ProductWithTotalPriceProps } from '@/types/product';
import { Button } from '@/components/ui/Button';
import { DiscountBadge } from './DiscountBadge';
import { CartContext } from '@/providers/cart';

import { MinusIcon, PlusIcon } from 'lucide-react';

type ProductInfoProps = {
  product: ProductWithTotalPriceProps;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const { addProduct } = useContext(CartContext);

  function handleAddProduct() {
    addProduct({ ...product, quantity });
  }

  return (
    <div className='flex-flex-col px-5'>
      <h2 className='text-lg'>{product.name}</h2>

      <div className='flex items-center gap-2'>
        <h3 className='text-xl font-bold '>
          R$ {product.totalPrice.toFixed(2)}
        </h3>
        {product.discountPercentage > 0 && (
          <DiscountBadge>{product.discountPercentage}</DiscountBadge>
        )}
      </div>

      {product.discountPercentage > 0 && (
        <p className='text-sm opacity-75 line-through font-light'>
          De R${Number(product.basePrice).toFixed(2)}
        </p>
      )}

      <div className='flex items-center gap-3 mt-4'>
        <Button
          size='icon'
          variant='outline'
          onClick={() => setQuantity(previous => previous - 1)}
          disabled={quantity <= 1}
        >
          <MinusIcon size={16} />
        </Button>

        <span>{quantity}</span>

        <Button
          size='icon'
          variant='outline'
          onClick={() => setQuantity(previous => previous + 1)}
        >
          <PlusIcon size={16} />
        </Button>
      </div>

      <div className='flex flex-col gap-3 mt-8'>
        <h3 className='font-bold'>Descrição</h3>

        <p className='opacity-60 text-justify text-sm'>{product.description}</p>
      </div>

      <Button
        className='mt-8 uppercase font-bold'
        onClick={handleAddProduct}
      >
        Adicionar ao carrinho
      </Button>
    </div>
  );
}
