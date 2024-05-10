import Sidebar from '../sidebar/Sidebar';
import './Market.css';
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import SearchBar from "./SearchBar";
import Cart from './Cart';
import AddProductForm from "./ProductForm";
// import ProductContainer from "./ProductContainer";
import Header from "./Header";
import './AddProductForm.css'

const Dashboard = () => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        axios.get('https://farmfolio-backend.onrender.com/products')
            .then(response => { setProducts(response.data.map(product => ({ ...product, qty: 1 }))); })
            .catch(error => { console.error('Error fetching products:', error); });
    }, []);

    const handleClick = () => {
        setShowForm(!showForm);
    };

    const addProduct = (newProduct) => {
        setProducts([...products, { ...newProduct, qty: 1 }]);
    };

    const handleSearch = term => {
        setSearchTerm(term.toLowerCase());
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );

    const addToCart = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist) {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x));
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    const removeFromCart = (product) => {
        const exist = cartItems.find(x => x.id === product.id);
        if (exist.qty === 1) {
            setCartItems(cartItems.filter(x => x.id !== product.id));
        } else {
            setCartItems(cartItems.map(x => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x));
        }
    };

    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content-card">
                <Header />
                {showForm && <AddProductForm onAddProduct={addProduct} />}
                <div className="buttonContainer">
                    <button onClick={handleClick}>{showForm ? 'Close Form' : 'Add a Product'}</button>
                </div>
                
                <SearchBar onSearch={handleSearch} />
                
               
               {/* <ProductContainer products={filteredProducts} /> */}
               
              
                <div className="products-grid">
                {filteredProducts.map(product => (
                    <div key={product.id }className="product-item">
                        <Link to={`/product/${product.id}`}>
                            <h3>{product.name}</h3>
                        </Link>
                        {product.imageUrl && (
                            <img src={product.imageUrl} alt={product.name} style={{ width: "250px", height: "200px" }} />
                        )}
                        <p>{product.description}</p>
                        <p>{`Ksh${product.price}`}</p>
                        <p>Location: {product.location}</p>
                        <button onClick={() => addToCart(product)}className='cart-checkout-btn'>Add to Cart</button>
                    </div>
                ))}
                </div>
                <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
            </div>
        </div>
    );
};

export default Dashboard;

