import React from 'react';
import "../styles/Card.css";
import { Link } from 'react-router-dom';


const Card = ({ pic, name, price, onAddToCart, productId }) => {
  return (
    <div className="card">
      <Link to={`/products/${productId}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <img src={pic} alt={name} className="card-image" />
        <div className="card-details">
          <h2 className="card-name">{name}</h2>
          <p className="card-price">${price}</p>
        </div>
      </Link>
      <div className="button-container"> {/* Add a container for alignment */}
        <button className="add-to-cart-btn" onClick={onAddToCart}>
          +
        </button>
      </div>
    </div>
  );
};
export default Card;