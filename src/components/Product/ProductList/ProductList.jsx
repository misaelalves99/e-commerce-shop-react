import React from 'react';
import Fade from 'react-reveal';
import { CardProducts } from '../../../data/data';
import Card from '../Card/Card';

export default function ProductList({ selectedCategory }) {
    const filteredProducts = selectedCategory === 'Todos'
    ? CardProducts
    : CardProducts.filter(product => product.category === selectedCategory);

    return (
        <div className="product-list">
            <Fade bottom duration={2000} distance="40px">
                {filteredProducts.map(product => (
                    <Card product={product}/>
                ))}
            </Fade>
        </div>
    )
}