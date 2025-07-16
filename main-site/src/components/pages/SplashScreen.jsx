import React, { useState, useEffect } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoaded(true), 800);
    
    // Auto-hide after animation
    setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onComplete?.(), 400);
    }, 2200);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-gray-50 flex items-center justify-center z-50 transition-all duration-500">
      <div className="text-center">
        {/* Clean Logo */}
        <div className={`mb-6 transition-all duration-700 ${isLoaded ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
          <div className="w-16 h-16 mx-auto bg-slate-800 rounded-lg flex items-center justify-center shadow-sm mb-4">
            <span className="text-xl font-semibold text-white tracking-wider">ST</span>
          </div>
        </div>

        {/* Name with fade-in */}
        <div className={`transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <h1 className="text-xl font-bold text-gray-800 mb-1 tracking-wide">
            Sandith Thenuwara
          </h1>
          <p className="text-sm text-gray-600 font-medium tracking-wide">
            Technical Business Strategist
          </p>
        </div>

        {/* Subtle loading indicator */}
        <div className={`mt-8 transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-32 h-0.5 bg-gray-200 mx-auto rounded-full overflow-hidden">
            <div className="h-full bg-slate-600 rounded-full animate-pulse" style={{ width: '60%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;