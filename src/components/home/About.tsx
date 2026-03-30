
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
    { name: "Identity & Access Management", level: 85 },
    { name: "Vulnerability Management", level: 80 },
    { name: "Security Automation", level: 85 },
    { name: "System Hardening (STIGs)", level: 80 },
    { name: "Threat Hunting", level: 75 },
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
              I am a Cybersecurity Intern pursuing a Bachelor of Science in Computer Science at Southern New Hampshire University, with a CompTIA Security+ certification and a clear goal of becoming an Identity and Access Management (IAM) Engineer. I actively apply security concepts in real-world business environments and build automation tools to secure systems.
            </p>
            <p className="text-gray-300 text-lg">
              My expertise includes vulnerability management using enterprise tools like Tenable and Azure, applying Security Technical Implementation Guides (STIGs) for system hardening, and proactive threat hunting on live servers. I turn raw security data into actionable insights and ensure systems meet strict compliance standards while practicing hands-on defense on platforms like The Cyber Range.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
