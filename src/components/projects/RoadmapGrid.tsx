import React from 'react';
import { ExternalLink } from 'lucide-react';
import { roadmap, type RoadmapStatus } from '@/data/portfolio';

const statusStyles: Record<RoadmapStatus, string> = {
  Shipped: 'bg-cyber-purple/15 text-cyber-purple border-cyber-purple/40',
  'In Progress': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  Queued: 'bg-gray-700/30 text-gray-500 border-gray-700',
};

const cardStyles: Record<RoadmapStatus, string> = {
  Shipped: 'border-cyber-purple/30 hover:border-cyber-purple/60',
  'In Progress': 'border-amber-500/20 hover:border-amber-500/40',
  Queued: 'border-gray-800 hover:border-gray-700',
};

/**
 * The 12-project multi-cloud identity build pipeline, shown at a glance with
 * honest status badges so shipped work is never confused with queued work.
 */
const RoadmapGrid = () => {
  const shipped = roadmap.filter((item) => item.status === 'Shipped').length;
  const inProgress = roadmap.filter((item) => item.status === 'In Progress').length;

  return (
    <section className="py-16 bg-cyber-darker relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="cyber-container relative z-10">
        <div className="max-w-3xl mb-10">
          <h2 className="font-tech text-3xl font-bold text-white">
            Cloud Identity &amp; <span className="text-glow">Security Engineering</span>
          </h2>
          <p className="mt-3 text-gray-400">
            Twelve identity projects across Microsoft Entra and AWS, each scoped like a real work ticket and shipped as
            a repo with a README, architecture diagram, tests, and CI. Number 12 ties every prior stage into a single
            landing zone that applies from an empty state.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
            <span className="flex items-center gap-2 text-cyber-purple">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple"></span>
              {shipped} shipped
            </span>
            <span className="flex items-center gap-2 text-amber-400">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
              {inProgress} in progress
            </span>
            <span className="flex items-center gap-2 text-gray-500">
              <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span>
              {roadmap.length - shipped - inProgress} queued
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {roadmap.map((item) => {
            const inner = (
              <>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className="font-tech text-xs text-gray-600">
                    {String(item.number).padStart(2, '0')}
                  </span>
                  <span
                    className={`text-[10px] uppercase tracking-wide px-2 py-0.5 rounded border ${statusStyles[item.status]}`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3
                  className={`font-tech text-sm font-semibold mb-2 ${
                    item.status === 'Queued' ? 'text-gray-400' : 'text-white'
                  }`}
                >
                  {item.title}
                </h3>

                <p className="text-xs text-gray-500 leading-relaxed">{item.pitch}</p>

                {item.link && (
                  <span className="inline-flex items-center text-cyber-purple text-xs mt-3">
                    View repo
                    <ExternalLink size={12} className="ml-1" />
                  </span>
                )}
              </>
            );

            const className = `bg-cyber-dark rounded-lg border p-5 h-full transition-colors duration-300 ${cardStyles[item.status]}`;

            return item.link ? (
              <a
                key={item.number}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block ${className}`}
              >
                {inner}
              </a>
            ) : (
              <div key={item.number} className={className}>
                {inner}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RoadmapGrid;
