import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      
      {/* Subtle background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full opacity-5" style={{ backgroundColor: '#394a43' }}></div>
        <div className="absolute bottom-32 left-16 w-96 h-96 rounded-full opacity-3" style={{ backgroundColor: '#394a43' }}></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        
        {/* Minimal Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
            Beyond Development
          </h2>
          <p className="text-2xl text-gray-600 max-w-2xl mx-auto font-light">
            Where strategic thinking meets technical execution
          </p>
        </div>

        {/* Story Section - More Visual */}
        <div className="mb-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                I don't just build products—I reimagine possibilities
              </h3>
            </div>
            
            {/* Key Points with Animation */}
            <div className="space-y-12">
              <div className="flex items-center justify-center">
                <div className="max-w-3xl text-center">
                  <div className="text-lg text-gray-700 leading-relaxed space-y-6">
                    <p className="text-xl">
                      From <span className="font-semibold" style={{ color: '#394a43' }}>healthcare platforms</span> that transform patient care 
                      to <span className="font-semibold" style={{ color: '#394a43' }}>advertising ecosystems</span> that reward attention, 
                      I create solutions that matter.
                    </p>
                    <p>
                      As <strong>IEEE Public Visibility Vice Chair</strong>, I've learned that the most impactful innovations 
                      happen when you understand both the technology and the human story behind it.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Capabilities */}
        <div className="mb-24">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-16">
            What I Bring to the Table
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Strategy */}
            <div className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#394a43' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Strategic Vision</h4>
                  <p className="text-gray-600">See opportunities others miss. Design business models that redefine markets.</p>
                </div>
              </div>
            </div>

            {/* Technical */}
            <div className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#394a43' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Technical Execution</h4>
                  <p className="text-gray-600">Turn complex ideas into scalable solutions. MERN stack, React Native, cloud architecture.</p>
                </div>
              </div>
            </div>

            {/* Leadership */}
            <div className="group cursor-pointer">
              <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#394a43' }}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Cross-Functional Leadership</h4>
                  <p className="text-gray-600">Bridge technical teams and business stakeholders. Lead through influence and vision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Numbers - More Dynamic */}
        <div className="text-center">
          <div className="inline-block">
            <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-3xl p-12 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Creating Impact That Matters
              </h3>
              
              <div className="flex flex-wrap justify-center gap-12">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#394a43' }}>Healthcare</div>
                  <p className="text-gray-600">Platform Innovation</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#394a43' }}>IEEE</div>
                  <p className="text-gray-600">Leadership Role</p>
                </div>
                
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#394a43' }}>Strategic</div>
                  <p className="text-gray-600">Business Models</p>
                </div>
              </div>

              <div className="mt-10">
                <button 
                  className="text-white px-10 py-4 rounded-full text-lg font-medium hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
                  style={{ backgroundColor: '#394a43' }}
                >
                  Let's Create Something Together
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;