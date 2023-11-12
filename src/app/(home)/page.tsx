import { Categories } from '@/components/Categories';
import { ImageBanner } from '@/components/ImageBanner';
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
        className='md:hidden'
      />

      <ImageBanner
        src='/deals-banner.png'
        alt='Até 55% de desconto esse mês!'
        className='hidden md:block md:p-0'
      />

      <div className='mx-auto flex flex-col gap-8 lg:container lg:gap-10'>
        <div className='px-5'>
          <Categories />
        </div>

        <div>
          <p className='pl-5 mb-3 font-bold uppercase'>Ofertas</p>
          <ProductList products={deals} />
        </div>

        <div className='hidden md:flex items-center justify-between px-5'>
          <ImageBanner
            src='/banner-home-02.png'
            alt='Até 55% de desconto em mouses!'
            className='w-[49%] p-0'
          />

          <ImageBanner
            src='/banner-home-03.png'
            alt='Até 20% de desconto em fones!'
            className='w-[49%] p-0'
          />
        </div>

        <ImageBanner
          src='/banner-home-02.png'
          alt='Até 55% de desconto em mouses!'
          className='md:hidden'
        />

        <div>
          <p className='pl-5 mb-3 font-bold uppercase'>Teclados</p>
          <ProductList products={keyboards} />
        </div>

        <ImageBanner
          src='/banner-home-03.png'
          alt='Até 20% de desconto em fones!'
          className='md:hidden'
        />

        <div>
          <p className='pl-5 mb-3 font-bold uppercase'>Mouses</p>
          <ProductList products={mouses} />
        </div>
      </div>
    </main>
  );
}
