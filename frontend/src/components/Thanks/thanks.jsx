import React from 'react';
import './thanks.css';

const Thanks = () => {
  return (
    <section className="hero-section-main">
      <div className="hero-container">
        <div className="hero-logo">
        <img src={'/images/adTaskicon.png'} alt="logo" />
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Are you ready to boost
            <span className="hero-subtitle">your Digital Presence?</span>
          </h1>

          <div className="hero-buttons">
          <button className="start-trial-btn">
                    Start Free Trail
                  </button>
            <button className="hero-button secondary">Schedule a Call</button>
          </div>
        </div>

        <div className="hero-glow"></div>
      </div>
    </section>
  );
};

export default Thanks; 