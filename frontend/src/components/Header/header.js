import React, { useState } from 'react';
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
            <a href="/" className="logo">
              <img src='/images/headerlogo.png' className='header-logo' alt="headerLogo"/>
            </a>
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
            <a href="/contact" className="nav-item">
              Contact Us
            </a>
            <div className="auth-buttons">
              <a href="/login" className="btn btn-login">
                Login
              </a>
              <a href="/schedule" className="btn btn-schedule">
                <span className="schedule-text">Schedule Call</span>
                <FontAwesomeIcon icon={faPhone} className="call-icon" />
              </a>
              <a href="/schedule" className="phone-button">
                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
              </a>
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
              <a href="/contact" className="nav-item">
                Contact Us
              </a>
              <div className="mobile-auth-buttons">
                <a href="/login" className="btn btn-login">
                  Log in
                </a>
                <a href="/schedule" className="btn btn-schedule">
                  <span className="schedule-text">Schedule Call</span>
                  <FontAwesomeIcon icon={faPhone} className="call-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;