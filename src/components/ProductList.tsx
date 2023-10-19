import { Product } from '@prisma/client';
import { ProductItem } from './ProductItem';
import { computeProductTotalPrice } from '@/helpers/product';

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <div className='flex w-full gap-4 overflow-x-auto px-5 [&::-webkit-scrollbar]:hidden'>
      {products.map(product => (
        <div
          key={product.id}
          className='w-[170px] max-w-[170px]'
        >
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
}
