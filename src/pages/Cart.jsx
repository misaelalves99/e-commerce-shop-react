// src/pages/Cart.jsx
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useContext(AppContext); // Acessa o estado do carrinho

  return (
    <div className="cart-page">
      <h2>Seu Carrinho</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <div className="cart-item-details">
                <img src={item.images} alt={item.title} className="cart-item-image" />
                <div>
                  <h3>{item.title}</h3>
                  <p>Preço: R${item.price}</p>
                  <p>Quantidade: 1</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
