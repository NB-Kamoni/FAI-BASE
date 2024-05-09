import React from 'react';
import CartItem from './CartItem';

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
        <div>
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 && <div>Add to Cart</div>}
            {cartItems.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    onAdd={() => handleAdd(item)}
                    onRemove={() => handleRemove(item)}
                />
            ))}
            <div>Total: Ksh{getTotalSum()}</div>
        </div>
    );
}

export default Cart;
