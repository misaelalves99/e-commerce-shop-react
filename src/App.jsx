import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Contact from "./pages/Contact";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <Home /> }/>
                <Route path="/produtos" element={ <Products /> }/>
                <Route path="/contato" element={ <Contact /> }/>
            </Routes>    
        </Router>
    );
};

export default App;
