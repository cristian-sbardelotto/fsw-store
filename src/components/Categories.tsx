import { prismaClient } from '@/lib/prisma';
import { CategoryItem } from './CategoryItem';

export async function Categories() {
  const categories = await prismaClient.category.findMany();

  return (
    <button className='w-full grid grid-cols-2 gap-x-4 gap-y-2 md:flex md:justify-center md:flex-wrap md:items-center'>
      {categories &&
        categories.map(category => (
          <CategoryItem
            category={category}
            key={category.id}
          />
        ))}
    </button>
  );
}
