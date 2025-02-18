import React from 'react';
import './Footer.css';
import { MdOutlineEmail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <a href="/" className="footer-logo">
            <img src={'/images/footericon.png'} alt="logo" />
          </a>
          <div className="footer-contact">
            <div className="footer-contact-email">
              <MdOutlineEmail />
              <a href="mailto:contact@adtask.ai" className="contact-link">
                contact@adtask.ai
              </a>
            </div>
            <div className="footer-contact-location">
              <CiLocationOn />
              <a href="https://www.google.com/maps/place/San+Francisco,+CA/@37.774929,-122.419416,12z/data=!3m1!4b1!4m6!3m5!1s0x8085871576337233:0xf876ccec6b60b48!8m2!3d37.774929!4d-122.419416!16z%3Fhl%3Den" className="contact-link" target="_blank" rel="noopener noreferrer">
                San Francisco Bay Area
              </a>
            </div>
          </div>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Utilities</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/tools">Tools</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Socials</h3>
            <ul>
              <li><a href="https://twitter.com">X</a></li>
              <li><a href="https://linkedin.com">LinkedIn</a></li>
              <li><a href="https://instagram.com">Instagram</a></li>
              <li><a href="https://facebook.com">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copyright">
        All rights reserved © 2025 adTask
      </div>
    </footer>
  );
};

export default Footer;
