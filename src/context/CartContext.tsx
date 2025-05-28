// src/context/CartContext.tsx

import React, { createContext, useState, ReactNode } from "react";
import { Product as ProductType } from "../types/product";
import { CartItem, CartContextType } from "../types/cart";
import { getImage } from "../utils/imageUtils";

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: ProductType) => {
    setCart((prev) => {
      const itemExists = prev.find((item) => item.id === product.id);
      if (itemExists) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            title: product.title,
            price: typeof product.price === "string" ? parseFloat(product.price) : product.price,
            images: getImage(product.images),
            quantity: 1,
          },
        ];
      }
    });
  };

  const increaseQuantity = (id: number) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: item.quantity + 1 } : item))
    );
  };

  const decreaseQuantity = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
