// src/pages/Favorites/FavoritesPage.tsx

import React from "react";
import { useFavorites } from "../../hooks/useFavorites"; // ✅ Conecta ao contexto correto
import { Product as ProductType } from "../../types/product";
import styles from "./Favorites.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites(); // ✅ Usando hook do contexto de favoritos

  return (
    <div className={styles.favoritesContainer}>
      <h2 className={styles.title}>Meus Favoritos</h2>

      {favorites.length === 0 ? (
        <p className={styles.emptyMessage}>Você ainda não adicionou itens aos favoritos.</p>
      ) : (
        <div className={styles.favoritesGrid}>
          {favorites.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
