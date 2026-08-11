/**
 * Single source of truth for every piece of content on the site.
 *
 * Everything here is sourced from Cameron_Price_Stats_Roadmap.md and the
 * resumes in Cam Stats. Update this file and the whole site follows.
 */

/** The four role types this portfolio is written for. Used to filter projects. */
export const TRACKS = [
  'IT Support',
  'Cloud Engineering',
  'Identity & Access',
  'Security Operations',
] as const;

export type Track = (typeof TRACKS)[number];

export const profile = {
  name: 'Cameron Price',
  location: 'Long Beach, CA 90807',
  email: 'cameronjordanprice562@yahoo.com',
  phone: '562-253-3505',
  github: 'https://github.com/CamPrice562',
  linkedin: 'https://www.linkedin.com/in/cameronprice562/',
  /** Rotating titles in the hero, matched to the four target role types. */
  titles: [
    'IT Support Specialist',
    'Cloud Engineer',
    'IAM Analyst',
    'Cloud Security Engineer',
  ],
  tagline:
    'IT Support & Security Analyst at Log(N) Pacific. Security+ and AZ-104 certified, finishing a B.S. in Computer Science.',
  summary:
    'I keep Windows fleets running and locked down, I build the cloud infrastructure they live in, and I automate who gets access to it.',
};

/** Headline numbers from the Log(N) Pacific role. Shown as a proof strip under the hero. */
export const stats = [
  {
    value: '200+',
    label: 'Endpoints hardened',
    detail: 'Windows 10/11 systems brought to DISA STIG baselines',
  },
  {
    value: '80%',
    label: 'Vulnerability reduction',
    detail: '100% of critical and 90% of high-severity findings closed',
  },
  {
    value: '100%',
    label: 'Brute-force drop',
    detail: 'Internet-facing brute-force incidents eliminated',
  },
  {
    value: '1st',
    label: 'Place, threat hunt',
    detail: 'First Blood, 1,925 of 1,925 points against 44 hunters',
  },
];

export const skillGroups = [
  {
    name: 'Support & Endpoint',
    track: 'IT Support' as Track,
    skills: [
      'Windows 10/11',
      'macOS',
      'Linux (Ubuntu, Kali)',
      'Active Directory',
      'Ticket triage & escalation',
      'Hardware troubleshooting',
      'Imaging & deployment',
      'End-user documentation',
    ],
  },
  {
    name: 'Cloud & Infrastructure',
    track: 'Cloud Engineering' as Track,
    skills: [
      'Microsoft Azure',
      'AWS',
      'Azure Virtual Machines',
      'Network Security Groups',
      'Terraform',
      'Git & GitHub Actions',
      'VMware / VirtualBox',
    ],
  },
  {
    name: 'Identity & Access',
    track: 'Identity & Access' as Track,
    skills: [
      'Microsoft Entra ID',
      'AWS IAM Identity Center',
      'Conditional Access',
      'SAML & SCIM federation',
      'Privileged Identity Management',
      'Joiner/Mover/Leaver lifecycle',
      'Microsoft Graph API',
    ],
  },
  {
    name: 'Security Operations & Automation',
    track: 'Security Operations' as Track,
    skills: [
      'Microsoft Sentinel',
      'KQL / Advanced Hunting',
      'Defender for Endpoint',
      'Tenable',
      'MITRE ATT&CK',
      'DISA STIGs',
      'PowerShell',
      'Python',
      'Wireshark',
    ],
  },
];

export const certifications = {
  held: [
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      note: 'Satisfies the DoD 8140 baseline for cyber defense work roles 511, 521, and 531',
    },
    {
      name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      issuer: 'Microsoft',
      note: 'Passed August 2026',
    },
    {
      name: 'Computer Hardware Technician',
      issuer: 'Long Beach City College',
      note: 'Certificate of Achievement',
    },
    {
      name: 'IT Essentials',
      issuer: 'Cisco Networking Academy',
      note: '',
    },
    {
      name: 'Microsoft Technology Associate: JavaScript Fundamentals',
      issuer: 'Microsoft',
      note: '',
    },
  ],
  inProgress: [
    {
      name: 'SC-300: Identity and Access Administrator',
      issuer: 'Microsoft',
      note: 'Next up',
    },
    {
      name: 'AZ-500: Azure Security Engineer',
      issuer: 'Microsoft',
      note: 'Planned',
    },
  ],
};

