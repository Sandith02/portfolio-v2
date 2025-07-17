import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const splashRef = useRef(null);
  const contentRef = useRef(null);
  const profileRef = useRef(null);
  const nameRef = useRef(null);
  const titleRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(contentRef.current, { opacity: 0, scale: 0.9 });
    gsap.set(profileRef.current, { opacity: 0, scale: 0.8, rotationY: 180 });
    gsap.set(nameRef.current, { opacity: 0, y: 30 });
    gsap.set(titleRef.current, { opacity: 0, y: 20 });
    gsap.set(progressRef.current, { opacity: 0, y: 15 });

    // Elegant entrance sequence
    tl.to(contentRef.current, {
      duration: 1.2,
      opacity: 1,
      scale: 1,
      ease: "power3.out",
      delay: 0.2
    })
    .to(profileRef.current, {
      duration: 1.5,
      opacity: 1,
      scale: 1,
      rotationY: 0,
      ease: "back.out(1.2)"
    }, "-=0.8")
    .to(nameRef.current, {
      duration: 1.0,
      opacity: 1,
      y: 0,
      ease: "power3.out"
    }, "-=0.5")
    .to(titleRef.current, {
      duration: 0.8,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    }, "-=0.3")
    .to(progressRef.current, {
      duration: 0.6,
      opacity: 1,
      y: 0,
      ease: "power2.out"
    }, "-=0.2");

    // Sophisticated progress simulation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          
          // Elegant exit sequence
          setTimeout(() => {
            gsap.to(splashRef.current, {
              duration: 1.2,
              opacity: 0,
              scale: 1.05,
              ease: "power3.inOut",
              onComplete: () => {
                setIsVisible(false);
                setTimeout(() => onComplete?.(), 150);
              }
            });
          }, 1000);
          
          return 100;
        }
        return prev + Math.random() * 6 + 2;
      });
    }, 180);

    return () => {
      clearInterval(progressInterval);
      tl.kill();
    };
  }, [onComplete]);

  const handleImageLoad = () => {
    setImageLoaded(true);
    console.log('Image loaded successfully!');
  };

  const handleImageError = (e) => {
    console.error('Image failed to load:', e);
    setImageLoaded(false);
    // Hide the image and show fallback
    e.target.style.display = 'none';
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={splashRef}
      className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 flex items-center justify-center z-50"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl" style={{ backgroundColor: '#394A43' }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl" style={{ backgroundColor: '#4A5B54' }}></div>
      </div>

      <div ref={contentRef} className="relative z-10 text-center max-w-md mx-auto px-8">
        
        {/* Premium Profile Section */}
        <div ref={profileRef} className="mb-12">
          <div className="relative inline-block">
            {/* Main profile image with luxury styling */}
            <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-slate-200 to-slate-300 shadow-2xl border-4 border-white relative">
              
              {/* Image with better error handling */}
              <img 
                src="/about-me.png" 
                alt="Sandith Thenuwara"
                className="w-full h-full object-cover"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
              
              {/* Fallback - always show, but hide when image loads */}
              <div 
                className="absolute inset-0 flex items-center justify-center text-white text-3xl font-light tracking-wider"
                style={{ 
                  display: imageLoaded ? 'none' : 'flex',
                  background: 'linear-gradient(135deg, #394A43 0%, #2d3a35 100%)'
                }}
              >
                ST
              </div>
            </div>
            
            {/* Elegant ring effects */}
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border opacity-60" 
                 style={{ 
                   borderColor: '#394A43',
                   animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                   transform: 'scale(1.2)'
                 }}>
            </div>
            <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full border opacity-30" 
                 style={{ 
                   borderColor: '#596B62',
                   animation: 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite 1s',
                   transform: 'scale(1.4)'
                 }}>
            </div>
          </div>
        </div>

        {/* Sophisticated Name Section */}
        <div ref={nameRef} className="mb-3">
          <h1 className="text-3xl font-light text-slate-900 tracking-wide mb-2">
            Sandith Thenuwara
          </h1>
          <div className="flex items-center justify-center space-x-4 opacity-70">
            <div className="w-12 h-px bg-gradient-to-r from-transparent" style={{ backgroundColor: '#394A43' }}></div>
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#394A43' }}></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent" style={{ backgroundColor: '#394A43' }}></div>
          </div>
        </div>

        {/* Premium Title */}
        <div ref={titleRef} className="mb-16">
          <p className="text-base font-medium text-slate-600 tracking-widest uppercase opacity-90">
            Technical Business Strategist
          </p>
          <p className="text-sm text-slate-500 mt-2 font-light tracking-wide">
            Bridging Innovation & Strategy
          </p>
        </div>

        {/* Elegant Progress Section */}
        <div ref={progressRef}>
          <div className="w-64 mx-auto mb-6">
            <div className="bg-slate-200 rounded-full h-0.5 overflow-hidden">
              <div 
                className="h-0.5 rounded-full transition-all duration-700 ease-out shadow-sm"
                style={{ 
                  width: `${Math.min(progress, 100)}%`,
                  background: `linear-gradient(90deg, #394A43 0%, #4A5B54 50%, #394A43 100%)`
                }}
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <p className="text-xs text-slate-400 font-medium tracking-wider uppercase">
              Initializing Portfolio
            </p>
            <div className="flex justify-center space-x-1">
              {[0, 1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full opacity-60"
                  style={{
                    backgroundColor: '#394A43',
                    animation: `pulse 2s ease-in-out infinite ${i * 0.3}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default SplashScreen;