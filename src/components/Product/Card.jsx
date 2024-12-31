import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { MdFavoriteBorder } from "react-icons/md";
import { FaCartPlus } from "react-icons/fa";

const Card = ({ product }) => {
    const { addToCart, addToFavorites } = useContext(AppContext);
    const navigate = useNavigate();

    const handleAddToCart = () => {
        addToCart(product);
        navigate('/cart'); // Navega para a página do carrinho
    };

    const handleAddToFavorites = (e) => {
        e.preventDefault(); // Previne o comportamento padrão
        addToFavorites(product); // Adiciona o produto aos favoritos
    };

    return (
        <div className="card-container">
            <Link to={`/detail/${product.id}`}>
                <div className="card-item">
                    <div className="actions">
                        <button 
                            onClick={(e) => handleAddToFavorites(e)} // Passando o evento corretamente
                            className="favorite-btn"
                        >
                            <MdFavoriteBorder />
                        </button>
                    </div>
                    <div className="img-item">
                        <img src={product.mainImage} alt={product.title} />
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
                            <button onClick={handleAddToCart} className="cart-btn">
                                <FaCartPlus />
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;
