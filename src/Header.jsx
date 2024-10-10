import React from "react";
import "./styles/Header.css"
import { Link } from 'react-router-dom';


 function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
      <h1 className="title">EXERY</h1>
      <div className="cart">
        <i className="fa-solid fa-bag-shopping"></i>
      </div>
    </header>
  );
}

export default Header;