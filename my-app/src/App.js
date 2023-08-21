
import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <Footer />
    </div>
  );
}

export default App;
