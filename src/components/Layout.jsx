import React from 'react';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import ChatPlaceholder from './ChatPlaceholder';

const Layout = () => {
  return (
    <div className="app">
      <Navigation />
      <HeroSection />
      <ChatPlaceholder />
    </div>
  );
};

export default Layout;

