
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, FileText, Briefcase, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [location.pathname]);
  
  const navLinks = [
    { path: '/', name: 'Home' },
    { path: '/projects', name: 'Projects' },
    { path: '/resume', name: 'Experience' },
    { path: '/contact', name: 'Contact' },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 bg-cyber-darker/90 backdrop-blur-md shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="cyber-container flex items-center justify-between">
        <Link to="/" className="group flex items-center relative">
          <span className="font-tech font-bold text-2xl sm:text-3xl whitespace-nowrap flex items-center">
            <span className="text-gray-400">&lt;</span>
            <span className="text-cyber-purple">C</span>
            <span className="inline-block max-w-0 group-hover:max-w-[10rem] overflow-hidden transition-all duration-300 ease-in-out align-middle">
              <span className="text-cyber-purple">ameron</span>
            </span>
            <span className="text-white group-hover:ml-1 transition-all duration-300">P</span>
            <span className="inline-block max-w-0 group-hover:max-w-[10rem] overflow-hidden transition-all duration-300 ease-in-out align-middle">
              <span className="text-white">rice</span>
            </span>
            <span className="text-gray-400">/&gt;</span>
          </span>
        </Link>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-all hover:text-cyber-purple ${
                location.pathname === link.path 
                  ? 'text-cyber-purple border-b-2 border-cyber-purple' 
                  : 'text-gray-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyber-purple"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-cyber-darker/95 backdrop-blur-md shadow-lg py-3 border-t border-cyber-purple/20 animate-fade-in">
          <div className="cyber-container flex flex-col space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`p-2 rounded-md ${
                  location.pathname === link.path
                    ? 'text-cyber-purple bg-cyber-purple/10'
                    : 'text-gray-300 hover:bg-cyber-purple/5 hover:text-cyber-purple'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
