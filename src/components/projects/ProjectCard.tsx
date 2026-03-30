
import React from 'react';
import { ExternalLink } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  details?: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const CardContent = () => (
    <div className="card-cyber group relative overflow-hidden h-full cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)]">
      <div className="h-48 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyber-darker via-cyber-darker/50 to-transparent opacity-80"></div>
        {project.link && (
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-cyber-purple/90 text-white p-2 rounded-full">
              <ExternalLink size={16} />
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 relative z-10">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <h3 className="text-xl font-tech font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors">{project.title}</h3>
        <p className="text-gray-400 text-sm">{project.description}</p>
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full"
      >
        <CardContent />
      </a>
    );
  }

  return <CardContent />;
};

export default ProjectCard;

