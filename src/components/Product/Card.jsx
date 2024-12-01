// src/components/Product/Card.jsx
import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { addToCart } = useContext(AppContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart');  // Navega para a página do carrinho
    };

    return (
        <div className="card-container">
            <Link to="/detail">
                <div className="card-item">
                    <div className="img-item">
                        <img src={product.images} alt={product.title} />
                    </div>
                    <div className="info-item">
                        <h3 className="title-item">{product.title}</h3>
                        <div className="rating">
                            <p>⭐⭐⭐⭐⭐ {product.rating}</p>
                        </div>
                        <div className="price-details">
                            <span className="price-old">{product.priceOld}</span>
                            <span className="discount">{product.discount}</span>
                        </div>
                        <div className="actions">
                            <span className="price">{product.price}</span>
                            <button onClick={handleAddToCart} className="cart-btn">🛒</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
