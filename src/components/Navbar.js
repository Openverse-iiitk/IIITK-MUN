import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Logo from './logo.png'; // Replace with your logo image

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prev => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <img src={Logo} alt="Logo" className="navbar-logo" />
          <Link to="/" onClick={closeMenu} className="brand-text">
            IIITK MUN
          </Link>
        </div>
        <div className="menu-items">
          <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/guide" className="nav-link" onClick={closeMenu}>Guide</Link>
            </li>
            
            <li className="nav-item">
              <Link to="/about-us" className="nav-link" onClick={closeMenu}>About Us</Link>
            </li>
          </ul>
          <button className="nav-button" onClick={() => window.location.href = 'https://apoorv.iiitkottayam.ac.in'}>apoorv</button>
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;