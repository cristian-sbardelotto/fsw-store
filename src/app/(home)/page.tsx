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

  const mouses = await prismaClient.product.findMany({
    where: {
      category: {
        slug: 'mouses',
      },
    },
  });

  return (
    <main className='space-y-8 overflow-hidden'>
      <ImageBanner
        src='/banner-home-01.png'
        alt='Até 55% de desconto esse mês!'
        className='md:p-0 md:rounded-none md:scale-[1.1]'
      />

      <div className='px-5'>
        <Categories />
      </div>

      <div>
        <p className='pl-5 mb-3 font-bold uppercase'>Ofertas</p>
        <ProductList products={deals} />
      </div>

      <ImageBanner
        src='/banner-home-02.png'
        alt='Até 55% de desconto em mouses!'
      />

      <div>
        <p className='pl-5 mb-3 font-bold uppercase'>Teclados</p>
        <ProductList products={keyboards} />
      </div>

      <ImageBanner
        src='/banner-home-03.png'
        alt='Até 20% de desconto em fones!'
      />

      <div>
        <p className='pl-5 mb-3 font-bold uppercase'>Mouses</p>
        <ProductList products={mouses} />
      </div>
    </main>
  );
}
