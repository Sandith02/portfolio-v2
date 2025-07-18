import React, { useState } from 'react';
import SplashScreen from './components/pages/SplashScreen';
import HomePage from './components/pages/HomePage';

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
          <HomePage />
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