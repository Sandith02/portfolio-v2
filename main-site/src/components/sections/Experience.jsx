import React, { useState, useEffect, useRef } from 'react';

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const experiences = [
    {
      id: 'villa-operations',
      company: 'Villa 54 by GLAMOUR Co.',
      role: 'Operations Manager',
      type: 'Family Business',
      period: '2023 - Present',
      location: 'Ahangama, Sri Lanka',
      description: 'Full operational responsibility for vacation rental property generating seasonal revenue through Airbnb and direct bookings.',
      achievements: [
        'Achieved exceptional 5.0/5.0 guest satisfaction rating across all categories',
        'Manage end-to-end guest experience including reservations and service delivery',
        'Handle pricing strategy, market analysis, and revenue optimization',
        'Coordinate with service providers and maintain property standards'
      ],
      skills: ['Revenue Management', 'Customer Experience', 'Operations', 'Market Analysis'],
      current: true
    },
    {
      id: 'ieee-micromaze',
      company: 'IEEE RAS Club, IIT',
      role: 'Public Visibility Vice Chair',
      type: 'MicroMaze 2.0 Competition',
      period: 'March 2025 - Present',
      location: 'Colombo, Sri Lanka',
      description: 'Lead comprehensive marketing strategies and PR initiatives for flagship technology competition, coordinating cross-functional teams.',
      achievements: [
        'Execute strategic campaigns to enhance event visibility and industry partnerships',
        'Coordinate marketing efforts across multiple channels and stakeholders',
        'Drive community engagement and participant recruitment initiatives',
        'Manage brand positioning for major IEEE robotics competition'
      ],
      skills: ['Marketing Strategy', 'Public Relations', 'Event Management', 'Team Coordination'],
      current: true
    },
    {
      id: 'ieee-traction',
      company: 'IEEE RAS Club, IIT',
      role: 'Design Vice Chair',
      type: 'Traction 01 Initiative',
      period: 'March 2025 - April 2025',
      location: 'Colombo, Sri Lanka',
      description: 'Led visual identity and creative direction for major IEEE RAS initiative, managing design strategy and coordinating with technical teams.',
      achievements: [
        'Delivered cohesive brand experiences and marketing materials',
        'Coordinated design strategy across multiple deliverables',
        'Collaborated with technical teams to ensure brand consistency',
        'Managed visual communications for engineering competition'
      ],
      skills: ['Design Leadership', 'Brand Strategy', 'Visual Communication', 'Cross-functional Collaboration'],
      current: false
    },
    {
      id: 'ieee-robotnexus',
      company: 'IEEE RAS Club, IIT',
      role: 'Design Volunteer',
      type: 'Robotnexus 02 Event',
      period: 'January 2025 - February 2025',
      location: 'Colombo, Sri Lanka',
      description: 'Contributed to visual design and branding efforts for premier robotics event, collaborating with organizing committee.',
      achievements: [
        'Created compelling visual communications and event materials',
        'Supported organizing committee with design deliverables',
        'Contributed to successful execution of major robotics competition',
        'Developed skills in event-scale design coordination'
      ],
      skills: ['Graphic Design', 'Event Materials', 'Team Collaboration', 'Visual Identity'],
      current: false
    },
    {
      id: 'competition-leadership',
      company: 'Various Universities',
      role: 'Competition Team Leader',
      type: 'Programming Competitions',
      period: '2024',
      location: 'Sri Lanka',
      description: 'Led multiple programming competition teams, demonstrating leadership in high-pressure, time-constrained environments.',
      achievements: [
        'Team Leader - "YANKO | webEx," CodeSprint 08, IIT',
        'Team Leader - "Pawsitive | webBusters," Idealize Competition, University of Moratuwa',
        'Group Leader - IEEE Xtreme Programming Competition',
        'Successfully coordinated team strategy and technical implementation'
      ],
      skills: ['Team Leadership', 'Strategic Planning', 'Technical Coordination', 'Competitive Programming'],
      current: false
    },
    {
      id: 'school-leadership',
      company: 'Saint Aloysius College, Galle',
      role: 'Head of International Press Corps',
      type: 'YDMUN Conference',
      period: '2019',
      location: 'Galle, Sri Lanka',
      description: 'Led International Press Corps division at school\'s premier Model United Nations conference, managing media strategy and coordination.',
      achievements: [
        'Managed media strategy and coordinated public relations activities',
        'Led printing and publication operations for conference',
        'Executive Committee Member - Model United Nations Club (2018-2020)',
        'Participated in SYMUN, RichMUN and SACMUN conferences'
      ],
      skills: ['Leadership', 'Media Strategy', 'Public Relations', 'Event Coordination'],
      current: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            Experience
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            Leadership<br />
            <span className="font-medium" style={{ color: '#394a43' }}>Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From managing family business operations to leading university competitions and IEEE initiatives—
            building leadership skills through diverse real-world experiences.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={exp.id}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      {exp.current && (
                        <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <p className="text-lg text-[#394a43] font-medium">{exp.company}</p>
                    <p className="text-gray-600">{exp.type} • {exp.location}</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="text-lg font-semibold text-gray-900">{exp.period}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {exp.description}
                </p>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Left: Achievements */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Achievements</h4>
                    <ul className="space-y-3">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-[#394a43] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: Skills */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Skills Developed</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span 
                          key={skill} 
                          className="px-3 py-1 bg-[#394a43] bg-opacity-10 text-[#394a43] text-sm font-medium rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Leadership Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: '3+', label: 'IEEE Leadership Roles', desc: 'Vice Chair & Volunteer positions' },
                { number: '5+', label: 'Team Projects Led', desc: 'Competition & development teams' },
                { number: '2 Years', label: 'Villa Operations', desc: '5.0/5.0 guest satisfaction' },
                { number: '2018', label: 'Leadership Since', desc: 'Model UN to IEEE initiatives' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-[#394a43] mb-2">{stat.number}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-gray-600 mb-8">
            Interested in learning more about my experience and leadership approach?
          </p>
          <button
            onClick={() => {
              const contactSection = document.querySelector('#contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-[#394a43] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            Let's Connect
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Experience;