import React from 'react';
import Nav from '../sections/Nav';
import Hero from '../sections/Hero';
import About from '../sections/About';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Nav />
      <Hero />
      <About />
    </div>
  );
};

export default HomePage;