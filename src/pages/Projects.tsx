import React, { useState } from 'react';
import ProjectCard from '@/components/projects/ProjectCard';
import RoadmapGrid from '@/components/projects/RoadmapGrid';
import { Filter } from 'lucide-react';
import { projects, tooling, TRACKS, type Track } from '@/data/portfolio';

type FilterValue = Track | 'All';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<FilterValue>('All');

  const filters: FilterValue[] = ['All', ...TRACKS];

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tracks.includes(activeFilter));

  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="pt-24 pb-16 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 header-fade dither"></div>

        <div className="cyber-container relative z-10">
          <h1 className="font-tech text-4xl md:text-5xl font-bold text-white mb-4 text-center">
            <span className="text-glow">Projects</span>
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-center">
            Work that runs, not work that was clicked. Every project below is a live repo. Filter by the kind of role
            you are hiring for.
          </p>
        </div>
      </div>

      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          <div className="mb-10 border-b border-gray-800 pb-5">
            <div className="flex items-center mb-4">
              <Filter size={16} className="text-cyber-purple mr-2" />
              <span className="text-gray-400 text-sm font-medium">Filter by focus</span>
            </div>

            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-md text-sm transition-all ${
                    activeFilter === filter
                      ? 'bg-cyber-purple text-cyber-darker font-medium'
                      : 'bg-cyber-darker text-gray-300 hover:bg-cyber-purple/20'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {visibleProjects.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
              {visibleProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-300 mb-2">Nothing here yet</h3>
              <p className="text-gray-400">No projects match that filter.</p>
            </div>
          )}
        </div>
      </section>

      <RoadmapGrid />

      <section className="py-16 bg-cyber-dark relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>

        <div className="cyber-container relative z-10">
          <div className="max-w-3xl mb-8">
            <h2 className="font-tech text-2xl font-bold text-white">
              Tools I <span className="text-glow">Built for Myself</span>
            </h2>
            <p className="mt-2 text-gray-400">
              Side infrastructure that came out of needing something that did not exist yet.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tooling.map((tool) => (
              <div key={tool.name} className="card-cyber p-6">
                <h3 className="font-tech text-lg font-semibold text-white mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
