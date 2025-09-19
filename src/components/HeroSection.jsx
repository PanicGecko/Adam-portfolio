import React, { useEffect, useRef } from 'react';
import headshotImage from '../assets/headshot.jpg';

const HeroSection = () => {
  const heroSectionRef = useRef(null);
  const heroContentRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const heroSection = heroSectionRef.current;
      const heroContent = heroContentRef.current;
      
      if (heroSection && heroContent) {
        // Parallax effect: text moves much faster than background
        const rate = scrolled * -0.8;
        heroContent.style.transform = `translateY(${rate}px)`;
        
        // Background moves slower
        const backgroundRate = scrolled * -0.2;
        heroSection.style.backgroundPosition = `center calc(60% + ${backgroundRate}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToNext = () => {
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroSectionRef}
      className="hero-section"
      style={{
        backgroundImage: `url(${headshotImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 60%',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div ref={heroContentRef} className="hero-content">
        {/* Left Panel - 60% width */}
        <div className="left-panel">
          <div className="container">
            <h1 className="hero-text">Hello</h1>
            <p className="subtitle-text">
              — I'm Adam Chao, an AI Engineer & Multi-Agent Systems Architect
            </p>
            <p className="chat-hint-text">
              Scroll down to chat with my AI agent
            </p>
            
            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">AI</span>
                <span className="stat-label">Research & Development</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Systems</span>
                <span className="stat-label">Architecture & Scaling</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Leadership</span>
                <span className="stat-label">Technical Teams</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - 40% width - now just empty space */}
        <div className="right-panel">
          {/* Empty space to maintain layout proportions */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator" onClick={scrollToNext}>
        Chat with my AI agent ↓
      </div>
    </section>
  );
};

export default HeroSection;
