import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetail.css';
import { CardProducts } from '../../src/data/data'; // Importa os produtos

const ProductDetail = () => {
    const { id } = useParams(); // Obtém o ID da URL
    const product = CardProducts.find(item => item.id === parseInt(id)); // Encontra o produto pelo ID

    if (!product) {
        return <p>Produto não encontrado!</p>; // Caso o produto não exista
    }

    // Gerenciar a imagem principal selecionada
    const [selectedImage, setSelectedImage] = useState(product.images[0]);

    return (
        <div className="product-detail-container">
            <div className="product-header">
                <h1>{product.title}</h1>
                <p>Categoria: {product.category}</p>
            </div>

            <div className="product-content">
                {/* Imagens do produto */}
                <div className="product-images">
                    <div className="main-image">
                        <img src={selectedImage} alt={product.title} />
                    </div>
                    <div className="image-thumbnails">
                        {product.images.map((image, index) => (
                            <img
                                key={index}
                                src={image}
                                alt={`Imagem ${index + 1}`}
                                onClick={() => setSelectedImage(image)}
                                className={selectedImage === image ? "active" : ""}
                            />
                        ))}
                    </div>
                </div>

                {/* Informações do produto */}
                <div className="product-info">
                    <div className="rating">
                        <p>⭐⭐⭐⭐⭐ {product.rating} avaliações</p>
                    </div>
                    <div className="price">
                        <div className="old-discount">
                            <p className="old-price">{product.priceOld}</p>
                            <p className="discount">{product.discount}</p>
                        </div>
                        <h3 className="current-price">{product.price}</h3>
                    </div>
                    <button className="buy-button">Comprar</button>
                    <div className="frete-container">
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
