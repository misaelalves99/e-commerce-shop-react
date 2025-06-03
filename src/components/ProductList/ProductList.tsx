// src/components/ProductList/ProductList.tsx

import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { Product } from "../../types/product";

import styles from "./ProductList.module.css";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
