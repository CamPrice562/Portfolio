
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
              I am a customer-first service desk and end-user computing professional serving as the first point of contact for 200+ users across Windows 10/11 and macOS at Log(N) Pacific. Day to day, that means diagnosing hardware, software, and network issues, provisioning Active Directory accounts, resolving MFA and password lockouts, and keeping Microsoft 365, Teams, and VPN access running smoothly.
            </p>
            <p className="text-gray-300 text-lg">
              I bring hands-on ServiceNow experience building Service Catalog requests, Flow Designer automation, assignment-group routing, and SLA definitions. What I cannot resolve immediately, I escalate with thorough, high-context documentation so the next engineer never starts from scratch.
            </p>
            <p className="text-gray-300 text-lg">
              Backed by CompTIA Security+ and Azure Administrator (AZ-104) certifications, I bridge day-to-day service desk operations with cloud security engineering—automating endpoint baselines with PowerShell and triaging security alerts. Based in Long Beach, CA (Remote), and completing my B.S. in Computer Science at SNHU (March 2027).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
