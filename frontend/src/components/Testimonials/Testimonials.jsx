import React from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote: "We used to struggle with consistent branding across platforms. adTask's unified dashboard ensures our message stays on point every single time.",
      author: "Brand Director at a Tech Startup"
    },
    {
      id: 2,
      quote: "adTask turned our complicated campaigns into a breeze. The built-in AI agents helped us reach exactly the customers we wanted —without guesswork!",
      author: "Head of Growth at Tech Startup"
    },
    {
      id: 3,
      quote: "We've tried other platforms before, but none delivered the depth of insights adTask offers. Our conversion rates are up by 35% since we signed on!",
      author: "Ecommerce Manager at Home Decor Brand"
    },
    {
      id: 4,
      quote: "What impressed me most was the real-time optimization. adTask's intelligent agents just keep refining our campaigns—our ad spend has never worked harder!",
      author: "Digital Strategist at SaaS Company"
    },
    {
      id: 5,
      quote: "adTask made everything from campaign setup to performance tracking simple. Our team can now focus on creating great content rather than crunching numbers.",
      author: "Social Media Lead at Non-Profit Organization"
    },
    {
      id: 6,
      quote: "We've seen a 50% boost in engagement across our social channels since switching to adTask. Its AI-driven insights are game-changing!",
      author: "Social Media Manager at a Fitness Brand"
    }
  ];

  return (
    <section className="testimonials-section">
      <div className='features-title-container'>
          <p className='features-title'>TESTIMONIALS</p>
        </div>
        <div className='features-description-container'>
          <div className='features-description-container-left'>
            <img src={'/images/line.png'} alt='feature-icon' className='line-image' />
          </div>
          <div className='features-description-container-center'>
            <p className='features-description-container-center-title'>Trusted by</p>
            <div className="testi-text-container">
              <div className="testi-text-glow-container">
                <div className="testi-text-outer-glow"></div>
                <div className="testi-text-inner-glow"></div>
              </div>
              <p className="testi-text">Trusted by Satisfied Clients</p>
            </div>
          </div>
          <div className='features-description-container-right'>
            <img src={'/images/line.png'} alt='feature-icon' className='line-image-2' />
          </div>
        </div>
      <div className="testimonials-container">
        {/* <span className="testimonials-label">TESTIMONIALS</span>
        
        <div className="testimonials-header">
          <h2 className="testimonials-title">Trusted by</h2>
          <h3 className="testimonials-subtitle">satisfied clients</h3>
          <p className="testimonials-description">
            Discover how we've driven growth and innovation.
          </p>
        </div> */}

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-content">
                <p className="quote-text">"{testimonial.quote}"</p>
                <p className="quote-author">—{testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 