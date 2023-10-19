import { Product } from '@prisma/client';

export type ProductWithTotalPriceProps = Product & {
  totalPrice: number;
};
