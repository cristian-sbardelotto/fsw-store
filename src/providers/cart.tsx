'use client';

import { createContext, useEffect, useMemo, useState } from 'react';

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
  resetProducts(): void;
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
  resetProducts: () => {},
});

type CartContextProviderProps = {
  children: React.ReactNode;
};

const PRODUCTS_STORAGE_KEY = '@fsw-store/products';

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [products, setProducts] = useState<CartProduct[]>(
    JSON.parse(
      (typeof localStorage !== 'undefined' &&
        localStorage.getItem(PRODUCTS_STORAGE_KEY)) ||
        '[]'
    )
  );

  useEffect(() => {
    const isBrowser = typeof window !== 'undefined';

    if (isBrowser) {
      localStorage.setItem(PRODUCTS_STORAGE_KEY, JSON.stringify(products));
    }
  }, [products]);

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

  function resetProducts() {
    setProducts([]);
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
        resetProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
