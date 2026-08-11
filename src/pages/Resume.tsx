import React from 'react';
import { Award, Briefcase, GraduationCap, Trophy, Shield, CircleDashed } from 'lucide-react';
import {
  activities,
  certifications,
  education,
  experience,
  priorExperience,
  skillGroups,
} from '@/data/portfolio';

const Resume = () => {
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="pt-24 pb-12 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 header-fade dither"></div>

        <div className="cyber-container relative z-10">
          <div className="text-center">
            <h1 className="font-tech text-4xl md:text-5xl font-bold text-white mb-2">
              <span className="text-glow">Experience</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Where I work, what I have shipped, and what I am certified in.
            </p>
          </div>
        </div>
      </div>

      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main column */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Briefcase size={22} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Professional Experience</h2>
              </div>

              <div className="space-y-8">
                {experience.map((job) => (
                  <div key={job.company} className="card-cyber p-6">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{job.title}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-1">{job.company}</div>
                    <div className="text-gray-500 text-sm mb-4">{job.location}</div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <ul className="space-y-2.5">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="flex text-gray-300 text-sm leading-relaxed">
                          <span className="text-cyber-purple mr-3 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-purple"></span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {priorExperience.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-gray-500 text-xs uppercase tracking-[0.2em] mb-3">Prior Experience</h3>
                  <div className="space-y-3">
                    {priorExperience.map((job) => (
                      <div
                        key={job.company}
                        className="border-l-2 border-gray-800 pl-4 py-1"
                      >
                        <div className="flex flex-wrap items-baseline gap-x-3">
                          <span className="text-gray-300 text-sm font-medium">{job.title}</span>
                          <span className="text-gray-500 text-sm">{job.company}</span>
                          <span className="text-gray-600 text-xs">{job.period}</span>
                        </div>
                        <p className="text-gray-500 text-sm mt-1">{job.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center mb-6 mt-12">
                <Trophy size={22} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Competitions & Activities</h2>
              </div>

              <div className="space-y-6">
                {activities.map((activity) => (
                  <div key={activity.name} className="card-cyber p-6">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-tech text-lg font-semibold text-white">{activity.name}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {activity.year}
                      </span>
                    </div>
                    <div className="text-cyber-purple text-sm font-medium mb-2">{activity.role}</div>
                    <p className="text-gray-300 text-sm mb-4">{activity.description}</p>
                    {activity.achievements && (
                      <ul className="space-y-2">
                        {activity.achievements.map((achievement, i) => (
                          <li key={i} className="flex text-gray-400 text-sm leading-relaxed">
                            <span className="text-cyber-purple mr-3 mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-cyber-purple"></span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              <div className="flex items-center mb-6 mt-12">
                <GraduationCap size={22} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Education</h2>
              </div>

              <div className="space-y-6">
                {education.map((edu) => (
                  <div key={edu.degree} className="card-cyber p-6">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                      <h3 className="font-tech text-lg font-semibold text-white">{edu.degree}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-2">{edu.institution}</div>
                    <p className="text-gray-400 text-sm mb-3">{edu.details}</p>
                    {edu.courses && (
                      <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course) => (
                          <span
                            key={course}
                            className="px-2 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded-md"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center mb-6">
                  <Shield size={22} className="text-cyber-purple mr-3" />
                  <h2 className="font-tech text-xl font-bold text-white">Certifications</h2>
                </div>

                <div className="card-cyber p-6">
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

                  <div className="flex items-center mt-6 mb-4 pt-5 border-t border-cyber-purple/10">
                    <CircleDashed size={16} className="text-gray-500 mr-2" />
                    <span className="text-gray-400 text-xs uppercase tracking-wide">In Progress</span>
                  </div>
                  <ul className="space-y-3">
                    {certifications.inProgress.map((cert) => (
                      <li key={cert.name} className="border-l-2 border-gray-700 pl-4">
                        <div className="text-gray-300 text-sm">{cert.name}</div>
                        <div className="text-gray-500 text-xs mt-0.5">{cert.note}</div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Award size={22} className="text-cyber-purple mr-3" />
                  <h2 className="font-tech text-xl font-bold text-white">Skills</h2>
                </div>

                <div className="space-y-4">
                  {skillGroups.map((group) => (
                    <div key={group.name} className="card-cyber p-5">
                      <h3 className="font-tech text-xs font-semibold text-cyber-purple uppercase tracking-wide mb-3">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
