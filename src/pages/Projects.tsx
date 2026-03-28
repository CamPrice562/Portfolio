
import React, { useState, useEffect } from 'react';
import ProjectCard, { Project } from '@/components/projects/ProjectCard';
import { Filter } from 'lucide-react';

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');
  const [isLoading, setIsLoading] = useState(true);
  
  // In a real app, this would come from an API or CMS
  useEffect(() => {
    // Simulating API fetch
    setTimeout(() => {
      const projectsData: Project[] = [
        {
          id: '1',
          title: 'Vulnerability Management',
          description: 'I identify and assess system vulnerabilities using enterprise tools like Tenable and Azure.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
          tags: ['Cybersecurity', 'Tenable', 'Azure'],
          details: 'I turn raw scan data into clear security steps that reduce the overall attack surface. Using enterprise vulnerability scanning tools like Tenable and Azure, I analyze environments and provide actionable insights to strengthen security postures. This systematic approach helps organizations prioritize and remediate vulnerabilities effectively.'
        },
        {
          id: '2',
          title: 'STIGs and System Hardening',
          description: 'I apply Security Technical Implementation Guides (STIGs) to IT infrastructure.',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
          tags: ['Compliance', 'STIGs', 'Security'],
          details: 'I ensure systems meet strict compliance standards by applying Security Technical Implementation Guides (STIGs) and locking down configurations to prevent unauthorized access. This systematic approach to security hardening protects critical infrastructure and ensures adherence to government and industry security requirements.'
        },
        {
          id: '3',
          title: 'Threat Hunting',
          description: 'I proactively search for hidden threats on live servers and platforms.',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
          tags: ['Threat Detection', 'Cyber Range', 'Defense'],
          details: 'I use command-line tools and log analysis to find potential compromises early, rather than waiting for automated alerts. This proactive approach to threat hunting on live servers and platforms like The Cyber Range helps identify and neutralize threats before they cause significant damage.'
        },
        {
          id: '4',
          title: 'Enterprise Security Operations',
          description: 'Real-world experience with enterprise security tools including Tenable, MDE, and Azure.',
          image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2069&auto=format&fit=crop',
          tags: ['Enterprise Security', 'Tenable', 'MDE', 'Azure'],
          details: 'Gaining hands-on experience with enterprise security tools in real-world environments. Working with Tenable for vulnerability management and scanning, utilizing Microsoft Defender for Endpoint (MDE) for threat detection and response, and implementing Azure cloud security configurations. This practical experience includes applying security policies, managing alerts, and responding to incidents in enterprise-like settings.'
        }
      ];
      
      setProjects(projectsData);
      setFilteredProjects(projectsData);
      setIsLoading(false);
    }, 1000);
  }, []);
  
  // Extract all unique tags from projects
  const allTags = ['all', ...Array.from(new Set(projects.flatMap(project => project.tags)))];
  
  // Filter projects based on selected tag
  const handleFilterChange = (tag: string) => {
    setActiveFilter(tag);
    
    if (tag === 'all') {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(project => project.tags.includes(tag));
      setFilteredProjects(filtered);
    }
  };
  
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="pt-24 pb-16 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark"></div>
        
        <div className="cyber-container relative z-10">
          <h1 className="font-tech text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-glow">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-center">
            Explore my portfolio of projects demonstrating expertise in identity and access management, vulnerability management, and security automation.
          </p>
        </div>
      </div>
      
      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          {/* Filter menu */}
          <div className="mb-10 border-b border-gray-800 pb-4">
            <div className="flex items-center mb-4">
              <Filter size={18} className="text-cyber-purple mr-2" />
              <span className="text-gray-300 font-medium">Filter Projects:</span>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  className={`px-4 py-2 rounded-md text-sm transition-all ${
                    activeFilter === tag
                      ? 'bg-cyber-purple text-cyber-darker font-medium'
                      : 'bg-cyber-darker text-gray-300 hover:bg-cyber-purple/20'
                  }`}
                  onClick={() => handleFilterChange(tag)}
                >
                  {tag.charAt(0).toUpperCase() + tag.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {isLoading ? (
            <div className="flex justify-center py-20">
              <div className="w-12 h-12 rounded-full border-4 border-cyber-purple/20 border-t-cyber-purple animate-spin"></div>
            </div>
          ) : filteredProjects.length > 0 ? (
            <div className="space-y-8">
              {filteredProjects.map((project, index) => (
                <div key={project.id} className={`${index % 2 === 0 ? 'bg-cyber-darker' : 'bg-cyber-dark'}`}>
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-300 mb-2">No projects found</h3>
              <p className="text-gray-400">No projects match the selected filter.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
