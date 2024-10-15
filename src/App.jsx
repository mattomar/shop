import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Products from './Products';
import ProductDetails from './ProductDetails'; // Import the ProductDetails component
import Contacts from './Contacts';
import React, { useState } from 'react';
import "./styles/App.css";
import Cart from './Cart';
 

function App() {
  const [cart, setCart] = useState([]); // Initialize cart state

  const handleAddToCart = (product) => {
    const existingItemIndex = cart.findIndex(item => item.id === product.id);

    if (existingItemIndex >= 0) {
      // If item already exists in the cart, update the quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1; // Increase quantity by 1
      setCart(updatedCart);
    } else {
      // If item does not exist, add it to the cart with quantity of 1
      const newItem = {
        ...product,
        quantity: 1 // Include the quantity
      };
      setCart([...cart, newItem]);
    }
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter(item => item.id !== productToRemove.id)); // Remove item from cart
  };

  // Calculate total quantity of items in the cart
  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Router>
      <Header cartQuantity={totalQuantity} /> {/* Pass total quantity to Header */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
        <Route path="/products/:id" element={<ProductDetails />} /> {/* Dynamic route for product details */}
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/cart" element={<Cart cartItems={cart} onRemoveFromCart={handleRemoveFromCart} />} /> {/* Pass cart items and remove function to Cart */}
      </Routes>
    </Router>
  );
}

export default App;