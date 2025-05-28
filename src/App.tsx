// src/App.tsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { FavoritesProvider } from "./context/FavoritesContext";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/home/index";
import Products from "./pages/products";
import Contact from "./pages/contact";
import Cart from "./pages/cart";
import Favorites from "./pages/favorites";
import Login from "./pages/login";
import ProductDetail from "./pages/product-detail";
import CheckoutPage from "./pages/checkout/index";
import Profile from "./pages/profile/index";
import Security from "./pages/security/index";
import Address from "./pages/address/index";
import Register from "./pages/register/index";

const App: React.FC = () => {
  return (
    <CartProvider>
      <FavoritesProvider>
        <Router>
          <Header />
          <main style={{ minHeight: "80vh" }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
              <Route path="/profile" element={<Profile/>} />
              <Route path="/security" element={<Security/>} />
              <Route path="/address" element={<Address/>} />
              <Route path="*" element={<p>Página não encontrada</p>} />
            </Routes>
          </main>
          <Footer />
        </Router>
      </FavoritesProvider>
    </CartProvider>
  );
};

export default App;
