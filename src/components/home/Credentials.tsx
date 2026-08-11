import React from 'react';
import { BadgeCheck, CircleDashed } from 'lucide-react';
import { certifications, skillGroups } from '@/data/portfolio';

/**
 * Certifications held vs. in progress, and skills grouped by the four role
 * types the site is written for, so each reader finds their column.
 */
const Credentials = () => {
  return (
    <section id="credentials" className="py-20 bg-cyber-dark relative overflow-hidden">
      <div className="absolute inset-0 cyber-grid opacity-10"></div>

      <div className="cyber-container relative z-10">
        <div className="max-w-2xl mb-12">
          <h2 className="font-tech text-3xl font-bold text-white">
            Certifications & <span className="text-glow">Skills</span>
          </h2>
          <p className="mt-2 text-gray-400">
            What I hold today, what I am studying for next, and the tools I work in.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          <div className="card-cyber p-6 lg:col-span-2">
            <div className="flex items-center mb-5">
              <BadgeCheck size={20} className="text-cyber-purple mr-2" />
              <h3 className="font-tech text-lg font-semibold text-white">Certified</h3>
            </div>
            <ul className="space-y-4">
              {certifications.held.map((cert) => (
                <li key={cert.name} className="border-l-2 border-cyber-purple/40 pl-4">
                  <div className="text-white text-sm font-medium">{cert.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {cert.issuer}
                    {cert.note && ` · ${cert.note}`}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="card-cyber p-6">
            <div className="flex items-center mb-5">
              <CircleDashed size={20} className="text-gray-500 mr-2" />
              <h3 className="font-tech text-lg font-semibold text-white">In Progress</h3>
            </div>
            <ul className="space-y-4">
              {certifications.inProgress.map((cert) => (
                <li key={cert.name} className="border-l-2 border-gray-700 pl-4">
                  <div className="text-gray-300 text-sm font-medium">{cert.name}</div>
                  <div className="text-gray-500 text-xs mt-0.5">
                    {cert.issuer}
                    {cert.note && ` · ${cert.note}`}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div key={group.name} className="card-cyber p-6">
              <h3 className="font-tech text-sm font-semibold text-cyber-purple uppercase tracking-wide mb-4">
                {group.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-cyber-purple/10 text-gray-300 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
