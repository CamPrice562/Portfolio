import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Shield, Code, Zap, BadgeCheck, CircleDashed } from 'lucide-react';
import { profile, heroCredentials } from '@/data/portfolio';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

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

            {/*
              The pitch. All four target roles shown at once and always, rather
              than cycled one at a time, so a visitor knows in a single glance
              what Cameron is offering.
            */}
            <ul className="mt-4 sm:mt-5 flex flex-wrap gap-x-2 gap-y-1 justify-center lg:justify-start text-sm sm:text-base font-medium text-cyber-purple">
              {profile.titles.map((title, index) => (
                <li key={title} className="flex items-center gap-2">
                  <span>{title}</span>
                  {index < profile.titles.length - 1 && (
                    <span aria-hidden="true" className="text-cyber-purple/30">
                      /
                    </span>
                  )}
                </li>
              ))}
            </ul>

            {/* What those four roles actually mean in practice. One clause per
                discipline above, in the same order. */}
            <p
              className="mt-5 text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              {profile.summary}
            </p>

            {/* Where he is now, plus proof. Quiet metadata, not a headline. */}
            <p className="mt-5 text-xs sm:text-sm text-gray-500">
              Currently {profile.role} at{' '}
              <span className="text-gray-300">{profile.company}</span>
            </p>

            {/* Credentials live only here. Held and in-progress are styled
                differently so the row carries information, not just decoration. */}
            <div className="mt-3 flex flex-wrap gap-2 justify-center lg:justify-start">
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
              className="mt-7 sm:mt-8 flex flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start"
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

          {/* Right side - portrait */}
          <div
            className={`flex justify-center transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-10'}`}
            style={{
              transform: `translateY(${scrollY * 0.12}px)`,
              transition: 'transform 0.5s ease-out'
            }}
          >
            <div
              ref={imageRef}
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 group"
              style={{
                transform: `translateY(${scrollY * 0.08}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              {/*
                Portrait treatment: one soft glow, one hairline ring, one faint
                outer ring. No morphing blob and no hard-edged halo, so the
                shape reads as deliberate rather than wobbly.
              */}
              <div className="portrait-glow" aria-hidden="true"></div>
              <div className="portrait-ring" aria-hidden="true"></div>

              <div className="relative w-full h-full rounded-full overflow-hidden ring-1 ring-cyber-purple/25 transition-shadow duration-500 group-hover:ring-cyber-purple/40">
                <img
                  src={`${import.meta.env.BASE_URL}pfp.png`}
                  alt="Cameron Price"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
