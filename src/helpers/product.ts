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

  const discountValue = +product.basePrice * (product.discountPercentage / 100);
  const totalPrice = +product.basePrice - discountValue;

  return {
    ...product,
    totalPrice,
  };
}
