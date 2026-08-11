
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
              I work as an IT Support &amp; Security Analyst at Log(N) Pacific, where the job runs the full width of an IT
              team. On any given week I am hardening Windows endpoints, running authenticated vulnerability scans across
              server assets, writing detection rules, and working live alerts out of the SOC queue. That range is
              deliberate. I wanted to learn how the pieces actually connect before specializing.
            </p>
            <p className="text-gray-300 text-lg">
              The direction I am heading is cloud identity. I hold CompTIA Security+ and the Azure Administrator
              Associate certification, I am studying for SC-300, and I am building out a twelve-project multi-cloud IAM
              portfolio across Microsoft Entra and AWS. Each project ships as a real repo with tests and CI rather than a
              set of portal screenshots, because I would rather show work that runs than work that was clicked.
            </p>
            <p className="text-gray-300 text-lg">
              I finish my B.S. in Computer Science at Southern New Hampshire University in early 2027, and I am based in
              Long Beach, California.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
