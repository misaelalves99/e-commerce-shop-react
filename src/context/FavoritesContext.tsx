// src/context/FavoritesContext.tsx

import React, { createContext, useState, ReactNode } from "react";
import { Product as ProductType } from "../types/product";
import { FavoritesContextType } from "../types/favorites";

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<ProductType[]>([]);

  const addToFavorites = (product: ProductType) => {
    setFavorites(prev =>
      prev.some(item => item.id === product.id) ? prev : [...prev, product]
    );
  };

  const removeFromFavorites = (id: number) => {
    setFavorites(prev => prev.filter(item => item.id !== id));
  };

  const setFavoritesContext = (favorites: ProductType[]) => {
    setFavorites(favorites);
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, setFavorites: setFavoritesContext }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesContext };
