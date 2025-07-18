import React, { useState, useEffect, useRef } from 'react';

const SplashScreen = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [loadingStep, setLoadingStep] = useState('Initializing...');
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const splashRef = useRef(null);
  const contentRef = useRef(null);
  const logoRef = useRef(null);

  // Professional loading steps
  const loadingSteps = [
    'Initializing application...',
    'Loading core modules...',
    'Establishing connections...',
    'Preparing workspace...',
    'Finalizing setup...',
    'Ready to launch'
  ];

  useEffect(() => {
    let progressInterval;
    let stepIndex = 0;

    const startLoading = () => {
      progressInterval = setInterval(() => {
        setProgress(prev => {
          const newProgress = Math.min(prev + Math.random() * 3 + 1, 100);
          
          // Update loading step based on progress
          const stepProgress = Math.floor((newProgress / 100) * loadingSteps.length);
          if (stepProgress !== stepIndex && stepProgress < loadingSteps.length) {
            stepIndex = stepProgress;
            setLoadingStep(loadingSteps[stepProgress]);
          }
          
          if (newProgress >= 100) {
            clearInterval(progressInterval);
            setLoadingStep('Complete');
            
            // Clean exit after completion
            setTimeout(() => {
              setIsVisible(false);
              setTimeout(() => onComplete?.(), 200);
            }, 800);
          }
          
          return newProgress;
        });
      }, 150);
    };

    // Start loading after brief delay
    const initialDelay = setTimeout(startLoading, 300);

    return () => {
      clearTimeout(initialDelay);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = () => {
    setImageLoaded(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      ref={splashRef}
      className="fixed inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-100 z-50"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Corner branding */}
      {/* <div className="absolute top-6 right-6">
        <div className="flex items-center space-x-2 text-slate-400">
          <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-pulse" />
          <span className="text-xs font-medium">Hey</span>
        </div>
      </div> */}

      {/* Main content centered */}
      <div className="flex items-center justify-center min-h-screen">
        <div ref={contentRef} className="text-center max-w-md mx-auto px-8">
          
          {/* Professional Logo/Avatar Section */}
          <div ref={logoRef} className="mb-8">
            <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 shadow-lg border border-slate-200/50 relative group">
              <img 
                src="/about-me.png" 
                alt="Sandith Sithmaka Thenuwara"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                onLoad={handleImageLoad}
                onError={handleImageError}
                style={{ display: imageLoaded ? 'block' : 'none' }}
              />
              
              {/* Professional fallback with better styling */}
              <div 
                className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold bg-gradient-to-br from-slate-600 to-slate-700"
                style={{ display: imageLoaded ? 'none' : 'flex' }}
              >
                ST
              </div>
            </div>
          </div>

          {/* Professional Header */}
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-800 mb-2 tracking-tight">
              Sandith Sithmaka Thenuwara
            </h1>
            <div className="space-y-1">
              <p className="text-sm font-medium text-slate-600">
                Full Stack Developer • Business Analyst • Product Owner
              </p>
              <p className="text-xs text-slate-500">
                Enthusiastic Computer Science student with a passion for development and management.
              </p>
            </div>
          </div>

          {/* Professional Progress Section */}
          <div className="mb-8">
            {/* Progress Bar */}
            <div className="w-64 mx-auto mb-4">
              <div className="bg-slate-200 rounded-full h-1.5 overflow-hidden shadow-inner">
                <div 
                  className="h-1.5 rounded-full transition-all duration-500 ease-out bg-gradient-to-r from-slate-600 to-slate-500 shadow-sm"
                  style={{ width: `${Math.min(progress, 100)}%` }}
                />
              </div>
            </div>
            
            {/* Loading Status */}
            <div className="space-y-2">
              <p className="text-sm font-medium text-slate-600">
                {loadingStep}
              </p>
              {/* <p className="text-xs text-slate-400 font-mono">
                {Math.round(progress)}% Complete
              </p> */}
            </div>
          </div>
        </div>
      </div>

      {/* Professional Footer - properly positioned at bottom */}
      <div className="absolute bottom-8 left-0 right-0">
        <div className="text-center space-y-1">
          <p className="text-xs text-slate-400 font-medium">
            © 2025 Sandith Sithmaka Thenuwara
          </p>
          
        </div>
      </div>

    </div>
  );
};

export default SplashScreen;