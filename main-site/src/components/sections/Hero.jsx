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
        <div className="absolute inset-0 animate-pulse-slow" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.03;
          }
          50% {
            opacity: 0.06;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
      `}</style>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-16 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Main Hero Content */}
          <div className="mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 tracking-tight leading-tight animate-fade-in-up">
              Strategic Developer, Thinker
              <span className="block text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>& Solution Architect</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8 max-w-3xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: '0.6s' }}>
              I don't just code - I solve complex problems by bridging technical execution with strategic thinking and user-centered design.
            </p>
            
            <div className="text-sm sm:text-base md:text-lg text-gray-200 max-w-4xl mx-auto animate-fade-in-up px-2" style={{ animationDelay: '0.9s' }}>
              <p className="mb-4 sm:mb-6">
                From architecting healthcare platforms to designing revolutionary advertising ecosystems, I transform market opportunities into scalable solutions that drive real business impact.
              </p>
            </div>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 max-w-3xl mx-auto px-2">
            <div className="text-center transform hover:scale-105 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-3 sm:p-4 rounded-xl animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Strategy</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">+ Technical Execution</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-3 sm:p-4 rounded-xl animate-fade-in-up" style={{ animationDelay: '1.4s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Design</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">+ Development</div>
            </div>
            <div className="text-center transform hover:scale-105 transition-all duration-300 hover:bg-white hover:bg-opacity-10 p-3 sm:p-4 rounded-xl animate-fade-in-up" style={{ animationDelay: '1.6s' }}>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">Leadership</div>
              <div className="text-xs sm:text-sm text-gray-300 font-medium">+ Innovation</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center animate-fade-in-up px-4" style={{ animationDelay: '1.8s' }}>
            <button
              onClick={handleContactClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full text-base sm:text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg transform hover:shadow-2xl"
            >
              Let's Work Together
            </button>
            
            <button
              onClick={handleProjectsClick}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full text-base sm:text-lg font-medium hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 transform"
            >
              View My Work
            </button>
          </div>

        </div>
      </div>

      {/* Scroll Indicator - Hidden on small screens, visible on larger screens */}
      <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 text-gray-300">
          <span className="text-xs font-medium">Scroll to explore</span>
          <div className="w-0.5 h-6 sm:h-8 bg-gray-300 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;