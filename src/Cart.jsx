import React from 'react';
import './styles/Cart.css'; // Import your CSS file
 
 


const Cart = ({ cartItems, onRemoveFromCart }) => {
  const handleRemove = (item) => {
    onRemoveFromCart(item); // Call the remove function with the item to be removed
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0); // Calculate total price

  return (
    <div className="cartItem">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="cart-item"> {/* Use item.id instead of index */}
                <img src={item.pic} alt={item.name} className="cart-item-image" />
                <span className="cart-item-name">{item.name}</span>
                <span className="cart-item-price">${item.price}</span>
                <span className="cart-item-quantity">Quantity: {item.quantity}</span> {/* Display quantity */}
                <button onClick={() => handleRemove(item)} className="remove-button">Remove</button> {/* Delete button */}
              </li>
            ))}
          </ul>
          <div className="total-price">Total: ${totalPrice.toFixed(2)}</div> {/* Display total price */}
        </>
      )}
    </div>
  );
};



export default Cart;
