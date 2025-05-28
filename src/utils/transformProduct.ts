import { ProductAPI, Product } from "../types/product";

export function transformProduct(apiProduct: ProductAPI): Product {
  const images = apiProduct.images.map((url, i) => ({
    src: url,
    alt: `${apiProduct.title} - imagem ${i + 1}`,
  }));

  return {
    id: apiProduct.id,
    title: apiProduct.title,
    rating: apiProduct.rating,
    price: apiProduct.price,
    priceOld: apiProduct.priceOld,
    discount: apiProduct.discount,
    category: apiProduct.category,
    images,
    mainImage: images[0]?.src || "", // ✅ para exibir rápido
  };
}
