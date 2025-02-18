import React from 'react';
import './Features.css';
import PieChart3DSmall from './PieChart3DSmall';
import BarGraph3DSmall from './BarGraph3DSmall';
import { motion } from "framer-motion";
// import { Cog } from 'lucide-react';
// import SettingIcon from './SettingIcon';

const SettingsIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="48"
    height="48"
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="#7586B4" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const Features = () => {
  return (
    <section className="features-section">
      <div className="features-container">
        <div className='features-title-container'>
          <p className='features-title'>FEATURES</p>
        </div>
        <div className='features-description-container'>
          <div className="features-glow-container">
            <div className="features-outer-glow"></div>
            <div className="features-inner-glow"></div>
          </div>
          
          <div className='features-description-container-left'>
            <img src={'/images/line.png'} alt='feature-icon' className='line-image' />
          </div>
          <div className='features-description-container-center'>
            <p className='features-description-container-center-title'>Feature packed to make</p>
            <p className='features-description-container-center-description'>Digital marketing easier and affordable.</p>
            <p className='tagline-main'>Experience Intelligent Features to optimize your marketing efforts.</p>
          </div>
          <div className='features-description-container-right'>
            <img src={'/images/line.png'} alt='feature-icon' className='line-image-2' />
          </div>
        </div>
       
     

        <div className="features-grid">
          <div className="feature-card reach-target-card">
            <div className="glow-container">
              <div className="outer-glow"></div>
              <div className="inner-glow"></div>
            </div>
            <div className="radar-animation-container">
              {/* Outer Circle */}
              <div className="radar-outer-circle">
                {/* Middle Circle */}
                <div className="radar-middle-circle" />
                {/* Inner Circle */}
                <div className="radar-inner-circle" />
                
                {/* Animated Person Icons */}
                <div className="person-icon icon1">
                  <img src="/images/person-icon.png" alt="" className="search-icon" />
                </div>
                <div className="person-icon icon2">
                  <img src="/images/person-icon.png" alt="" className="search-icon" />
                </div>
                <div className="person-icon icon3">
                  <img src="/images/person-icon.png" alt="" className="search-icon" />
                </div>
                <div className="person-icon icon4">
                  <img src="/images/person-icon.png" alt="" className="search-icon" />
                </div>

                {/* Radar Sweep Animation */}
                <div className="radar-sweep" />
              </div>
            </div>
            
            <div className="feature-content">
              <h3>Reach Target Audience</h3>
              <p>AI-powered dynamic segmentation ensures your ads reach the right audience, optimizing your marketing spend.</p>
            </div>
          </div>

         <div className="feature-card-container-small">
         <div className="feature-card small">
            <div className="glow-container">
              <div className="outer-glow"></div>
              <div className="inner-glow"></div>
            </div>
            <div className="card-content">
              <div className="setting-icon-wrapper">
                <motion.div
                  animate={{ 
                    rotate: 360 
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="setting-icon"
                >
                  <SettingsIcon />
                </motion.div>
              </div>
              <div className="text-content">
                <h3>Marketing made Easier</h3>
                <p>Save time and simplify campaign management</p>
              </div>
            </div>
          </div>
          <div className="feature-card small">
            <div className="glow-container">
              <div className="outer-glow"></div>
              <div className="inner-glow"></div>
            </div>
            <div className="card-content">
              <div className="card-icon-container">
               
                <BarGraph3DSmall />
                <PieChart3DSmall />
              </div>
              <div className="text-content">
                <h3>Smart Marketing Insights</h3>
                <p>Unlock actionable data to guide every decision. Stay ahead of trends.</p>
              </div>
            </div>
          </div>

         </div>

          <div className="feature-card large">
            <div className="glow-container">
              <div className="outer-glow"></div>
              <div className="inner-glow"></div>
            </div>
            <div className="flash-background">
              <motion.img 
                src="/images/flash-icon.png"
                alt="flash"
                className="flash-icon-bg"
                animate={{ 
                  scale: [0.9, 1.1, 0.9],
                  opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
            <div className="card-content">
              <div className="text-content">
                <h3 className='card-4-title'>Pankaj Insights</h3>
                <p className='card-4-description'>Track performance in real-time, see the big picture trends, make confident moves with powerful analytics.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features; 