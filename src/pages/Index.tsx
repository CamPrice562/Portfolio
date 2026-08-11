import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Hero from '@/components/home/Hero';
import StatStrip from '@/components/home/StatStrip';
import About from '@/components/home/About';
import Credentials from '@/components/home/Credentials';
import ProjectCard from '@/components/projects/ProjectCard';
import { projects } from '@/data/portfolio';

const Index = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-cyber-dark">
      <Hero />

      <StatStrip />

      <About />

      {/* Featured Projects */}
      <section className="py-20 bg-cyber-dark relative">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>

        <div className="cyber-container relative z-10">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-12">
            <div>
              <h2 className="font-tech text-3xl font-bold text-white">
                Featured <span className="text-glow">Projects</span>
              </h2>
              <p className="mt-2 text-gray-400">
                Endpoint hardening, cloud vulnerability management, and multi-cloud identity.
              </p>
            </div>

            <Link to="/projects" className="btn-cyber group">
              <span>View All</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
        </div>
      </section>

      <Credentials />

      {/* CTA Section */}
      <section className="py-16 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 section-wash dither"></div>

        <div className="cyber-container relative z-10 text-center">
          <h2 className="font-tech text-3xl font-bold text-white mb-6 mx-auto max-w-3xl">
            Looking for someone who can <span className="text-glow">support it and secure it</span>?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I am open to IT support, cloud engineering, identity, and cloud security roles. Long Beach, California, or
            remote.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-cyber">
              <span>Get in Touch</span>
            </Link>
            <Link to="/resume" className="btn-cyber bg-cyber-green/10">
              <span>See Experience</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
