import React, { useState, useEffect, useRef } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            About
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            Strategic<br />
            <span className="font-medium" style={{ color: '#394a43' }}>Execution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I turn complex business challenges into elegant technical solutions. Currently developing platforms 
            that solve real problems—from healthcare accessibility to advertising transparency—while leading 
            teams and learning what it takes to build products people actually need.
          </p>
        </div>

        {/* What I'm Building Section */}
        <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-8">What I'm Building</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { number: 'DoctorAid', label: 'Healthcare Platform', desc: 'Connecting patients & doctors' },
                { number: 'Unskiip', label: 'Ad Platform', desc: 'Solving 97% skip crisis' },
                { number: 'Villa QR', label: 'Tourism Tech', desc: 'Digital villa presence' },
                { number: '2nd Year', label: 'CS Student', desc: 'University of Westminster' }
              ].map((metric, index) => (
                <div key={metric.label} className="text-center">
                  <div className="text-3xl font-bold text-[#394a43] mb-2">{metric.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{metric.label}</div>
                  <div className="text-sm text-gray-600">{metric.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center px-8 py-4 bg-[#394a43] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group"
            >
              Let's Build Something Together
              <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className={`text-center mt-32 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <blockquote className="text-3xl md:text-4xl font-light text-gray-900 leading-tight max-w-4xl mx-auto">
            "Great solutions come from understanding problems deeply—
            <br />
            <span className="font-medium" style={{ color: '#394a43' }}>and I'm just getting started."</span>
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default About;