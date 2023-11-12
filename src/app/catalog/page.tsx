import Link from 'next/link';

import { CategoryCard } from '@/components/CategoryCard';
import { Badge } from '@/components/ui/Badge';
import { prismaClient } from '@/lib/prisma';

import { ShapesIcon } from 'lucide-react';

export default async function CatalogPage() {
  const categories = await prismaClient.category.findMany();

  return (
    <div className='space-y-8 p-5'>
      <Badge
        className='w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]'
        variant='outline'
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className='grid grid-cols-2 gap-8 md:container md:mx-auto'>
        {categories.map(category => (
          <Link
            href={`/category/${category.slug}`}
            key={category.id}
          >
            <CategoryCard category={category} />
          </Link>
        ))}
      </div>
    </div>
  );
}
