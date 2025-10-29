
import React, { useEffect, useRef } from 'react';
import { Shield, Server, Code, AlertTriangle, CheckCircle } from 'lucide-react';

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
  
  const skills = [
    { name: "Network Security", level: 85 },
    { name: "System Administration", level: 80 },
    { name: "Python & Java", level: 85 },
    { name: "Cybersecurity Tools", level: 80 },
    { name: "Hardware Troubleshooting", level: 90 },
  ];
  
  return (
    <section ref={sectionRef} id="about" className="py-20 bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="cyber-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-tech text-3xl font-bold text-white mb-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
            About <span className="text-glow">Me</span>
          </h2>
          
          <div className="space-y-4 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <p className="text-gray-300 text-lg">
              I am a Computer Science student at Southern New Hampshire University with a strong foundation in cybersecurity principles and hands-on experience in network security, hardware troubleshooting, and system administration. I actively participate in National Cyber League (NCL) competitions, demonstrating practical cybersecurity skills in time-constrained environments.
            </p>
            <p className="text-gray-300 text-lg">
              I have built a personal cybersecurity lab using VirtualBox and VMware for safe testing environments, where I regularly practice with vulnerable applications and Capture-the-Flag (CTF) challenges. My goal is to apply my technical problem-solving abilities in protecting organizational systems and data.
            </p>
            
            <div className="flex items-center justify-center space-x-8 mt-8">
              <div className="flex flex-col items-center">
                <span className="text-cyber-green font-bold text-3xl">Top 25%</span>
                <span className="text-gray-400 text-sm">NCL Ranking</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-cyber-purple font-bold text-3xl">2026</span>
                <span className="text-gray-400 text-sm">Graduation</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-cyber-green font-bold text-3xl">Multiple</span>
                <span className="text-gray-400 text-sm">Certifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
