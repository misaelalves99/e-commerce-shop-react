// types/product.ts

export type ImageObj = {
  src: string;
  alt: string;
};

export type Product = {
  id: number;
  title: string;
  rating: number;
  price: number;
  priceOld?: number;
  discount?: string;
  category: string;
  mainImage: string;
  images: ImageObj[];
};

// Tipagem original da API
export type ProductAPI = {
  id: number;
  title: string;
  rating: number;
  price: number;
  priceOld?: number;
  discount?: string;
  category: string;
  images: string[];
};
