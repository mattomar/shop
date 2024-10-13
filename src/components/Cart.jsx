import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              <img src={item.pic} alt={item.name} style={{ width: '50px' }} />
              <span>{item.name}</span> - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;