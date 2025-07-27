import React, { useState, useEffect, useRef } from 'react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const projects = [
    {
      id: 'doctoraid',
      title: 'DoctorAid Healthcare Platform',
      subtitle: 'Product Manager, Designer & Tech Lead',
      period: 'Oct 2024 - Mar 2025',
      status: 'Live MVP',
      description: 'Led university coursework project to build healthcare platform connecting patients with doctors. Managed cross-functional team of 5 developers through complete MVP development and deployment.',
      businessImpact: [
        'Delivered working healthcare solution as main university coursework',
        'Successfully coordinated team through full development lifecycle',
        'Created dual-platform solution (web + mobile) within academic constraints'
      ],
      pmSkills: [
        'Team Leadership',
        'Project Management', 
        'Technical Coordination',
        'Academic Project Delivery'
      ],
      metrics: {
        team: '5 Developers',
        timeline: '5 Months',
        scope: 'Web + Mobile MVP'
      },
      tech: ['MERN Stack', 'React Native', 'Tailwind CSS'],
      links: {
        live: 'https://doctoraid.site',
        github: 'https://github.com/DoctorAid'
      }
    },
    {
      id: 'villa-qr',
      title: 'Villa Rental Platform',
      subtitle: 'Product Owner & Full-Stack Developer',
      period: 'May 2025 - July 2025',
      status: 'Live & Deployed',
      description: 'Built scalable villa rental platform where owners get QR codes that tourists scan to instantly access mobile-optimized booking sites. Single codebase supports unlimited villas through JSON configuration - no app downloads required.',
      businessImpact: [
        'Eliminated app download friction with web-as-app experience',
        'Scaled to support unlimited villas with zero marginal cost',
        'Created direct booking solution bypassing platform commissions'
      ],
      pmSkills: [
        'Scalable Architecture Design',
        'Product Strategy',
        'Technical Leadership',
        'Business Model Innovation'
      ],
      metrics: {
        performance: '<1s Load Time',
        scalability: 'Unlimited Villas',
        architecture: 'Single Codebase'
      },
      tech: ['React', 'JSON Config', 'PWA', 'Static Generation'],
      links: {
        demo: 'https://the-villa-54.vercel.app/',
        github: 'https://github.chttps://github.com/Sandith02/glamour_tech_villa_management_suiteom/DoctorAid'
      }
    },
    {
      id: 'car-rental',
      title: 'Car Rental QR Platform',
      subtitle: 'Product Manager & System Architect',
      period: 'July 2025 - Present',
      status: 'In Development',
      description: 'Adapting villa platform architecture for car rental businesses. Tourists scan QR codes on vehicles to access instant mobile booking experiences. Leveraging proven JSON-based multi-tenant architecture.',
      businessImpact: [
        'Expanding proven villa platform model to automotive sector',
        'Creating new revenue stream through architectural reuse',
        'Solving car rental discovery and booking friction'
      ],
      pmSkills: [
        'Market Expansion Strategy',
        'Architecture Reusability',
        'Cross-Industry Application',
        'Product Roadmap Planning'
      ],
      metrics: {
        reusability: '90% Code Reuse',
        timeline: '3 Month Target',
        market: 'New Vertical'
      },
      tech: ['React', 'JSON Config', 'PWA', 'Multi-tenant'],
      links: {
     
      }
    },
    {
      id: 'unskiip',
      title: 'Unskiip Ad Platform Research',
      subtitle: 'Business Analyst & Strategy Lead',
      period: 'May 2025 - Present',
      status: 'Research Phase',
      description: 'Conducting comprehensive market research for revolutionary advertising platform that pays users for verified attention. Deep-diving into the $50B ad skip problem with detailed business model and risk analysis.',
      businessImpact: [
        'Identified massive market inefficiency in digital advertising',
        'Developed comprehensive business architecture and revenue models',
        'Created detailed stakeholder mapping and risk mitigation strategies'
      ],
      pmSkills: [
        'Market Research & Analysis',
        'Business Model Design',
        'Risk Assessment',
        'Stakeholder Mapping'
      ],
      metrics: {
        market: 'Saturated',
        research: 'Full Analysis',
        models: 'Revenue Streams'
      },
      tech: ['Business Architecture', 'Market Analysis', 'Strategic Planning'],
      links: {
        docs: '#'
      }
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
    <section id="projects" ref={sectionRef} className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-6">
            Projects
          </div>
          <h2 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
            Product<br />
            <span className="font-medium" style={{ color: '#394a43' }}>Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From healthcare accessibility to advertising transparency—here's how I've turned complex business 
            challenges into scalable technical solutions, leading teams and driving measurable outcomes.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`transition-all duration-1000 delay-${(index + 1) * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm hover:shadow-lg transition-all duration-300">
                
                {/* Project Header */}
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                  <div className="mb-6 lg:mb-0">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-3xl font-bold text-gray-900">{project.title}</h3>
                      <span className="px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded-full">
                        {project.status}
                      </span>
                    </div>
                    <p className="text-lg text-[#394a43] font-medium mb-2">{project.subtitle}</p>
                    <p className="text-gray-600">{project.period}</p>
                  </div>
                  
                  {/* Metrics */}
                  <div className="flex gap-6">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-2xl font-bold text-[#394a43]">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                  
                  {/* Left: Business Impact */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Business Impact</h4>
                    <ul className="space-y-3">
                      {project.businessImpact.map((impact, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="w-5 h-5 text-[#394a43] mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: PM Skills & Tech */}
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Key Skills Applied</h4>
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.pmSkills.map((skill) => (
                          <span key={skill} className="px-3 py-1 bg-[#394a43] bg-opacity-10 text-[#394a43] text-sm font-medium rounded-full">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Technology Stack</h5>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Links */}
                {(project.links.live || project.links.github || project.links.demo || project.links.docs) && (
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <div className="flex flex-wrap gap-4">
                      {project.links.live && (
                        <a 
                          href={project.links.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-[#394a43] text-white font-medium rounded-lg hover:bg-opacity-90 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Platform
                        </a>
                      )}
                      {project.links.github && (
                        <a 
                          href={project.links.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Code
                        </a>
                      )}
                      {project.links.demo && (
                        <a 
                          href={project.links.demo} 
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          View Demo
                        </a>
                      )}
                      {project.links.docs && (
                        <a 
                          href={project.links.docs} 
                          className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-300"
                        >
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Documentation
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-lg text-gray-600 mb-8">
            Ready to discuss how I can help solve your next business challenge?
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
            Let's Talk Strategy
            <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;