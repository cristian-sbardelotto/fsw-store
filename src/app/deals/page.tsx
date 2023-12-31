import { ProductItem } from '@/components/ProductItem';
import { Badge } from '@/components/ui/Badge';
import { computeProductTotalPrice } from '@/helpers/product';
import { prismaClient } from '@/lib/prisma';

import { PercentIcon } from 'lucide-react';

export default async function DealsPage() {
  const deals = await prismaClient.product.findMany({
    where: {
      discountPercentage: {
        gt: 0,
      },
    },
    orderBy: {
      discountPercentage: 'desc',
    },
  });

  return (
    <div className='flex flex-col gap-8 p-5'>
      <Badge
        className='w-fit gap-1 text-base uppercase border-primary border-2 px-3 py-[0.375rem]'
        variant='outline'
      >
        <PercentIcon />
        Ofertas
      </Badge>

      <div className='grid grid-cols-2 gap-8 md:container md:grid-cols-3'>
        {deals.map(product => (
          <ProductItem
            product={computeProductTotalPrice(product)}
            key={product.id}
          />
        ))}
      </div>
    </div>
  );
}
