
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    // Optional: Create matrix rain effect
    const createMatrixRain = () => {
      const container = document.createElement('div');
      container.className = 'matrix-rain';
      document.body.appendChild(container);
      
      const width = window.innerWidth;
      
      // Create columns
      for (let i = 0; i < width / 20; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = `${Math.random() * width}px`;
        column.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        // Create random matrix characters
        for (let j = 0; j < 20; j++) {
          const char = document.createElement('div');
          char.textContent = String.fromCharCode(0x30A0 + Math.random() * 96);
          char.style.opacity = `${Math.random() * 0.5 + 0.5}`;
          column.appendChild(char);
        }
        
        container.appendChild(column);
      }
      
      return () => {
        document.body.removeChild(container);
      };
    };
    
    // Uncomment if you want the matrix effect
    // const cleanup = createMatrixRain();
    // return cleanup;
  }, []);
  
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center py-20 overflow-hidden bg-cyber-dark">
      {/* Background decoration */}
      <div className="absolute inset-0 cyber-grid z-0 opacity-20"></div>
      <div className="absolute inset-0 bg-hero-glow z-0"></div>
      
      <div className="cyber-container relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div className={`transition-all duration-1000 transform text-center lg:text-left ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <h1 className="font-tech font-bold text-4xl sm:text-5xl md:text-6xl leading-tight">
              <span className="text-white block">Cameron Price</span>
            </h1>
            
            <p className="mt-6 text-lg text-gray-300">
              Hi, I'm Cameron! I'm a Computer Science student at Southern New Hampshire University with a passion for cybersecurity. Welcome to my portfolio!
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link to="/projects" className="btn-cyber group">
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-cyber bg-cyber-green/10">
                <span>Get in Touch</span>
              </Link>
            </div>
            
            <div className="mt-8 flex items-center justify-center lg:justify-start">
              <div className="flex -space-x-2">
                {/* Certification badges or client logos could go here */}
                <div className="w-10 h-10 rounded-full bg-cyber-green/20 text-cyber-green flex items-center justify-center text-xs font-bold"></div>
                <div className="w-10 h-10 rounded-full bg-cyber-purple/20 text-cyber-purple flex items-center justify-center text-xs font-bold"></div>
                <div className="w-10 h-10 rounded-full bg-cyber-green/20 text-cyber-green flex items-center justify-center text-xs font-bold"></div>
              </div>
              <span className="ml-4 text-sm text-gray-400">Aspiring Cybersecurity Professional</span>
            </div>
          </div>
          
          {/* Right side - Animated blob image */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div className="relative w-80 h-80">
              {/* Animated blob shape with glow */}
              <div className="absolute inset-0 animate-blob">
                <div className="w-full h-full bg-gradient-to-br from-cyber-purple/30 to-cyber-green/30 blur-xl rounded-full"></div>
              </div>
              {/* Image container with blob border-radius and outline */}
              <div className="relative w-full h-full animate-blob-morph overflow-hidden border-4 border-cyber-purple/40 shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <img 
                  src="./pfp.png" 
                  alt="Cameron Price" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats or features */}
        <div className={`mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
          <div className="card-cyber p-6">
            <div className="h-12 w-12 rounded-md bg-cyber-green/10 text-cyber-green flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-tech font-semibold text-white mb-2">Network Security</h3>
            <p className="text-gray-400 text-sm">Hands-on experience with network security analysis using Wireshark, Nmap, and security auditing tools.</p>
          </div>
          
          <div className="card-cyber p-6">
            <div className="h-12 w-12 rounded-md bg-cyber-purple/10 text-cyber-purple flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-tech font-semibold text-white mb-2">System Administration</h3>
            <p className="text-gray-400 text-sm">Proficient in Active Directory, user management, system hardening, and group policy configuration.</p>
          </div>
          
          <div className="card-cyber p-6">
            <div className="h-12 w-12 rounded-md bg-cyber-green/10 text-cyber-green flex items-center justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <h3 className="text-xl font-tech font-semibold text-white mb-2">Cybersecurity Lab</h3>
            <p className="text-gray-400 text-sm">Built personal cybersecurity lab for penetration testing practice and vulnerability research.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