export interface Project {
  id: string;
  title: string;
  /** One line for the card face. */
  description: string;
  /** The single number or outcome worth leading with. */
  metric?: string;
  tracks: Track[];
  tech: string[];
  details: string;
  link?: string;
  /** Chooses the generated cover artwork. */
  cover: 'identity' | 'shield' | 'hunt' | 'terminal' | 'cloud';
}

export const projects: Project[] = [
  {
    id: 'multi-cloud-identity-baseline',
    title: 'Multi-Cloud Identity Baseline',
    description:
      'A real Entra tenant and a real AWS sandbox stood up side by side, with no shared admin credentials between them.',
    metric: 'Two clouds, one auditable baseline',
    tracks: ['Cloud Engineering', 'Identity & Access'],
    tech: ['Microsoft Entra ID', 'AWS IAM Identity Center', 'Architecture'],
    details:
      'The foundation the rest of my identity work is built on. I provisioned a Microsoft Entra tenant alongside an AWS sandbox account with IAM Identity Center enabled, documented both, and diagrammed how they federate. Deliberately kept as click-ops rather than infrastructure-as-code, because the goal at this stage was a baseline an auditor could review inside 30 days, not automation for its own sake.',
    link: 'https://github.com/CamPrice562/Multi-Cloud-Identity-Baseline',
    cover: 'identity',
  },
  {
    id: 'vulnerability-management',
    title: 'Azure Vulnerability Management Lifecycle',
    description:
      'A complete vulnerability management program on Azure infrastructure, from written policy through remediation closure.',
    metric: '80% total reduction, 100% of criticals closed',
    tracks: ['Cloud Engineering', 'Security Operations'],
    tech: ['Tenable', 'Azure', 'PowerShell', 'Policy'],
    details:
      'I built the program end to end rather than just running scans: authored the policy document, ran a simulated change advisory board to get remediation approved, automated the patching with PowerShell, and tracked findings through to verified closure. Total vulnerabilities fell 80%, including every critical finding and 90% of high-severity ones.',
    link: 'https://github.com/CamPrice562/vulnerability-management',
    cover: 'shield',
  },
  {
    id: 'stigs',
    title: 'Windows Endpoint Hardening Automation',
    description:
      'Idempotent PowerShell scripts that bring a Windows 11 machine to DISA STIG v2r6 compliance and keep it there.',
    metric: '10+ controls, 200+ endpoints in production',
    tracks: ['IT Support', 'Security Operations'],
    tech: ['PowerShell', 'Windows 11', 'DISA STIG v2r6'],
    details:
      'A repo of 10+ scripts covering account lockout policy, guest account access, UAC configuration, telemetry restriction, and network security settings. Each one is idempotent and can run individually or as a pipeline, so it produces the same result whether the machine starts compliant, half-configured, or untouched. These are the same scripts I use on 200+ endpoints at work.',
    link: 'https://github.com/CamPrice562/STIGS',
    cover: 'terminal',
  },
  {
    id: 'threat-hunts',
    title: 'Threat Hunts & Incident Reconstruction',
    description:
      'Full attack-chain reconstructions from raw endpoint telemetry, each mapped to MITRE ATT&CK with a detection gap analysis.',
    metric: '1st place and First Blood on a 44-hunter range',
    tracks: ['Security Operations'],
    tech: ['Microsoft Sentinel', 'KQL', 'MITRE ATT&CK', 'Incident Response'],
    details:
      'On "Just Another Day" I took 1st place with First Blood, the first of 44 hunters to reach the maximum 1,925 points, reconstructing an insider-fraud session across three hosts from logon, process, and file telemetry. On an earlier 48-hour Akira ransomware hunt I placed top 15, rebuilding the full attack chain across 47 days of data and writing up the defense evasion, credential dumping, and exfiltration techniques with recommendations for closing each detection gap.',
    link: 'https://github.com/CamPrice562/Threat-Hunts',
    cover: 'hunt',
  },
];

