import React, { useState } from 'react';

const About = () => {
  const [activeStory, setActiveStory] = useState(0);

  const stories = [
    {
      title: "The Problem I Saw",
      content: "While everyone was building apps, I noticed something: we were solving the wrong problems. Healthcare needed connection, not just digitization. Advertising needed value exchange, not interruption.",
      highlight: "Most developers build features. I question the entire premise."
    },
    {
      title: "The Breakthrough Moment", 
      content: "Leading DoctorAid taught me that the best products don't just work—they fundamentally change how people think about a problem. That's when I realized I wasn't just a developer anymore.",
      highlight: "I stopped coding solutions and started designing experiences."
    },
    {
      title: "The Strategic Shift",
      content: "At IEEE, I learned that influence comes from understanding systems, not just code. The most impactful decisions happen in the room where strategy meets execution.",
      highlight: "I became the bridge between what's possible and what's profitable."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        
        {/* Unconventional Header */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Plot Twist:
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              I started as a developer who could code anything.
              <br />
              <span className="font-semibold" style={{ color: '#394a43' }}>
                Now I'm the person who decides what's worth coding.
              </span>
            </p>
          </div>
        </div>

        {/* Interactive Story Timeline */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            {/* Story Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex bg-gray-100 rounded-full p-2">
                {stories.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveStory(index)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                      activeStory === index 
                        ? 'text-white shadow-lg' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    style={activeStory === index ? { backgroundColor: '#394a43' } : {}}
                  >
                    Chapter {index + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Story */}
            <div className="text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {stories[activeStory].title}
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
                {stories[activeStory].content}
              </p>
              <div className="inline-block bg-gradient-to-r from-gray-50 to-gray-100 px-8 py-4 rounded-2xl">
                <p className="text-lg font-semibold" style={{ color: '#394a43' }}>
                  {stories[activeStory].highlight}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* "Day in the Life" Section */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
            While others are still asking "How?"
            <br />
            <span style={{ color: '#394a43' }}>I'm already solving "Why?"</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Left: Traditional Approach */}
            <div>
              <h4 className="text-2xl font-bold text-gray-400 mb-6">Traditional Developer</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Builds what's requested</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Focuses on clean code</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Delivers features on time</span>
                </div>
                <div className="flex items-center space-x-4 text-gray-400">
                  <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                  <span>Waits for requirements</span>
                </div>
              </div>
            </div>

            {/* Right: My Approach */}
            <div>
              <h4 className="text-2xl font-bold mb-6" style={{ color: '#394a43' }}>Strategic Developer</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#394a43' }}></div>
                  <span className="font-medium">Questions what should be built</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#394a43' }}></div>
                  <span className="font-medium">Designs business impact</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#394a43' }}></div>
                  <span className="font-medium">Creates market opportunities</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#394a43' }}></div>
                  <span className="font-medium">Shapes the requirements</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Reality Check Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-6">
              Here's the thing about strategic thinking:
            </h3>
            <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
              Anyone can learn to code. Not everyone can see what's missing in the market, 
              design solutions that users didn't know they needed, and convince teams to build them.
            </p>
            <div className="inline-block bg-white text-gray-900 px-8 py-4 rounded-2xl">
              <p className="text-lg font-semibold">
                That's exactly what companies need in 2025.
              </p>
            </div>
            
            <div className="mt-10">
              <button 
                className="bg-white text-gray-900 px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Let's Build the Future Together
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;