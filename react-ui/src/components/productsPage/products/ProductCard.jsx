import './products.css';
// import { useState } from 'react';
import AddToCart from '../addToCart/AddToCart';

const Products = ({ productsData, searchQuery }) => {

    const productIncluded = () => {
        if(searchQuery === '') {
            return productsData;
        } else {
            return productsData.filter(product => product.product_name.toLowerCase().includes(searchQuery.toLowerCase()));
        }
    }

    return (
        <div className="product-container">
            {productIncluded() < 1 ? <h1 className="all-out">Sorry, we're all out of stuff (❍ᴥ❍ʋ)</h1> : ''}
            {productIncluded().map(product => 
                <div
                    className="product-card"
                    id="product-card"
                    key={product.id}
                >
                    <div className="product-img">
                        <img src={product.product_image} alt={product.product_name} />
                    </div>
                    <div className="product-information">
                        <p>{product.product_name}</p>
                        <p>{product.product_description}</p>
                        <p>${product.product_price}</p>
                    </div>
                    <AddToCart product={product} />
                </div>
            )}
        </div>
    )
}

export default Products;