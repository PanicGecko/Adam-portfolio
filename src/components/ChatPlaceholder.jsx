import React from 'react';

const ChatPlaceholder = () => {
  return (
    <section id="chat-section" className="chat-section">
        <div className="chat-header">
          <h2 className="chat-title">Let's Chat!</h2>
          <p className="chat-subtitle">Ask me anything about my experience, projects, or career journey</p>
        </div>
      <div className="chat-placeholder">
        <iframe
          src="https://panicgecko-personal-career-agent.hf.space"
          frameBorder="0"
          width="100%"
          height="100%"
          className="chat-iframe"
          title="Personal Career Agent Chat"
        />
      </div>
    </section>
  );
};

export default ChatPlaceholder;

