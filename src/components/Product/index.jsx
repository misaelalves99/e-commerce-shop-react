import '../Product/Product.css';
import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter/CategoryFilter';
import ProductList from './ProductList/ProductList';

const Product = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const handleChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    return (
        <section className='section-products'>
            <div className='container-products'>
                <CategoryFilter selectedCategory={selectedCategory} handleChange={handleChange}/>
                <ProductList selectedCategory={selectedCategory}/>
            </div>
        </section>
    )
}

export default Product;