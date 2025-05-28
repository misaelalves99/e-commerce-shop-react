import React from "react";
import styles from "./ProductList.module.css";
import { FaShoppingCart, FaStar } from "react-icons/fa";

import { Product as ProductType } from "../../types/product";
import { useCart } from "../../hooks/useCart";

interface ProductListProps {
  product: ProductType;
}

const ProductList: React.FC<ProductListProps> = ({ product }) => {
  const { addToCart } = useCart();

  const discountValue = product.discount
    ? Number(product.discount.toString().replace(/\D/g, ""))
    : null;

  return (
    <div className={styles.card} style={{ cursor: "pointer" }}>
      <img
        src={product.mainImage}
        alt={product.title}
        className={styles.image}
      />
      <div className={styles.details}>
        <h3 className={styles.title}>{product.title}</h3>

        <div className={styles.rating}>
          {Array.from({ length: 5 }, (_, index) => (
            <FaStar
              key={index}
              color={index < product.rating ? "#f39c12" : "#ddd"}
            />
          ))}
        </div>

        <div className={styles.priceDetails}>
          {product.priceOld && (
            <span className={styles.priceOld}>
              R${Number(product.priceOld).toFixed(2)}
            </span>
          )}
          {discountValue !== null && (
            <span className={styles.discount}>-{discountValue}%</span>
          )}
        </div>

        <div className={styles.priceContainer}>
          <p className={styles.price}>R${Number(product.price).toFixed(2)}</p>
          <button
            className={styles.buyButton}
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
