'use client';

import { useState } from 'react';

import { ProductWithTotalPriceProps } from '@/types/product';
import { Badge } from './ui/Badge';
import { ArrowDownIcon, MinusIcon, PlusIcon } from 'lucide-react';
import { Button } from './ui/Button';

type ProductInfoProps = {
  product: Pick<
    ProductWithTotalPriceProps,
    'basePrice' | 'totalPrice' | 'description' | 'discountPercentage' | 'name'
  >;
};

export function ProductInfo({ product }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className='flex-flex-col px-5'>
      <h2 className='text-lg'>{product.name}</h2>

      <div className='flex items-center gap-2'>
        <h3 className='text-xl font-bold '>
          R$ {product.totalPrice.toFixed(2)}
        </h3>
        {product.discountPercentage > 0 && (
          <Badge className='px-2 py-0.5'>
            <ArrowDownIcon size={14} /> {product.discountPercentage}%
          </Badge>
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

      <Button className='mt-8 uppercase font-bold'>
        Adicionar ao carrinho
      </Button>
    </div>
  );
}
