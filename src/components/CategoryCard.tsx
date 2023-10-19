import Image from 'next/image';

import { Category } from '@prisma/client';

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className='flex flex-col rounded-lg overflow-hidden'>
      <div className='w-full h-[150px] flex items-center justify-center bg-category-card-gradient'>
        <Image
          src={category.imageUrl}
          alt={category.slug}
          width={0}
          height={0}
          sizes='100vw'
          className='h-auto max-h-[70%] w-auto max-w-[80%] object-contain'
        />
      </div>

      <div className='bg-accent py-3 text-center'>
        <p className='text-sm font-semibold'>{category.name}</p>
      </div>
    </div>
  );
}
