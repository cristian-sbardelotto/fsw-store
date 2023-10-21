'use client';

import { createContext, useContext, useState } from 'react';

import { Product } from '@prisma/client';

type CartProduct = Product & {
  quantity: number;
};

type CartContextProps = {
  products: CartProduct[];
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscount: number;
  addProduct(product: CartProduct): void;
};

export const CartContext = createContext<CartContextProps>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  addProduct: () => {},
});

type CartContextProviderProps = {
  children: React.ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  function addProduct(product: CartProduct) {
    setProducts(previous => [...previous, product]);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        addProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
