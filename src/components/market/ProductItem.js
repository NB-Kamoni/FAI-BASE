import React from 'react';

function ProductItem({ product, onAddToCart }) {
    if (!product) {
        return <div>Loading...</div>; // Or handle this scenario appropriately
    }

    return (
        <div id="product-item">
            <h2>{product.name}</h2>
            {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ width: "300px" }} />}
            <p>{product.description}</p>
            <p>Price: Ksh{product.price}</p>
            <p>Location: {product.location}</p>
            <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
}

export default ProductItem;
