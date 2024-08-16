import React from 'react';
import { Link } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";

export default function Card({ product }) {
    return (
        <div className='item-products'>
            <div className='item'>
                <div className='img-item'>
                    <img src={product.images} alt="Produto" />
                </div>
                <div className='title-item'>
                    <h3>{product.title}</h3>
                </div>
                <div className="rating">
                    <p>⭐⭐⭐⭐⭐ {product.rating}</p>
                </div>
                <div className='price-old-discount'>
                    <div className='price-old'>
                        <p>{product.priceOld}</p>
                    </div>
                    <div className='discount'>
                        <p>{product.discount}</p>
                    </div>
                </div>
                <div className="fav-price-cart">
                    <div className='favorite'>
                        <Link><MdFavoriteBorder /></Link>
                    </div>
                    <div className="price">
                        <h3>{product.price}</h3>
                    </div>
                    <div className="cart">
                        <Link><IoMdAddCircleOutline /></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}