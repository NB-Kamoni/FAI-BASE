import React from 'react';

function CartItem({ item, onAdd, onRemove }) {
    return (
        <div className="cart-item">
            <h4>{item.name}</h4>
            <div>
                <img src={item.imageUrl} alt={item.name} style={{ width: '50px', height: '50px' }} />
            </div>
            <div>{`Ksh ${item.price}`}</div>
            <div>{`Qty: ${item.qty}`}</div>
            <div>
                <button onClick={() => onAdd(item)}>+</button>
                <button onClick={() => onRemove(item)}>-</button>
            </div>
            <div>
                <button onClick={() => onRemove(item, true)}>Remove</button>
            </div>
        </div>
    );
}

export default CartItem;
