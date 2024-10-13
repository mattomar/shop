import React from 'react';
import "../styles/Card.css";

const Card = ({ pic, name, price, onAddToCart }) => {
  return (
    <div className="card">
      <img src={pic} alt={name} className="card-image" />
      <div className="card-details">
        <h2 className="card-name">{name}</h2>
        <p className="card-price">${price}</p>
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;