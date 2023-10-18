import { prismaClient } from '@/lib/prisma';
import { CategoryItem } from './CategoryItem';

export async function Categories() {
  const categories = await prismaClient.category.findMany();

  return (
    <div className='grid grid-cols-2 gap-x-4 gap-y-2'>
      {categories &&
        categories.map(category => (
          <CategoryItem
            category={category}
            key={category.id}
          />
        ))}
    </div>
  );
}
