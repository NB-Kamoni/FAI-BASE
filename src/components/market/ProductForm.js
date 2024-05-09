import React, { useState } from 'react';
import axios from 'axios';

function AddProductForm({ onAddProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    imageUrl: '',
    description: '',
    price: '',
    location: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state to true to prevent multiple submits
    axios.post("http://localhost:3000/products", newProduct)
      .then((response) => {
        console.log(response.data);
        onAddProduct(response.data); // Optionally, you can call this to update parent component
        setIsSubmitting(false); // Reset submitting state
        alert('Product added successfully!');
      })
      .catch((error) => {
        console.error('Failed to add product', error);
        setError('Failed to add product. Please try again later.');
        setIsSubmitting(false); // Reset submitting state
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} required />
      <input type="text" name="imageUrl" placeholder="Image URL" value={newProduct.imageUrl} onChange={handleChange} required />
      <textarea name="description" placeholder="Description" value={newProduct.description} onChange={handleChange} required />
      <input type="number" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} required />
      <input type="text" name="location" placeholder="Location" value={newProduct.location} onChange={handleChange} required />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit" disabled={isSubmitting}>Add Product</button>
    </form>
  );
}

export default AddProductForm;
