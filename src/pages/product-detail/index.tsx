import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CardProducts } from "../../api/products";  // Array de produtos já no formato Product[]
import styles from "./ProductDetail.module.css";
import { Product, ImageObj } from "../../types/product";

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImage, setSelectedImage] = useState<ImageObj | null>(null);

  useEffect(() => {
    if (id) {
      const foundProduct = CardProducts.find(
        (item) => item.id === parseInt(id)
      );

      if (foundProduct) {
        setProduct(foundProduct);
        // Encontrar o objeto da imagem principal no array de imagens
        const mainImgObj =
          foundProduct.images.find((img) => img.src === foundProduct.mainImage) ||
          foundProduct.images[0];
        setSelectedImage(mainImgObj);
      } else {
        setProduct(null);
        setSelectedImage(null);
      }
    }
  }, [id]);

  if (!product) return <p>Produto não encontrado!</p>;

  return (
    <div className={styles.productDetailContainer}>
      <div className={styles.productHeader}>
        <h1>{product.title}</h1>
        <p>Categoria: {product.category}</p>
      </div>

      <div className={styles.productContent}>
        <div className={styles.productImages}>
          <div className={styles.mainImage}>
            {selectedImage && (
              <img
                src={selectedImage.src}
                alt={selectedImage.alt || product.title}
                width={500}
                height={500}
                style={{ objectFit: "contain" }}
              />
            )}
          </div>

          <div className={styles.imageThumbnails}>
            {product.images.map((imageObj, index) => (
              <div
                key={index}
                className={selectedImage?.src === imageObj.src ? styles.active : ""}
                onClick={() => setSelectedImage(imageObj)}
                style={{ cursor: "pointer" }}
              >
                <img
                  src={imageObj.src}
                  alt={imageObj.alt || `${product.title} - imagem ${index + 1}`}
                  width={50}
                  height={50}
                  className={styles.thumbnailImage}
                  style={{ objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>

        <div className={styles.productInfo}>
          <div className={styles.rating}>
            <p>⭐⭐⭐⭐⭐ {product.rating} avaliações</p>
          </div>

          <div className={styles.price}>
            {product.priceOld !== undefined && (
              <div className={styles.oldDiscount}>
                <p className={styles.oldPrice}>R$ {product.priceOld.toFixed(2)}</p>
                <p className={styles.discount}>{product.discount}</p>
              </div>
            )}
            <h3 className={styles.priceOrigin}>R$ {product.price.toFixed(2)}</h3>
          </div>

          <button className={styles.buyButton}>Comprar</button>

          <div className={styles.freteContainer}>
            <p>Calcule o frete e prazo de entrega:</p>
            <input type="text" placeholder="Digite o CEP" />
            <button>Consultar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
