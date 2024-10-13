import React from 'react';
import { Link } from 'react-router-dom';
import products from './details/Details'; // Your array of products

const Products = () => {
  return (
    <div className="products-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/products/${product.id}`}>
            <img src={product.pic} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Products;