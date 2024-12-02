// src/context/AppContext.jsx
import React, { createContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const addToFavorites = (product) => {
    setFavorites((prevFavorites) => [...prevFavorites, product]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevFavorites) => prevFavorites.filter((item) => item.id !== id));
  };

  return (
    <AppContext.Provider value={{ 
      cart, 
      addToCart, 
      favorites, 
      setFavorites, 
      addToFavorites, 
      removeFromFavorites 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