export type RoadmapStatus = 'Shipped' | 'In Progress' | 'Planned';

export interface RoadmapItem {
  number: number;
  title: string;
  pitch: string;
  status: RoadmapStatus;
  link?: string;
}

/**
 * The 12-project multi-cloud IAM portfolio. Each ships a real repo with a
 * README, architecture diagram, tests, and CI, plus a narrated demo video.
 */
export const roadmap: RoadmapItem[] = [
  {
    number: 1,
    title: 'Multi-Cloud Identity Baseline',
    pitch:
      'A real Entra tenant and a real AWS sandbox account, documented and diagrammed as the dual baseline every later project depends on.',
    status: 'Shipped',
    link: 'https://github.com/CamPrice562/Multi-Cloud-Identity-Baseline',
  },
  {
    number: 2,
    title: 'JML Foundations: HR-Driven Lifecycle',
    pitch:
      'Join/move/leave decision logic as pure Python functions over an HR export, fully tested before it touches any one platform.',
    status: 'In Progress',
  },
  {
    number: 3,
    title: 'Phishing-Resistant MFA & Conditional Access as Code',
    pitch:
      'Passkeys plus a Conditional Access policy defined in Terraform, so every change is a reviewable pull request instead of a silent portal click.',
    status: 'Planned',
  },
  {
    number: 4,
    title: 'Graph API User Audit',
    pitch:
      'A PowerShell module that finds stale and never-used accounts, backed by Pester tests that mock the Graph call entirely.',
    status: 'Planned',
  },
  {
    number: 5,
    title: 'Terraform for Entra ID',
    pitch:
      'Groups, role assignments, app registrations, and Conditional Access policies for a whole product team in a single apply.',
    status: 'Planned',
  },
  {
    number: 6,
    title: 'AWS IAM Identity Center via Terraform',
    pitch:
      'Permission sets and account assignments across a four-account org, synced from Entra over SCIM, with zero persistent IAM users.',
    status: 'Planned',
  },
  {
    number: 7,
    title: 'SAML & SCIM Federation: Okta to Salesforce',
    pitch:
      'Single sign-on plus automatic provisioning and deprovisioning across the full joiner/mover/leaver cycle, verifiable via a Postman collection.',
    status: 'Planned',
  },
  {
    number: 8,
    title: 'Privileged Access: PIM & Permission Boundaries',
    pitch:
      'Just-in-time admin activation on the Entra side, permission boundaries and break-glass on the AWS side. One principle, two clouds.',
    status: 'Planned',
  },
  {
    number: 9,
    title: 'Non-Human Identity Inventory',
    pitch:
      'Every service principal, managed identity, app registration, and AWS key inventoried across both clouds, with the riskiest flagged.',
    status: 'Planned',
  },
  {
    number: 10,
    title: 'Identity Threat Detection & Response',
    pitch:
      'KQL detections and SOC runbooks for password spray, impossible travel, and token theft, validated by a simulated attack that actually trips them.',
    status: 'Planned',
  },
  {
    number: 11,
    title: 'DevSecOps for IAM: Checkov in CI/CD',
    pitch:
      'One reusable workflow that scans every Terraform pull request for IAM misconfigurations and blocks the unsafe ones from merging.',
    status: 'Planned',
  },
  {
    number: 12,
    title: 'Capstone: Multi-Cloud Identity Landing Zone',
    pitch:
      'One repo that takes an empty state to a fully governed multi-cloud identity foundation in about four minutes.',
    status: 'Planned',
  },
];

