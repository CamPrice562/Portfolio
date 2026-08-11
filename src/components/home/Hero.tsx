
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Shield, Code, Zap, BadgeCheck, CircleDashed } from 'lucide-react';
import { profile, heroCredentials } from '@/data/portfolio';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const words = profile.titles;

  // Typing animation effect
  useEffect(() => {
    if (isVisible) {
      const currentWord = words[currentWordIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex <= currentWord.length) {
          setTypedText(currentWord.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentWordIndex((prev) => (prev + 1) % words.length);
          }, 2000);
        }
      }, 150);
      
      return () => clearInterval(typeInterval);
    }
  }, [isVisible, currentWordIndex]);
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 150; // Reduced max scroll for more subtle effect
      const clampedScroll = Math.min(scrollPosition, maxScroll);
      setScrollY(clampedScroll);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center py-20 overflow-hidden bg-cyber-dark">
      {/* Animated floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-float-slow">
          <Terminal className="w-6 h-6 text-cyber-purple/30" />
        </div>
        <div className="absolute top-40 right-20 animate-float-medium">
          <Shield className="w-8 h-8 text-cyber-green/30" />
        </div>
        <div className="absolute bottom-32 left-32 animate-float-fast">
          <Code className="w-5 h-5 text-cyber-purple/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float-slow">
          <Zap className="w-7 h-7 text-cyber-green/30" />
        </div>
      </div>
      
      {/* Background decoration with subtle parallax */}
      <div 
        className="absolute inset-0 cyber-grid z-0 opacity-20"
        style={{
          transform: `translateY(${scrollY * 0.02}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      <div
        className="absolute inset-0 ambient-glow dither z-0"
        style={{
          transform: `translateY(${scrollY * 0.03}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      ></div>
      
      <div 
        className="cyber-container relative z-10 pt-20 px-4 sm:px-6 lg:px-8"
        style={{
          transform: `translateY(${scrollY * 0.05}px)`,
          transition: 'transform 0.5s ease-out'
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left side - Text content */}
          <div 
            className={`transition-all duration-1000 transform text-center lg:text-left ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            style={{
              transform: `translateY(${scrollY * 0.08}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            <h1 
              className="font-tech font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              <span className="text-white block">Cameron Price</span>
            </h1>
            
            <div className="mt-4 sm:mt-6">
              <p className="text-sm sm:text-base lg:text-lg text-cyber-purple font-medium">
                {typedText}<span className="animate-pulse">|</span>
              </p>
            </div>
            
            {/* Current position, as quiet metadata. Answers "who is this"
                without competing with the sentence below it. */}
            <p className="mt-3 text-xs sm:text-sm text-gray-500">
              {profile.role} at <span className="text-gray-300">{profile.company}</span>
            </p>

            {/* The one sentence worth reading. Carries no credentials. */}
            <p
              className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              {profile.summary}
            </p>

            {/* Credentials live only here. Held and in-progress are styled
                differently so the row carries information, not just decoration. */}
            <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
              {heroCredentials.map((credential) => {
                const held = credential.status === 'held';
                const Icon = held ? BadgeCheck : CircleDashed;

                return (
                  <span
                    key={credential.label}
                    title={held ? 'Certification held' : 'In progress'}
                    className={`inline-flex items-center gap-1.5 pl-2 pr-2.5 py-1 text-xs rounded-md border ${
                      held
                        ? 'border-cyber-purple/40 bg-cyber-purple/10 text-cyber-purple'
                        : 'border-dashed border-gray-700 text-gray-400'
                    }`}
                  >
                    <Icon size={13} className={held ? '' : 'text-gray-600'} />
                    {credential.label}
                    {credential.note && (
                      <span className="text-gray-600">{credential.note}</span>
                    )}
                  </span>
                );
              })}
            </div>

            <div
              className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
              style={{
                transform: `translateY(${scrollY * 0.06}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              <Link to="/projects" className="btn-cyber group text-sm sm:text-base px-4 sm:px-6 py-2 hover:scale-105 transform transition-all duration-300">
                <span>View Projects</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link to="/contact" className="btn-cyber bg-cyber-green/10 text-sm sm:text-base px-4 sm:px-6 py-2 hover:scale-105 transform transition-all duration-300">
                <span>Get in Touch</span>
              </Link>
            </div>
            
          </div>
          
          {/* Right side - Animated blob image */}
          <div 
            className={`flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            style={{
              transform: `translateY(${scrollY * 0.12}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            <div 
              ref={imageRef}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-80 lg:h-80"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              {/* Animated blob shape with glow */}
              <div 
                className="absolute inset-0 animate-blob"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                  transition: 'transform 0.5s ease-out'
                }}
              >
                <div className="w-full h-full rounded-full blur-2xl bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.42)_0%,rgba(20,184,166,0.26)_45%,rgba(20,184,166,0.08)_72%,rgba(20,184,166,0)_100%)]"></div>
              </div>
              {/* Image container with blob border-radius and outline */}
              <div 
                className="relative w-full h-full animate-blob-morph overflow-hidden border-4 border-cyber-purple/40 shadow-[0_0_30px_rgba(20,184,166,0.3)] hover:shadow-[0_0_40px_rgba(20,184,166,0.5)] transition-all duration-300"
              >
                <img 
                  src={`${import.meta.env.BASE_URL}pfp.png`}
                  alt="Cameron Price" 
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
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
