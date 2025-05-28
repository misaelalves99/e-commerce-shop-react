import { Product as ProductType } from "../types/product";

export interface FavoritesContextType {
  favorites: ProductType[];
  addToFavorites: (product: ProductType) => void;
  removeFromFavorites: (id: number) => void;
  setFavorites: (favorites: ProductType[]) => void;
}
