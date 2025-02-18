import React from 'react';
import './Hero.css';
import { BsStars } from "react-icons/bs";

const Hero = () => {
  return (
    <div className="hero-section-main">
      <div className="cone-light"></div>
      
      <div className='hero-section-main'>
        <div className="hero-content">
          <div className="hero-badge">
            <BsStars color='white'/>
            <p className='hero-badge-text'>TRANSFORM YOUR DIGITAL PRESENCE WITH AI AGENTS</p>
            
          </div>

         <div className='torch-container-main'>
         {/* <h1 className='company-name'>ad<span className='company-name-span'>Task</span>.ai</h1> */}
          <img src={'/images/brandlogo.png'} alt="logo" className='company-name-img ' />           
                 <div className="hero-text">
                      Stop struggling with marketing decisions. Our AI assistant analyzes your business, creates 
                      personalized strategies, and helps you execute them - all in real-time.
                    </div>
            
                    <button className="start-trial-btn">
                      Start Free Trail
                    </button>
            
                    <div className="trial-text">
                      Try before AI free for 30 days
                    </div>
         </div>

          <div className="video-container">
            <div className="youtube-icon">
              <img  className='youtube-icon-img'
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png" 
                alt="Youtube Icon" 
              />
            </div>
            <h1 className='video-container-text'>adT<span className='video-container-text-span'>as</span>k.ai</h1>
          </div>
        </div>

        {/* <div className="brand-logo-container">
          <div className="brand-logo">
            <img 
              src="/images/brandlogo.png" 
              alt="Brand Logo" 
              className="brand-logo-img"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero; 