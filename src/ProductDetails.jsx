import React from 'react';
import { useParams } from 'react-router-dom';
import products from './details/Details'; // Assuming 'Details.js' contains your product data

const ProductDetails = () => {
  const { id } = useParams(); // Capture the product ID from the URL
  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  return (
    <div className="product-details">
      <img src={product.pic} alt={product.name} className="product-image" />
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
  );
};

export default ProductDetails;