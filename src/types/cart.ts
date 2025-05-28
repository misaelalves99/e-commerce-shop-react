// src/types/cart.ts

import { Product as ProductType } from "../types/product";

export interface CartItem {
  id: number;
  title: string;
  price: number;
  images: string | { src: string; alt?: string }[];
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
}
