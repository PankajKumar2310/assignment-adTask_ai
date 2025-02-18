import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="spotlight-glow"></div>
      <div className="contact-container">
      <div className='features-title-container'>
          <p className='c-title'>CONTACT</p>
        </div>
        <div className="contact-content">
          {/* Left Side */}
          <div className="contact-info">
            <h2 className="contact-title">
              Let's Connect
              <span className="contact-subtitle">Get in Touch</span>
              <div className="contact-title-glow-container">
                <div className="contact-title-outer-glow"></div>
                <div className="contact-title-inner-glow"></div>
              </div>
            </h2>
            <p className="contact-description">
              Ready to take your digital presence to the next level? We're here to help!
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <MdOutlineEmail />
                <a href="mailto:contact@adtask.ai">contact@adtask.ai</a>
              </div>
              <div className="contact-item">
                <FaPhoneAlt />
                <a href="tel:(969)819-8051">(969) 819-8051</a>
              </div>
              <div className="contact-item">
                <MdLocationOn />
                <span>San Francisco Bay Area</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="contact-form">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
              </div>

            <div className='submit-button-container'>
              <button type="submit" className="submit-button">Submit</button>
            </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 