import { Product } from '@prisma/client';
import Image from 'next/image';

type ProductItemProps = {
  product: Product;
};

export function ProductItem({ product }: ProductItemProps) {
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex items-center justify-center bg-accent rounded-lg h-[170px] w-[156px]'>
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes='100vw'
          className='h-[90px] w-auto object-contain'
          alt='Imagem do produto'
        />
      </div>
      <div></div>
    </div>
  );
}
