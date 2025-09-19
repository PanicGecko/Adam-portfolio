import React from 'react';

const Navigation = () => {
  const handleChatClick = () => {
    // Scroll to chat section
    const chatSection = document.getElementById('chat-section');
    if (chatSection) {
      chatSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation">
      <div className="nav-content">
        <a href="#" className="logo">
          <div style={{ 
            width: '24px', 
            height: '24px', 
            background: '#2D2D2D',
            borderRadius: '50%',
            display: 'inline-block',
            marginRight: '8px',
            verticalAlign: 'middle'
          }}></div>
          Adam Chao
        </a>
        <div className="nav-buttons">
          <button 
          onClick={() => {
            window.open(
              "https://www.linkedin.com/in/adam-chao",
              '_blank' // <- opens the link in a new tab or window.
            );
          }}
            className="social-button linkedin-button"
            aria-label="LinkedIn Profile"
          >
            LinkedIn
          </button>
          <button
          onClick={() => {
            window.open(
              "https://github.com/PanicGecko",
              '_blank' // <- opens the link in a new tab or window.
            );
          }} 
            className="social-button github-button"
            aria-label="GitHub Profile"
          >
            GitHub
          </button>
          <button 
            className="cta-button" 
            onClick={handleChatClick}
            aria-label="Chat with AI agent"
          >
            Chat with AI Agent
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

