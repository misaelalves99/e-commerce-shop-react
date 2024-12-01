// src/components/ProductDetail/ProductDetail.jsx
import React, { useState } from 'react';
import './ProductDetail.css';
import Roupas1 from '../assets/products/roupas/roupas-01.png';

const ProductDetail = () => {
    const [selectedImage, setSelectedImage] = useState(Roupas1);

    const product = {
        title: "Smartphone Motorola Moto G24 Grafite 128GB, 4GB + 4GB RAM Boost",
        description: "Tela de 6.6', Câmera Dupla, Dolby Atmos, Android 14 e Processador Octa-core",
        priceOld: "R$ 999,00",
        discount: "24%",
        price: "R$ 649,00",
        pixDiscount: "No Pix com 15% de desconto",
        installment: "7x de R$ 109,08",
        rating: 5.0,
        reviews: 2816,
        questions: 114,
        images: [
            Roupas1,
            Roupas1,
            Roupas1,
            Roupas1,
            Roupas1,
        ],
    };

    return (
        <div className="product-detail-container">
            <div className="product-header">
                <h1>{product.title}</h1>
                <p>{product.description}</p>
            </div>

            <div className="product-content">
                <div className="product-images">
                    <div className="main-image">
                        <img src={selectedImage} alt="Produto Principal" />
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

                <div className="product-info">
                    <div className="rating">
                        <p>⭐⭐⭐⭐⭐ {product.rating} ({product.reviews} avaliações)</p>
                        <p>{product.questions} perguntas</p>
                    </div>
                    <div className="price">
                        <div className='old-discount'>
                            <p className="old-price">{product.priceOld}</p>
                            <p className="discount">Baixou {product.discount}</p>
                        </div>
                        <div className='price-origin'>
                            <h3>{product.price}</h3>
                        </div>
                        <div className='pix-parcel'>
                            <p>{product.pixDiscount}</p>
                            <p>{product.installment} sem juros</p>
                        </div>
                    </div>
                    <button className="buy-button">Comprar</button>
                    <div className="frete-container">
                        <p>Calcule o frete e prazo de entrega</p>
                        <input type="text" placeholder="Digite o CEP" />
                        <button>Consultar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
