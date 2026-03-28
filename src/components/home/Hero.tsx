
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    
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
              Cybersecurity Intern and CompTIA Security+ certified professional specializing in Identity and Access Management. I build automation tools to secure systems and practice hands-on defense on platforms like The Cyber Range.
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
            
          </div>
          
          {/* Right side - Animated blob image */}
          <div className={`flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}>
            <div 
              ref={imageRef}
              className="relative w-80 h-80"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              {/* Animated blob shape with glow */}
              <div className="absolute inset-0 animate-blob">
                <div className="w-full h-full bg-gradient-to-br from-cyber-purple/30 to-cyber-green/30 blur-xl rounded-full"></div>
              </div>
              {/* Image container with blob border-radius and outline */}
              <div className="relative w-full h-full animate-blob-morph overflow-hidden border-4 border-cyber-purple/40 shadow-[0_0_30px_rgba(20,184,166,0.3)]">
                <img 
                  src={`${import.meta.env.BASE_URL}pfp.png`}
                  alt="Cameron Price" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
