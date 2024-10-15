import React from "react";
import "./styles/Header.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import FontAwesomeIcon
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons"; // Import the specific icons


function Header({ cartQuantity }) {
  const showSidebar = () => {
    const sidebar = document.querySelector('.sidebar'); // Select the sidebar
    if (sidebar) {
      sidebar.style.display = 'flex'; // Set sidebar display to flex
    }
  };

  const unshowSidebar = () => {
    const sidebar = document.querySelector('.sidebar'); // Select the sidebar
    if (sidebar) {
      sidebar.style.display = 'none'; // Set sidebar display to none
    }
  };

  return (
    <header className="header">
      {/* Navbar */}
      <nav className="navbar">
        <ul>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>

      {/* Sidebar */}
      <nav className="sidebar">
        <ul>
        <li>
            <Link to="#" onClick={unshowSidebar}>
              <FontAwesomeIcon icon={faXmark} /> {/* Use the imported icon here */}
            </Link>
          </li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>

      <h1 className="title">EXERY</h1>

      <div className="cart">
        <Link to="/cart">
          <i className="fa-solid fa-bag-shopping"></i>
          {cartQuantity > 0 && (
            <span className="cart-quantity">{cartQuantity}</span>
          )}
        </Link>
      </div>
      <Link to="#" onClick={showSidebar} className="menu-icon"> {/* Added className here */}
        <FontAwesomeIcon icon={faBars} />
      </Link>
    </header>
  );
}

export default Header;