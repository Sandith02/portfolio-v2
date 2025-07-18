import React from 'react';
import Nav from '../sections/Nav';
import Hero from '../sections/Hero';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Nav />
      <Hero />
    </div>
  );
};

export default HomePage;