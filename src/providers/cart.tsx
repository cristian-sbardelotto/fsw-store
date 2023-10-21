'use client';

import { createContext } from 'react';

import { Product } from '@prisma/client';

type CartProduct = Product & {
  quantity: number;
};

type CartContextProps = {
  products: CartProduct[];
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscount: number;
};

const CartContext = createContext<CartContextProps>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
});

type CartContextProviderProps = {
  children: React.ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartContext.Provider
      value={{
        products: [],
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
