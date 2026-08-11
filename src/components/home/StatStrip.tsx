import React from 'react';
import { stats } from '@/data/portfolio';

/**
 * Hard numbers from the Log(N) Pacific role, sitting directly under the hero
 * so the strongest evidence is the first thing a recruiter reads.
 */
const StatStrip = () => {
  return (
    <section className="py-12 bg-cyber-darker border-y border-cyber-purple/10 relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="cyber-container relative z-10">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-gray-500 mb-8">
          On the job at Log(N) Pacific
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center px-2 lg:border-r lg:border-cyber-purple/10 lg:last:border-r-0"
            >
              <div className="font-tech text-3xl sm:text-4xl font-bold text-cyber-purple [text-shadow:0_0_12px_rgba(20,184,166,0.5)]">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-white">{stat.label}</div>
              <p className="mt-2 text-xs text-gray-400 leading-relaxed">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatStrip;
