import { ProductImages } from '@/components/ProductImages';
import { ProductInfo } from '@/components/ProductInfo';
import { ProductList } from '@/components/ProductList';
import { computeProductTotalPrice } from '@/helpers/product';
import { prismaClient } from '@/lib/prisma';
import { SlugRouteParams } from '@/types/params';

export default async function ProductDetailsPage({ params }: SlugRouteParams) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      category: {
        include: {
          products: {
            where: {
              slug: {
                not: params.slug,
              },
            },
          },
        },
      },
    },
  });

  if (!product) return null;

  return (
    <div className='space-y-8 pb-8'>
      <ProductImages
        name={product.name}
        imageUrls={product.imageUrls}
      />

      <ProductInfo product={computeProductTotalPrice(product)} />

      <ProductList products={product.category.products} />
    </div>
  );
}
