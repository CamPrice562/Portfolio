import React from 'react';
import { ExternalLink } from 'lucide-react';
import ProjectCover from './ProjectCover';
import type { Project } from '@/data/portfolio';

export type { Project };

interface ProjectCardProps {
  project: Project;
  /** Compact cards drop the long detail paragraph. Used on the home page. */
  compact?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, compact = false }) => {
  const CardBody = () => (
    <div className="card-cyber group relative overflow-hidden h-full flex flex-col transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(20,184,166,0.35)]">
      <div className="h-40 overflow-hidden relative shrink-0">
        <ProjectCover
          variant={project.cover}
          className="w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        {project.link && (
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-cyber-purple/90 text-cyber-darker p-2 rounded-full">
              <ExternalLink size={14} />
            </div>
          </div>
        )}
      </div>

      <div className="p-6 relative z-10 flex flex-col flex-grow">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.tracks.map((track) => (
            <span
              key={track}
              className="px-2 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded-md"
            >
              {track}
            </span>
          ))}
        </div>

        <h3 className="text-xl font-tech font-bold text-white mb-2 group-hover:text-cyber-purple transition-colors">
          {project.title}
        </h3>

        {project.metric && (
          <p className="text-cyber-purple text-sm font-medium mb-2">{project.metric}</p>
        )}

        <p className="text-gray-400 text-sm">{project.description}</p>

        {!compact && (
          <>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">{project.details}</p>

            <div className="flex flex-wrap gap-2 mt-5 pt-4 border-t border-cyber-purple/10">
              {project.tech.map((item) => (
                <span key={item} className="text-xs text-gray-500">
                  {item}
                </span>
              ))}
            </div>
          </>
        )}

        {project.link && (
          <span className="inline-flex items-center text-cyber-purple text-sm mt-4 pt-0 group-hover:underline">
            View on GitHub
            <ExternalLink size={14} className="ml-1.5" />
          </span>
        )}
      </div>
    </div>
  );

  if (project.link) {
    return (
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block h-full">
        <CardBody />
      </a>
    );
  }

  return <CardBody />;
};

export default ProjectCard;
