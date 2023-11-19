import Image from 'next/image';
import Link from 'next/link';

import { ProductWithTotalPriceProps } from '@/types/product';

import { formatPrice } from '@/helpers/product';
import { DiscountBadge } from './DiscountBadge';

type ProductItemProps = {
  product: ProductWithTotalPriceProps;
};

export function ProductItem({ product }: ProductItemProps) {
  return (
    <Link href={`/product/${product.slug}`}>
      <div className='flex flex-col gap-4 group'>
        <div className='relative flex items-center justify-center bg-accent rounded-lg h-[170px] w-full aspect-square group-hover:brightness-125 transition-all'>
          <Image
            src={product.imageUrls[0]}
            height={0}
            width={0}
            sizes='100vw'
            className='h-auto w-auto object-contain max-w-[80%] max-h-[70%]'
            alt='Imagem do produto'
          />

          {product.discountPercentage > 0 && (
            <DiscountBadge className='absolute left-3 top-3'>
              {product.discountPercentage}
            </DiscountBadge>
          )}
        </div>

        <div className='flex flex-col gap-1'>
          <p className='text-sm overflow-hidden text-ellipsis whitespace-nowrap'>
            {product.name}
          </p>

          <div className='flex items-center gap-2'>
            {product.discountPercentage > 0 ? (
              <>
                <p className='font-semibold'>
                  {formatPrice(product.totalPrice)}
                </p>

                <p className='opacity-75 line-through text-xs'>
                  {formatPrice(+product.basePrice)}
                </p>
              </>
            ) : (
              <p className='font-semibold'>{formatPrice(+product.basePrice)}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
