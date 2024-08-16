import React from 'react';
import Fade from 'react-reveal';
import { CardCategories } from '../../../data/data';

export default function CategoryFilter({ selectedCategory, handleChange }) {
    return (
        <div className='filter-category'>
            <Fade bottom duration={2000} distance="40px">
                <div className='list-category'>
                    <div className='title-category'>
                        <h2>Categorias</h2>
                    </div>
                    
                    <div className='input-categories'>
                        {CardCategories.map((category) => (
                            <label className="category-label-container" key={category.id}>
                                <div className='icon-category'>{category.icon}</div>
                                <input 
                                    type="radio" 
                                    name="category"
                                    value={category.title}
                                    checked={selectedCategory === category.title}
                                    onChange={handleChange}
                                    className="input-category"
                                />
                                <p className='name-category'>{category.title}</p>
                            </label>
                        ))}
                    </div>
                </div>
            </Fade>    
        </div>
    )
}