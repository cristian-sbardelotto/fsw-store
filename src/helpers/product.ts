import { Product } from '@prisma/client';

import { ProductWithTotalPriceProps } from '@/types/product';

export function computeProductTotalPrice(
  product: Product
): ProductWithTotalPriceProps {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: +product.basePrice,
    };
  }

  const totalPrice = +product.basePrice * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice,
  };
}
