import React from 'react';
import Nav from '../sections/Nav';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Experience from '../sections/Experience';
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Experience />
    </div>
  );
};

export default HomePage;