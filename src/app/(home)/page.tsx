import Image from 'next/image';

import { Categories } from '@/components/Categories';
import { ProductList } from '@/components/ProductList';
import { prismaClient } from '@/lib/prisma';
import { ImageBanner } from '@/components/ImageBanner';

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  const keyboards = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'keyboards',
      },
    },
  });

  return (
    <main>
      <ImageBanner
        src='/banner-home-01.png'
        alt='Até 55% de desconto esse mês!'
      />

      <div className='mt-8 px-5'>
        <Categories />
      </div>

      <div className='mt-8'>
        <p className='pl-5 mb-3 font-bold uppercase'>Ofertas</p>
        <ProductList products={deals} />
      </div>

      <div className='mt-8'>
        <ImageBanner
          src='/banner-home-02.png'
          alt='Até 55% de desconto em mouses!'
        />
      </div>

      <div className='mt-8'>
        <p className='pl-5 mb-3 font-bold uppercase'>Teclados</p>
        <ProductList products={keyboards} />
      </div>
    </main>
  );
}
