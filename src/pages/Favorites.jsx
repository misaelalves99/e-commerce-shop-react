import React, { useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import './Favorites.css';

const Favorites = () => {
  const { favorites, removeFromFavorites, setFavorites } = useContext(AppContext);

  useEffect(() => {
    // Carregar favoritos do localStorage ao montar o componente
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, [setFavorites]);

  useEffect(() => {
    // Salvar favoritos no localStorage sempre que mudar
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <div className="favorites-page">
      <h2>Favoritos</h2>
      {favorites.length === 0 ? (
        <p>Você não tem produtos favoritos ainda.</p>
      ) : (
        <ul className="favorites-list">
          {favorites.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.name} />
              <span>{item.name}</span>
              <span>R$ {item.price}</span>
              <button onClick={() => removeFromFavorites(item.id)}>Remover</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
