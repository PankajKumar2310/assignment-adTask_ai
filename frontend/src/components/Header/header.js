import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from "react-icons/fi";
import './header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="header-wrapper">
      <header className="header">
        <div className="header-container">
          {/* Logo and Hamburger Section */}
          <div className="header-left">
            <Link to="/" className="logo">
              <img src='/images/headerlogo.png' className='header-logo' alt="headerLogo"/>
            </Link>
            {/* Mobile Hamburger Button */}
            <button className="hamburger-menu" onClick={toggleMenu}>
              {isMenuOpen ? (
                <FiX className="menu-icon" />
              ) : (
                <FiMenu className="menu-icon" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-menu desktop-nav">
            <div className="nav-item dropdown">
              <span>Products</span>
              <i className="dropdown-icon">▼</i>
            </div>
            <div className="nav-item dropdown">
              <span>Tools</span>
              <i className="dropdown-icon">▼</i>
            </div>
            <Link to="/contact" className="nav-item">
              Contact Us
            </Link>
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-login">
                Login
              </Link>
              <Link to="/schedule" className="btn btn-schedule">
                <span className="schedule-text">Schedule Call</span>
                <FontAwesomeIcon icon={faPhone} className="call-icon" />
              </Link>
              <Link to="/schedule" className="phone-button">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              </Link>
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
            <div className="mobile-nav-content">
              <div className="nav-item dropdown">
                <span>Products</span>
                <i className="dropdown-icon">▼</i>
              </div>
              <div className="nav-item dropdown">
                <span>Tools</span>
                <i className="dropdown-icon">▼</i>
              </div>
              <Link to="/contact" className="nav-item">
                Contact Us
              </Link>
              <div className="mobile-auth-buttons">
                <Link to="/login" className="btn btn-login">
                  Log in
                </Link>
                <Link to="/schedule" className="btn btn-schedule">
                  <span className="schedule-text">Schedule Call</span>
                  <FontAwesomeIcon icon={faPhone} className="call-icon" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header; 