// src/pages/Cart.jsx
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(AppContext);

  return (
    <div className="cart-page">
      <h2>Carrinho de Compras</h2>
      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <div className="cart-item-info">
                <img src={item.images} alt={item.title} className="cart-item-image" />
                <div>
                  <h3>{item.title}</h3>
                  <p>Preço: R${item.price}</p>
                </div>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
