// src/pages/Products.jsx
import React, { useState } from 'react';
import { CardCategories, CardProducts } from '../data/data';
import Card from '../components/Product/Card';
import MainContainer from '../components/MainContainer/MainContainer';
import Footer from '../components/Footer/Footer';
import './Products.css';

export default function Products() {
    // Inicializa o estado com a categoria 'Todos'
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    // Função que lida com a mudança de categoria
    const handleChange = (event) => {
        setSelectedCategory(event.target.value); // Atualiza a categoria selecionada
    };

    // Filtra os produtos de acordo com a categoria selecionada
    const filteredProducts = selectedCategory === 'Todos'
        ? CardProducts
        : CardProducts.filter(product => product.category === selectedCategory);

    return (
        <MainContainer>
            {/* Filtro de Categorias */}
            <div className="filter-category">
                <div className="list-category">
                    <div className="title-category">
                        <h2>Categorias</h2>
                    </div>
                    <div className="input-categories">
                        {CardCategories.map(category => (
                            <label className="category-label-container" key={category.id}>
                                <div className="icon-category">{category.icon}</div>
                                <input
                                    type="radio"
                                    name="category"
                                    value={category.title}
                                    checked={selectedCategory === category.title}
                                    onChange={handleChange}
                                    className="input-category"
                                />
                                <p className="name-category">{category.title}</p>
                            </label>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lista de Produtos Filtrados */}
            <div className="product-list">
                {filteredProducts.map(product => (
                    <Card key={product.id} product={product} />
                ))}
            </div>

            <Footer />
        </MainContainer>
    );
}