export const experience = [
  {
    title: 'IT Support & Security Analyst',
    company: 'Log(N) Pacific',
    location: 'Long Beach, CA',
    period: 'March 2026 – Present',
    description:
      'Supporting and hardening a Windows fleet while running vulnerability management and live SOC alert triage across the same environment.',
    achievements: [
      'Hardened 200+ Windows 10/11 endpoints to DISA STIG baselines using 10 self-written PowerShell scripts covering account lockout, guest access, and telemetry controls.',
      'Ran the full vulnerability lifecycle across 200+ server assets in Tenable: authenticated scans, CVSS triage, remediation tickets, patch coordination, and closure tracking.',
      'Monitored Microsoft Sentinel with KQL Advanced Hunting across thousands of daily log events, investigating indicators of lateral movement, exfiltration, and credential abuse.',
      'Authored Defender for Endpoint detection rules and NSG firewall policy changes that eliminated internet-facing brute-force incidents entirely.',
      'Triaged live alerts from an 18-ticket SOC queue, classified each as true, false, or benign positive, mapped findings to MITRE ATT&CK, and documented them in Defender XDR.',
    ],
  },
];

export const priorExperience = [
  {
    title: 'Digital Marketing Intern',
    company: 'Leap (Remote)',
    period: 'June 2025 – September 2025',
    description:
      'Analyzed social media and web analytics data, maintained a partner database in Excel and CRM tools, and reported on campaign KPIs.',
  },
];

export const education = [
  {
    degree: 'B.S. Computer Science',
    institution: 'Southern New Hampshire University',
    year: 'Expected March 2027',
    details: 'GPA 4.0',
    courses: [
      'Data Structures & Algorithms',
      'Programming Languages',
      'Software Engineering',
      'Database Management',
      'Applied Linear Algebra',
    ],
  },
  {
    degree: 'A.S. Computer Science',
    institution: 'Long Beach City College',
    year: 'Completed',
    details: 'Long Beach, CA',
  },
];

export const activities = [
  {
    name: 'Log(N) Pacific Threat Hunt Range',
    role: 'Hunter',
    year: '2026 – Present',
    description:
      'Competitive threat hunting against simulated enterprise estates in Microsoft Sentinel, scored on flags captured and speed.',
    achievements: [
      'Took 1st place with First Blood on "Just Another Day," the first of 44 hunters to reach the maximum 1,925 points.',
      'Placed top 15 in a 48-hour Akira ransomware challenge, reconstructing the attack chain across 47 days of endpoint telemetry.',
      'Write up each hunt as a formal report with an executive summary, MITRE ATT&CK mapping, and detection gap analysis.',
    ],
  },
  {
    name: 'National Cyber League',
    role: 'Competitor',
    year: 'Ongoing',
    description:
      'Timed cybersecurity competition covering OSINT, cryptography, log analysis, and network traffic analysis.',
    achievements: [
      'Completed advanced challenges in OSINT, cryptography, and network traffic analysis.',
      'Used Wireshark and command-line tooling for packet and log analysis under time pressure.',
    ],
  },
  {
    name: 'Cybersecurity Club',
    role: 'Member',
    year: 'August 2025 – Present',
    description:
      'Long Beach City College. Group labs, capture-the-flag practice, and peer study for security certifications.',
  },
];

/** Tools I built for myself that ended up mattering to the work. */
export const tooling = [
  {
    name: 'SRT & Video Composer',
    description:
      'An Adobe Premiere CEP extension driving a three-pass AI prompt chain that turns silent screen recordings into subtitled, narrated demo videos. Built to document the IAM roadmap projects without spending hours per video in an editor.',
  },
  {
    name: 'MCP Tooling Stack',
    description:
      'GitHub, Playwright, Context7, and Exa wired into a local AI development environment, so project scaffolding, docs lookup, and browser testing all run from one place.',
  },
];
