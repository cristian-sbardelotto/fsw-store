'use client';

import { createContext, useContext, useMemo, useState } from 'react';

import { ProductWithTotalPriceProps } from '@/types/product';

export type CartProduct = ProductWithTotalPriceProps & {
  quantity: number;
};

type CartContextProps = {
  products: CartProduct[];
  cartBasePrice: number;
  cartTotalPrice: number;
  cartTotalDiscount: number;
  total: number;
  subTotal: number;
  totalDiscount: number;
  addProduct(product: CartProduct): void;
  increaseProductQuantity(productId: string): void;
  decreaseProductQuantity(productId: string): void;
  removeProduct(productId: string): void;
};

export const CartContext = createContext<CartContextProps>({
  products: [],
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  cartTotalPrice: 0,
  total: 0,
  subTotal: 0,
  totalDiscount: 0,
  addProduct: () => {},
  increaseProductQuantity: () => {},
  decreaseProductQuantity: () => {},
  removeProduct: () => {},
});

type CartContextProviderProps = {
  children: React.ReactNode;
};

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const subTotal = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.basePrice) * product.quantity;
    }, 0);
  }, [products]);

  const total = useMemo(() => {
    return products.reduce((acc, product) => {
      return acc + Number(product.totalPrice) * product.quantity;
    }, 0);
  }, [products]);

  const totalDiscount = subTotal - total;

  function addProduct(product: CartProduct) {
    const productIsAlreadyOnCart = products.some(
      cartProduct => cartProduct.id === product.id
    );

    if (productIsAlreadyOnCart) {
      setProducts(previous =>
        previous.map(cartProduct => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }

          return cartProduct;
        })
      );

      return;
    }

    setProducts(previous => [...previous, product]);
  }

  function decreaseProductQuantity(productId: string) {
    setProducts(previous =>
      previous
        .map(cartProduct => {
          if (cartProduct.id === productId) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity - 1,
            };
          }

          return cartProduct;
        })
        .filter(cartProduct => cartProduct.quantity > 0)
    );
  }

  function increaseProductQuantity(productId: string) {
    setProducts(previous =>
      previous.map(cartProduct => {
        if (cartProduct.id === productId) {
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + 1,
          };
        }

        return cartProduct;
      })
    );
  }

  function removeProduct(productId: string) {
    setProducts(prev =>
      prev.filter(cartProduct => cartProduct.id !== productId)
    );
  }

  return (
    <CartContext.Provider
      value={{
        products,
        total,
        subTotal,
        totalDiscount,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
        cartTotalPrice: 0,
        addProduct,
        decreaseProductQuantity,
        increaseProductQuantity,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
