import Image from 'next/image';

import { Category } from '@prisma/client';

type CategoryCardProps = {
  category: Category;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className='flex flex-col rounded-lg overflow-hidden group'>
      <div className='w-full h-[150px] flex items-center justify-center bg-category-card-gradient'>
        <Image
          src={category.imageUrl}
          alt={category.slug}
          width={0}
          height={0}
          sizes='100vw'
          className='h-auto max-h-[70%] w-auto max-w-[80%] object-contain group-hover:scale-125 transition-all duration-300'
        />
      </div>

      <div className='bg-accent py-3 text-center group-hover:bg-zinc-800 transition-colors'>
        <p className='text-sm font-semibold'>{category.name}</p>
      </div>
    </div>
  );
}
