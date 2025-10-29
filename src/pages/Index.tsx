
import React from 'react';
import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';

const Index = () => {
  // Featured projects
  const featuredProjects: Project[] = [
    {
      id: '1',
      title: 'Personal Cybersecurity Lab',
      description: 'Home lab for penetration testing and security research.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
      tags: ['Cybersecurity', 'VirtualBox', 'VMware'],
      details: 'Built home cybersecurity lab using VirtualBox and VMware for safe testing environments. Configured multiple virtual machines with various operating systems for penetration testing practice.'
    },
    {
      id: '2',
      title: 'National Cyber League (NCL) Competitions',
      description: 'Competitive cybersecurity challenges and CTF participation.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
      tags: ['Cybersecurity', 'OSINT', 'Cryptography'],
      details: 'Actively participate in National Cyber League (NCL) competitions. Completed advanced challenges in OSINT, Cryptography, and Network Traffic Analysis. Maintained top 25% ranking in regional competitions.'
    },
    {
      id: '3',
      title: 'Premiere Pro Auto Edit System',
      description: 'Automation tools for video editing workflows.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
      tags: ['Development', 'JavaScript', 'Agile'],
      details: 'Developed automation tools for Premiere Pro and After Effects using JavaScript, HTML, and CSS. Applied Agile methodology throughout the development process.'
    }
  ];
  
  return (
    <div className="min-h-screen bg-cyber-dark">
      {/* Hero Section */}
      <Hero />
      
      {/* About Section */}
      <About />
      
      {/* Featured Projects */}
      <section className="py-20 bg-cyber-dark relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        
        <div className="cyber-container relative z-10">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="font-tech text-3xl font-bold text-white">
                Featured <span className="text-glow">Projects</span>
              </h2>
              <p className="mt-2 text-gray-400">
                Showcasing my expertise in cybersecurity implementation
              </p>
            </div>
            
            <Link 
              to="/projects" 
              className="btn-cyber group"
            >
              <span>View All</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 bg-matrix opacity-20"></div>
        
        <div className="cyber-container relative z-10 text-center">
          <h2 className="font-tech text-3xl font-bold text-white mb-6 mx-auto max-w-3xl">
            Ready to Secure Your <span className="text-glow">Digital Assets</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's work together to protect your organization from cyber threats with tailored security solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-cyber">
              <span>Get in Touch</span>
            </Link>
            <Link to="/resume" className="btn-cyber bg-cyber-green/10">
              <span>View Resume</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
