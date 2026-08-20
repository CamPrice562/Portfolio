
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-y-0');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      elements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="cyber-container relative z-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-tech text-3xl font-bold text-white mb-6 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            About <span className="text-glow">Me</span>
          </h2>

          <div className="space-y-5 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <p className="text-gray-300 text-lg">
              I'm a Cloud Security Engineer focused on bridging the gap between infrastructure and security. At Log(N) Pacific, I secure endpoints, manage vulnerabilities, and triage live SOC alerts—building a resilient foundation across the entire IT landscape. I thrive on engineering solutions that keep systems locked down and users seamlessly connected.
            </p>
            <p className="text-gray-300 text-lg">
              My core focus is securing cloud environments. Backed by CompTIA Security+ and Azure Administrator certifications, I’m building a comprehensive Cloud Security Engineer portfolio across Microsoft Entra and AWS. I believe in proving my skills with test-driven code and CI/CD pipelines, because true security is built, not just clicked. 
            </p>
            <p className="text-gray-300 text-lg">
              Based in Long Beach, CA, and completing my B.S. in Computer Science (SNHU 2027), I bring a builder's mindset and a relentless drive to secure and streamline tech ecosystems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
