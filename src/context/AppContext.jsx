// src/context/AppContext.jsx
import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Recupera o carrinho do localStorage, se houver
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });
  
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    // Salva o estado do carrinho no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => setCart((prevCart) => [...prevCart, product]);
  const removeFromCart = (id) => setCart((prevCart) => prevCart.filter((item) => item.id !== id));

  const addToFavorites = (product) => setFavorites((prevFavorites) => [...prevFavorites, product]);
  const removeFromFavorites = (id) => setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));

  return (
    <AppContext.Provider value={{ cart, favorites, addToCart, removeFromCart, addToFavorites, removeFromFavorites }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
