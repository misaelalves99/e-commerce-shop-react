import React, { useState, useEffect } from "react";
import { CardCategories, CardProducts } from "../../api/products";
import { Product as ProductType } from "../../types/product";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./Products.module.css";

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Todos");
  const [filteredProducts, setFilteredProducts] = useState<ProductType[]>([]);

  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredProducts(CardProducts);
    } else {
      setFilteredProducts(
        CardProducts.filter(
          (product) => product.category === selectedCategory
        )
      );
    }
  }, [selectedCategory]);

  return (
    <>
      {/* Filtro de Categorias */}
      <div className={styles.filterCategory}>
        <div className={styles.listCategory}>
          <div className={styles.titleCategory}>
            <h2>Categorias</h2>
          </div>
          <div className={styles.inputCategories}>
            {CardCategories.map((category) => (
              <label
                className={styles.categoryLabelContainer}
                key={category.id}
              >
                <div className={styles.iconCategory}>
                  <category.icon />
                </div>
                <input
                  type="radio"
                  name="category"
                  value={category.title}
                  checked={selectedCategory === category.title}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className={styles.inputCategory}
                />
                <p className={styles.nameCategory}>{category.title}</p>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Lista de Produtos Filtrados */}
      <div className={styles.productList}>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
