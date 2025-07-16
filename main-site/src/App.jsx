import React, { useState } from 'react';
import SplashScreen from './components/pages/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="min-h-screen bg-white font-raleway">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      
      {!showSplash && (
        <div className="animate-fade-in">
          {/* Your main portfolio content goes here */}
          <div className="container mx-auto px-6 py-16">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">
                Technical Business Strategist
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                I bridge the gap between complex technical solutions and real business impact.
              </p>
              <div className="text-lg text-gray-700">
                <p className="mb-4">
                  From managing villa operations to designing scalable SaaS platforms, 
                  I solve problems others don't even see.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .animate-fade-in {
          animation: fadeInUp 0.8s ease-out;
        }
        
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
      `}</style>
    </div>
  );
}

export default App;