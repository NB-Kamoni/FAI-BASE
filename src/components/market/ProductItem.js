import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductItem({ onAddToCart }) {
    const { id } = useParams(); // Get product ID from URL parameters
    const [product, setProduct] = useState(null);

    useEffect(() => {
        console.log(`Fetching product with ID: ${id}`);
        axios.get(`http://localhost:3000/products/${id}`)
            .then(response => {
                console.log('Product fetched:', response.data);
                setProduct(response.data);
            })
            .catch(error => {
                console.error('Error fetching product details:', error);
            });
    }, [id]);

    if (!product) {
        console.log('Product is not loaded yet');
        return <div>Loading...</div>;
    }

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
