// src/pages/Favorites.jsx
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import './Favorites.css';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useContext(AppContext);

  return (
    <div className="favorites-page">
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você não tem produtos favoritos ainda.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id}>
              {item.name} - R${item.price.toFixed(2)}
              <button onClick={() => removeFromFavorites(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
