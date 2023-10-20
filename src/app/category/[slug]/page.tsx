import { ProductItem } from '@/components/ProductItem';
import { Badge } from '@/components/ui/Badge';
import { categoryIcons } from '@/data/categoryIcons';
import { computeProductTotalPrice } from '@/helpers/product';
import { prismaClient } from '@/lib/prisma';
import { SlugRouteParams } from '@/types/params';

export default async function CategoryProducts({ params }: SlugRouteParams) {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });

  return (
    <div className='flex flex-col gap-8 p-5'>
      <Badge
        className='w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]'
        variant='outline'
      >
        {categoryIcons[params.slug as keyof typeof categoryIcons]}
        {category?.name}
      </Badge>

      <div className='grid grid-cols-2 gap-8'>
        {category?.products.map(product => (
          <ProductItem
            product={computeProductTotalPrice(product)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
