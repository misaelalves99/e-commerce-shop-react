import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import { AppProvider } from './context/AppContext';
import Header from "./components/Header/Header";

function App() {
    return (
        <AppProvider>
            <Router>
                <Header/>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/produtos" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/favorites" element={ <Favorites /> }/>
                    <Route path="/contato" element={ <Contact /> }/>
                </Routes>    
            </Router>
        </AppProvider>
    );
};

export default App;
