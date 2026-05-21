"use client";

import { IProductsDto } from "@/app/components/product-card/ProductCard.types";
import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from "react";
import { CartContextProps } from "./CartContext.types";
import { formartToCurrencyBRL } from "@/app/helpers/format-currency";

const CartContext = createContext<CartContextProps | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProductsDto[]>([]);

  const handleAddItemToCart = useCallback((item: IProductsDto) => {
    setCartItems((prev) => [...prev, item]);
  }, []);

  const handleRemoveItemFromCart = useCallback((id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const cartIds = useMemo(() => {
    return new Set(cartItems.map((item) => item.id));
  }, [cartItems]);

  const formattedTotalPrice = useMemo(
    () => formartToCurrencyBRL(cartItems.reduce((acc, current) => acc + current.price, 0)),
    [cartItems],
  );

  const values: CartContextProps = useMemo(() => {
    return {
      cartItems,
      handleAddItemToCart,
      handleRemoveItemFromCart,
      cartIds,
      formattedTotalPrice,
    };
  }, [cartItems, setCartItems, handleAddItemToCart, handleRemoveItemFromCart]);

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCartContext = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }

  return context;
};
