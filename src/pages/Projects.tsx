
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
          title: 'Personal Cybersecurity Lab',
          description: 'Home lab for penetration testing and security research.',
          image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop',
          tags: ['Cybersecurity', 'VirtualBox', 'VMware'],
          details: 'Built home cybersecurity lab using VirtualBox and VMware for safe testing environments. Configured multiple virtual machines with various operating systems for penetration testing practice. Implemented network segmentation and firewall rules to simulate enterprise security environments.'
        },
        {
          id: '2',
          title: 'National Cyber League (NCL) Competitions',
          description: 'Competitive cybersecurity challenges and CTF participation.',
          image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop',
          tags: ['Cybersecurity', 'OSINT', 'Cryptography'],
          details: 'Actively participate in National Cyber League (NCL) competitions, demonstrating practical cybersecurity skills in time-constrained environments. Completed advanced challenges in Open Source Intelligence (OSINT), Cryptography, and Network Traffic Analysis. Utilize industry-standard tools including Wireshark for packet analysis and network security investigation. Maintained top 25% ranking in regional cybersecurity competitions.'
        },
        {
          id: '3',
          title: 'Premiere Pro Auto Edit System',
          description: 'Automation tools for video editing workflows.',
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop',
          tags: ['Development', 'JavaScript', 'Agile'],
          details: 'Developed automation tools for Premiere Pro and After Effects using JavaScript, HTML, and CSS. Applied Agile methodology (Plan, Design, Develop, Test, Deploy, Review) throughout the development process. Utilized scripts from GitHub and customized them for specific video editing workflows.'
        },
        {
          id: '4',
          title: 'Unity Game Development',
          description: 'Game development projects using Unity engine.',
          image: 'https://images.unsplash.com/photo-1538849527685-75c9f89ce685?q=80&w=1936&auto=format&fit=crop',
          tags: ['Game Development', 'Unity', 'Programming'],
          details: 'Created multiple games using Unity game engine, demonstrating programming skills, problem-solving abilities, and understanding of game mechanics. Developed interactive gameplay systems and user interfaces.'
        },
        {
          id: '5',
          title: 'Digital Marketing Analytics',
          description: 'Data analysis for marketing campaigns at Leap.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
          tags: ['Data Analysis', 'Marketing', 'Excel'],
          details: 'Analyzed social media data and web analytics to identify content trends and inform strategic marketing decisions. Maintained and updated comprehensive database of potential influencer partners using Excel and CRM tools. Prepared detailed reports on key performance indicators (KPIs) to measure campaign effectiveness and ROI.'
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
            Explore my portfolio of projects demonstrating expertise in cybersecurity, software development, and system architecture.
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
