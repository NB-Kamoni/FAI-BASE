import React from 'react';
import CartItem from './CartItem';
import './Cart.css';

function Cart({ cartItems, onAddToCart, onRemoveFromCart }) {
    const getTotalSum = () => {
        return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
    };

    // This function will handle removing items or adjusting their quantity
    const handleRemove = (product, removeAll = false) => {
        onRemoveFromCart(product, removeAll);
    };

    const handleAdd = (product) => {
        onAddToCart(product);
    };

    return (
        <div className="cartContainer">
            <h2 className='cart-header'>Shopping Cart</h2>
            <div className='cart-image'>
            <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYnMQenZZXf-rv-lgFPddJ-XYqoOHVwCqcs_CrC8KeQw&s"
        alt="cartimage"
      />
      </div>
            {cartItems.length === 0 && <div className='cart-items'>Add to Cart</div>}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onAdd={() => handleAdd(item)}
                    onRemove={() => handleRemove(item)}
                />
            ))}
            <div className='cart-total'> Total: Ksh{getTotalSum()}</div>
        </div>
    );
}

export default Cart;
