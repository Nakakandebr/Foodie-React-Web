import React from 'react';
import './style.css';
function Navbar() {
  return (
    <nav>
      <div className="navbar-container">
        <span className="logo">Foodle</span>
        <ul className="nav-links">
          <div className="centered-links">
            <li><a href="/">Home</a></li>
            <li><a href="/offers">Offers</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/aboutus">About Us</a></li>
          </div>
          <div className="end-links">
            <li><a href="/login">Login</a></li>
            <button><li><a href="/signup">Sign Up</a></li></button>
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
