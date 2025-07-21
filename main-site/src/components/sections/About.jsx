import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const slides = [
    {
      id: 'problem-solver',
      title: 'Problem Solver',
      subtitle: 'I see what others miss',
      visual: '🎯',
      content: 'While others build apps, I solve real problems. Healthcare needed connection, advertising needed value.',
      color: '#394a43',
      bgPattern: 'dots'
    },
    {
      id: 'builder',
      title: 'Strategic Builder',
      subtitle: 'Code with purpose',
      visual: '⚡',
      content: 'DoctorAid • Villa QR Systems • Unskiip. Every line of code serves a bigger vision.',
      color: '#2563eb',
      bgPattern: 'waves'
    },
    {
      id: 'leader',
      title: 'Tech Leader',
      subtitle: 'People follow vision',
      visual: '🚀',
      content: 'From IEEE projects to business operations. I make things happen through people.',
      color: '#dc2626',
      bgPattern: 'grid'
    }
  ];

  const techItems = [
    'React', 'Node.js', 'Spring Boot', 'MongoDB', 'System Design', 
    'Strategy', 'Leadership', 'Product Thinking', 'User Experience'
  ];

  // Auto-play functionality
  useEffect(() => {
    if (autoPlay && isVisible) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % slides.length);
      }, 4000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [autoPlay, isVisible, slides.length]);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getBackgroundPattern = (pattern) => {
    switch (pattern) {
      case 'dots':
        return `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='3' cy='3' r='3'/%3E%3C/g%3E%3C/svg%3E")`;
      case 'waves':
        return `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zm10 0c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`;
      case 'grid':
        return `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M0 0h40v40H0V0zm10 10h20v20H10V10z'/%3E%3C/g%3E%3C/svg%3E")`;
      default:
        return '';
    }
  };

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 bg-gray-50 relative overflow-hidden">
      
      {/* Floating elements with parallax */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute top-20 left-20 w-64 h-64 rounded-full opacity-[0.03]"
          style={{ 
            backgroundColor: '#394a43',
            transform: `translate(${mousePos.x}px, ${mousePos.y}px)`
          }} 
        />
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-[0.02]"
          style={{ 
            backgroundColor: '#394a43',
            transform: `translate(${-mousePos.x}px, ${-mousePos.y}px)`
          }} 
        />
      </div>

      <div className="container mx-auto max-w-7xl relative">
        
        {/* Main Slider Container */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About Me
            </h2>
            <div className="flex justify-center items-center space-x-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index);
                    setAutoPlay(false);
                    setTimeout(() => setAutoPlay(true), 5000);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'scale-125' : 'hover:scale-110'
                  }`}
                  style={{ 
                    backgroundColor: currentSlide === index ? '#394a43' : '#cbd5e1'
                  }}
                />
              ))}
            </div>
          </div>

          {/* Slider */}
          <div 
            className="relative h-96 rounded-3xl overflow-hidden shadow-2xl"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-all duration-700 ${
                  currentSlide === index ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                }`}
                style={{ 
                  backgroundColor: slide.color,
                  backgroundImage: getBackgroundPattern(slide.bgPattern)
                }}
              >
                <div className="h-full flex items-center justify-between px-16">
                  
                  {/* Left Content */}
                  <div className="text-white max-w-lg">
                    <div className="text-8xl mb-4">{slide.visual}</div>
                    <h3 className="text-4xl font-bold mb-2">{slide.title}</h3>
                    <p className="text-xl opacity-90 mb-6">{slide.subtitle}</p>
                    <p className="text-lg leading-relaxed opacity-80">{slide.content}</p>
                  </div>

                  {/* Right Visual Element */}
                  <div className="hidden md:block">
                    <div 
                      className="w-64 h-64 rounded-full bg-white bg-opacity-10 flex items-center justify-center transform hover:scale-110 transition-transform duration-300"
                      style={{
                        transform: `rotate(${currentSlide * 120}deg) scale(${currentSlide === index ? 1 : 0.8})`
                      }}
                    >
                      <div className="text-9xl text-white opacity-50">
                        {slide.visual}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Arrows */}
            <button
              onClick={() => {
                setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
            >
              ←
            </button>
            <button
              onClick={() => {
                setCurrentSlide(prev => (prev + 1) % slides.length);
                setAutoPlay(false);
                setTimeout(() => setAutoPlay(true), 5000);
              }}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 hover:scale-110"
            >
              →
            </button>
          </div>
        </div>

        {/* Flowing Tech Stack */}
        <div className={`mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">My Stack</h3>
          <div className="relative overflow-hidden h-20">
            <div 
              className="flex space-x-6 animate-flow"
              style={{
                animation: 'flow 20s linear infinite'
              }}
            >
              {[...techItems, ...techItems].map((tech, index) => (
                <span
                  key={index}
                  className="flex-shrink-0 px-6 py-3 rounded-full font-semibold text-lg text-white whitespace-nowrap hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: '#394a43' }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Quote with Typewriter Effect */}
        <div className={`text-center transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
            "Code is just the tool.
            <br />
            <span style={{ color: '#394a43' }}>Vision is what matters."</span>
          </blockquote>
          
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 rounded-full font-semibold text-lg text-white hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{ backgroundColor: '#394a43' }}
            >
              Let's Build Something Amazing
            </button>
          </div>
        </div>

      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes flow {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default About;