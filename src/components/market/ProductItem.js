// src/components/ProductItem.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


function ProductItem({ onAddToCart}) {
    const { id } = useParams(); // get product ID from URL parameters
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => {
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) return <div>Loading...</div>; //  a loading text or spinner will show

    return (
        <div>
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
