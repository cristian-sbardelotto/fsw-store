import Image from 'next/image';

import { Categories } from '@/components/Categories';
import { ProductList } from '@/components/ProductList';
import { prismaClient } from '@/lib/prisma';

export default async function Home() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
  });

  return (
    <main className='p-5'>
      <Image
        src='/banner-home-01.png'
        alt='Até 55% de desconto esse mês!'
        className='h-auto w-full px-5'
        width={0}
        height={0}
        sizes='100vw'
      />

      <div className='mt-8 px-5'>
        <Categories />
      </div>

      <div className='mt-8'>
        <ProductList products={deals} />
      </div>
    </main>
  );
}
