import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Smart Ad Targeting",
      description: "AI-powered audience segmentation ensures your ads reach the right people, delivering higher ROI and more efficient conversion rates.",
      icon: "/images/1.png"
    },
    {
      id: 2,
      title: "Performance Analytics",
      description: "Access real-time insights and track key metrics across all campaigns in one unified dashboard to quickly refine your strategies.",
      icon: "/images/2.png"
    },
    {
      id: 3,
      title: "SEO Automation",
      description: "Automate keyword research and content optimization suggestions to improve your search engine rankings with less effort.",
      icon: "/images/3.png"
    },
    {
      id: 4,
      title: "Social Media Marketing",
      description: "AI agents craft personalized content schedules, posts, monitor engagement, and refine strategies in real time for maximum impact across all major social platforms.",
      icon: "/images/4.png"
    },
    {
      id: 5,
      title: "Conversion Optimization",
      description: "AI-driven A/B testing and automated tweaks to landing pages and funnels help you consistently improve conversion rates.",
      icon: "/images/5.png"
    },
    {
      id: 6,
      title: "Campaign Automation",
      description: "Centralize and streamline your ad management. Our intelligent engine automatically adjusts bids, budgets, and targeting to maximize results.",
      icon: "/images/6.png"
    }
  ];

  const ServiceCard = ({ service }) => {
    return (
      <div className="service-card-container">
        {/* Glow Effect */}
        <div className="glow-container">
          <div className="outer-glow" />
          <div className="inner-glow" />
        </div>

        {/* Gradient Borders */}
        <div className="gradient-borders">
          <div className="border-top" />
          <div className="border-bottom" />
          <div className="border-left" />
          <div className="border-right" />
        </div>

        {/* Center Border Lines */}
        <div className="center-lines">
          <div className="line-top" />
          <div className="line-bottom" />
          <div className="line-left" />
          <div className="line-right" />
        </div>

        {/* Corner Pins */}
        <div className="corner-pins">
          <div className="pin top-left">
            <div className="pin-inner" />
          </div>
          <div className="pin top-right">
            <div className="pin-inner" />
          </div>
          <div className="pin bottom-left">
            <div className="pin-inner" />
          </div>
          <div className="pin bottom-right">
            <div className="pin-inner" />
          </div>
        </div>

        {/* Content */}
        <div className="service-content">
          <div className="service-icon">
            <img src={service.icon} alt={service.title} />
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="services-section" id="services">
      <div className='features-title-container'>
        <p className='features-title'>SERVICES</p>
      </div>
      <div className="features-description-container">
        {/* Add glow effect container */}
        <div className="bottom-text-glow-container">
          <div className="bottom-text-outer-glow"></div>
          <div className="bottom-text-inner-glow"></div>
        </div>

        <div className='features-description-container-left'>
          <img src={'/images/line.png'} alt='feature-icon' className='line-image' />
        </div>
        <div className='features-description-container-center'>
          <p className='features-description-container-center-title'>Innovative Service</p>
          <p className='features-description-container-center-description'>for Growth</p>
        </div>
        <div className='features-description-container-right'>
          <img src={'/images/line.png'} alt='feature-icon' className='line-image-2' />
        </div>
      </div>
      <div className="services-container">
        {/* <span className="services-label">SERVICES</span>
        <div className="services-header">
          <h2 className="services-title">Innovative Services</h2>
          <h3 className="services-subtitle">for Growth.</h3>
        </div> */}

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <button className="contact-button-services">
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default Services; 