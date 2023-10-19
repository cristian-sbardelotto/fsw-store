import { Category } from '@prisma/client';
import { Badge } from './ui/Badge';
import { categoryIcons } from '@/data/categoryIcons';

type CategoryItemProps = {
  category: Category;
};

export function CategoryItem({ category }: CategoryItemProps) {
  return (
    <Badge
      variant='outline'
      className='py-3 flex justify-center items-center gap-2 rounded-lg'
    >
      {categoryIcons[category.slug as keyof typeof categoryIcons]}
      <span className='font-bold text-xs'>{category.name}</span>
    </Badge>
  );
}
