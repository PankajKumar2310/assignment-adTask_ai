import React from 'react';
import './Platforms.css';

const Platforms = () => {
  const platforms = [
    { name: 'wicon', logo: '/images/wicon.png' }, 
    { name: 'Google', logo: '/images/googleicon.png' },
    { name: 'Salesforce', logo: '/images/salesicon.png' },
    { name: 'Amazon', logo: '/images/amazon.png' },
    { name: 'Sony', logo: '/images/soniicon.png' },
    { name: 'Coca Cola', logo: '/images/cocaicon.png' },
    { name: 'Intel', logo: '/images/intelicon.png' },
  ];

  const socialPlatforms = [
    { name: 'Atlassian', icon: '/images/atlassianicon.png' },
    { name: 'TikTok', icon: '/images/tiktokicon.png' },
    { name: 'Meta', icon: '/images/metaicon.png' },
    { name: 'LinkedIn', icon: '/images/linkedinicon.png' },
    { name: 'Amazon', icon: '/images/amazonicon.png' },
    { name: 'Twitter', icon: '/images/twittericon.png' }

  ];

  return (
    <div className="platforms-section">
      <div className="brands-scroll-container">
        <div className="brands-slider">
          {[...platforms, ...platforms].map((platform, index) => (
            <div key={index} className="brand-logo">
              <img src={platform.logo} alt={platform.name} />
            </div>
          ))}
        </div>
      </div>

      <div className="platforms-container">
        <h3 className="platforms-title">Adtask AI works with :</h3>
        <div className="social-platforms">
          {socialPlatforms.map((platform, index) => (
            <div key={index} className="platform-icon">
              <img className='platform-icon-img' src={platform.icon} alt={platform.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Platforms; 