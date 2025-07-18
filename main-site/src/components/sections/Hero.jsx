import React from 'react';

const Hero = () => {
  const handleContactClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const contactSection = document.querySelector('#projects');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#394a43' }}>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Hero Content */}
          <div className="mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Strategic Developer, Thinker
              <span className="block text-gray-200">& Solution Architect</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
              I don't just code - I solve complex problems by bridging technical execution with strategic thinking and user-centered design.
            </p>
            
            <div className="text-lg text-gray-200 max-w-4xl mx-auto">
              <p className="mb-6">
                From architecting healthcare platforms to designing revolutionary advertising ecosystems, I transform market opportunities into scalable solutions that drive real business impact.              </p>
            </div>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Strategy</div>
              <div className="text-sm text-gray-300 font-medium">+ Technical Execution</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Design</div>
              <div className="text-sm text-gray-300 font-medium">+ Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">Leadership</div>
              <div className="text-sm text-gray-300 font-medium">+ Innovation</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleContactClick}
              className="px-8 py-4 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Let's Work Together
            </button>
            
            <button
              onClick={handleProjectsClick}
              className="px-8 py-4 border-2 border-white text-white rounded-full text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105"
            >
              View My Work
            </button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Fixed positioning */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-300">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-0.5 h-8 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;