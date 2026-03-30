
import React from 'react';
import PDFViewer from '@/components/resume/PDFViewer';
import { Download, FileText, Award, Briefcase, GraduationCap, Code, Shield, ExternalLink } from 'lucide-react';

const Resume = () => {
  // We'd use a real PDF URL in production
  const resumePdfUrl = '/Cameron_Price_Resume.pdf';
  
  // Resume data based on Cameron's experience
  const resumeData = {
    experience: [
      {
        title: "Cybersecurity Intern",
        company: "The Cyber Range",
        period: "2025 - Present",
        description: "Gaining hands-on cybersecurity experience with enterprise security tools and real-world threat scenarios.",
        achievements: [
          "Work with enterprise security tools including Tenable for vulnerability management",
          "Utilize Microsoft Defender for Endpoint (MDE) for threat detection and response",
          "Gain practical experience with Azure cloud security services and configurations",
          "Practice threat hunting and incident response in controlled environment",
          "Apply security policies and procedures in enterprise-like settings"
        ]
      },
      {
        title: "Digital Marketing Intern",
        company: "Leap - Remote Position",
        period: "June 2025 - September 2025",
        description: "Analyzed social media data and web analytics to inform strategic marketing decisions.",
        achievements: [
          "Analyzed social media data and web analytics to identify content trends and inform strategic marketing decisions",
          "Maintained and updated comprehensive database of potential influencer partners using Excel and CRM tools",
          "Prepared detailed reports on key performance indicators (KPIs) to measure campaign effectiveness and ROI",
          "Collaborated with cross-functional teams to implement data-driven marketing strategies"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        institution: "Southern New Hampshire University",
        year: "Expected December 2026",
        details: "Manchester, NH",
        courses: [
          "Cybersecurity Fundamentals",
          "Network Security",
          "Database Management",
          "Software Engineering"
        ]
      },
      {
        degree: "Associate of Science in Computer Science",
        institution: "Long Beach City College",
        year: "Completed",
        details: "Long Beach, CA"
      }
    ],
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "HTML/CSS",
      "SQL",
      "PowerShell",
      "Windows 10/11",
      "macOS",
      "Linux (Ubuntu, Kali Linux)",
      "Active Directory",
      "Wireshark",
      "Nmap",
      "Metasploit",
      "VirtualBox",
      "VMware",
      "Risk Assessment",
      "Network Security",
      "System Hardening",
      "OSINT",
      "Cryptography"
    ],
    certifications: [
      "CompTIA A+ (Expected November 2025)",
      "CompTIA Security+",
      "Certificate of Achievement: Computer Hardware Technician (Long Beach City College)",
      "IT Essentials Certification (Cisco Networking Academy)",
      "Microsoft Technology Associate (MTA): JavaScript Fundamentals"
    ],
    projects: [
      {
        name: "Vulnerability Management",
        role: "Security Analyst",
        year: "2025",
        description: "Enterprise vulnerability management program implementation using Tenable and Azure infrastructure with comprehensive policy development and stakeholder management.",
        link: "https://github.com/CamPrice562/vulnerability-management/tree/main",
        details: "Developed and implemented a complete vulnerability management program including policy creation, stakeholder buy-in meetings, remediation workflows, and CAB processes. Used Tenable for scanning and Azure VMs for infrastructure, with PowerShell scripts for automated remediation."
      },
      {
        name: "STIGs and System Hardening",
        role: "Security Engineer",
        year: "2025",
        description: "PowerShell remediation scripts for DISA Windows 11 STIG v2r6 compliance with automated security hardening.",
        link: "https://github.com/CamPrice562/STIGS",
        details: "Created comprehensive PowerShell scripts to remediate DISA Windows 11 STIG violations. Implemented 10+ security controls including account lockout policies, UAC configuration, telemetry restrictions, and network security settings. Each script targets specific STIG controls with detailed explanations and verification methods."
      },
      {
        name: "Threat Hunting",
        role: "Threat Hunter",
        year: "2025",
        description: "Proactive threat detection and hunting exercises using enterprise security tools and methodologies.",
        link: "https://github.com/CamPrice562/Threat-Hunts",
        details: "Conducted threat hunting exercises using command-line tools and log analysis to identify potential compromises before automated alerts. Focused on proactive defense strategies and early threat detection in enterprise environments."
      }
    ],
    activities: [
      {
        name: "National Cyber League (NCL) Competitions",
        role: "Competitor",
        year: "Ongoing",
        description: "Competitive cybersecurity challenges demonstrating practical skills in time-constrained environments.",
        achievements: [
          "Completed advanced challenges in OSINT, Cryptography, and Network Traffic Analysis",
          "Maintained top 25% ranking in regional competitions",
          "Utilized industry-standard tools including Wireshark for packet analysis",
          "Demonstrated practical cybersecurity skills under pressure"
        ]
      },
      {
        name: "The Cyber Range Training",
        role: "Security Intern",
        year: "2025 - Present",
        description: "Hands-on cybersecurity training with enterprise security tools and real-world scenarios.",
        achievements: [
          "Practice threat hunting and incident response in controlled environments",
          "Work with enterprise security tools including Tenable and MDE",
          "Apply security policies and procedures in enterprise-like settings",
          "Develop practical skills in vulnerability management and cloud security"
        ]
      }
    ]
  };
  
  return (
    <div className="min-h-screen bg-cyber-dark">
      <div className="pt-24 pb-12 bg-cyber-darker relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-dark"></div>
        
        <div className="cyber-container relative z-10">
          <div className="text-center">
            <h1 className="font-tech text-4xl md:text-5xl font-bold text-white mb-2">
              <span className="text-glow">Experience</span>
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A detailed overview of my professional experience, skills, and qualifications in the cybersecurity domain.
            </p>
          </div>
        </div>
      </div>
      
      {/* Resume Details */}
      <section className="py-12 bg-cyber-dark">
        <div className="cyber-container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Experience Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <Briefcase size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Professional Experience</h2>
              </div>
              
              <div className="space-y-8">
                {resumeData.experience.map((job, index) => (
                  <div key={index} className={`card-cyber p-6 ${index % 2 === 0 ? 'bg-cyber-darker' : 'bg-cyber-dark'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{job.title}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {job.period}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-4">{job.company}</div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                    <ul className="list-disc list-inside text-gray-300 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <Code size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Projects</h2>
              </div>
              
              <div className="space-y-6">
                {resumeData.projects.map((project, index) => (
                  <div key={index} className={`card-cyber p-6 ${index % 2 === 0 ? 'bg-cyber-darker' : 'bg-cyber-dark'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{project.name}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">
                        {project.year}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-2">{project.role}</div>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    {project.details && (
                      <p className="text-gray-400 text-sm mb-4">{project.details}</p>
                    )}
                    {project.link && (
                      <a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer" 
                        className="inline-flex items-center text-cyber-green hover:text-cyber-purple transition-colors text-sm"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <Award size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Activities</h2>
              </div>
              
              <div className="space-y-6">
                {resumeData.activities.map((activity, index) => (
                  <div key={index} className={`card-cyber p-6 ${index % 2 === 0 ? 'bg-cyber-darker' : 'bg-cyber-dark'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{activity.name}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">
                        {activity.year}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-2">{activity.role}</div>
                    <p className="text-gray-300 mb-4">{activity.description}</p>
                    {activity.achievements && (
                      <div>
                        <h4 className="text-white font-medium mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside text-gray-300 space-y-1">
                          {activity.achievements.map((achievement, i) => (
                            <li key={i}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <GraduationCap size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Education</h2>
              </div>
              
              <div className="space-y-6">
                {resumeData.education.map((edu, index) => (
                  <div key={index} className={`card-cyber p-6 ${index % 2 === 0 ? 'bg-cyber-darker' : 'bg-cyber-dark'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-tech text-xl font-semibold text-white">{edu.degree}</h3>
                      <span className="bg-cyber-purple/10 text-cyber-purple text-xs px-2 py-1 rounded-md">
                        {edu.year}
                      </span>
                    </div>
                    <div className="text-cyber-purple font-medium mb-2">{edu.institution}</div>
                    <p className="text-gray-300 mb-2">{edu.details}</p>
                    {edu.courses && (
                      <div>
                        <h4 className="text-white font-medium mb-2">Relevant Courses:</h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, i) => (
                            <span 
                              key={i}
                              className="px-2 py-1 bg-cyber-purple/10 text-cyber-purple text-xs rounded-md"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Skills Column */}
            <div>
              <div className="flex items-center mb-6">
                <Award size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Skills & Expertise</h2>
              </div>
              
              <div className="card-cyber p-6">
                <div className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-3 py-2 bg-cyber-purple/10 text-cyber-purple text-sm rounded-md"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center mb-6 mt-12">
                <Shield size={24} className="text-cyber-purple mr-3" />
                <h2 className="font-tech text-2xl font-bold text-white">Certifications</h2>
              </div>
              
              <div className="card-cyber p-6">
                <ul className="space-y-4">
                  {resumeData.certifications.map((cert, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-2 h-2 bg-cyber-purple rounded-full mr-3"></span>
                      <span className="text-gray-300">{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;
