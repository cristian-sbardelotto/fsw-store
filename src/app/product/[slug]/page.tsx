import { ProductImages } from '@/components/ProductImages';
import { prismaClient } from '@/lib/prisma';
import { SlugRouteParams } from '@/types/params';

export default async function ProductDetailsPage({ params }: SlugRouteParams) {
  const product = await prismaClient.product.findFirst({
    where: {
      slug: params.slug,
    },
  });

  if (!product) return null;

  return (
    <ProductImages
      name={product.name}
      imageUrls={product.imageUrls}
    />
  );
}
