import { Product } from '@prisma/client';

export function computeProductTotalPrice(product: Product) {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: product.basePrice,
    };
  }

  const totalPrice = +product.basePrice * (product.discountPercentage / 100);

  return {
    ...product,
    totalPrice,
  };
}
