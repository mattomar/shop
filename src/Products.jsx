import React from 'react';
import { Link } from 'react-router-dom';
import products from './details/Details'; // Your array of products
import Card from './components/Card';
import { useState } from 'react';


const Products = ({ onAddToCart }) => { // Accept the onAddToCart prop from App.js
  return (
    <div className="products-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Card
            pic={product.pic}
            name={product.name}
            price={product.price}
            onAddToCart={() => onAddToCart(product)} // Use the passed onAddToCart prop
            productId={product.id} // Pass the product ID for navigation
          />
        </div>
      ))}
    </div>
  );
};


 

export default Products;