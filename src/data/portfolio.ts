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
  location: 'Long Beach, CA (Remote)',
  email: 'cameronjordanprice562@yahoo.com',
  phone: '562-253-3505',
  github: 'https://github.com/CamPrice562',
  linkedin: 'https://www.linkedin.com/in/cameronprice562/',
  /** Rotating titles in the hero, matched to target role types. */
  titles: [
    'End User Computing I',
    'Service Desk',
    'Cloud Security Engineer',
  ],
  /** Current position, shown as metadata rather than repeated in prose. */
  role: 'IT Support & Security Analyst Intern',
  company: 'Log(N) Pacific',
  /**
   * The one sentence in the hero. Deliberately carries no credentials, since
   * the chips below it own that job. Prose narrates, chips prove.
   */
  summary:
    'Customer-first service desk professional and first point of contact for 200+ end users across Windows 10/11 and macOS, managing incidents, access control, and ServiceNow automation.',
};

/**
 * The hero's credential chips. These are the only place credentials appear
 * above the fold, so nothing is stated twice.
 */
export const heroCredentials: Array<{
  label: string;
  status: 'held' | 'in-progress';
  note?: string;
}> = [
  { label: 'AZ-104 Azure Administrator', status: 'held' },
  { label: 'CompTIA Security+', status: 'held' },
  { label: 'B.S. Computer Science', status: 'in-progress', note: 'expected 2027' },
];

/** Headline numbers from the Log(N) Pacific role. Shown as a proof strip under the hero. */
export const stats = [
  {
    value: '200+',
    label: 'Endpoints supported',
    detail: 'Windows 10/11 & macOS systems supported, hardened, and maintained',
  },
  {
    value: '10+',
    label: 'PowerShell scripts',
    detail: 'Automating Windows 11 configuration and security baselines',
  },
  {
    value: '80%',
    label: 'Vulnerability reduction',
    detail: '100% of critical and 90% of high-severity findings closed',
  },
  {
    value: '1st',
    label: 'Place, threat hunt',
    detail: 'First Blood, 1,925 of 1,925 points against 44 hunters',
  },
];

export const skillGroups = [
  {
    name: 'Service Desk Operations',
    track: 'IT Support' as Track,
    skills: [
      'Incident & Request Lifecycle',
      'ServiceNow (Service Catalog, Flow Designer)',
      'Assignment-Group Routing & SLA Definitions',
      'Tier 2/3 Escalation',
      'Phone, Email, Chat & Ticketing Intake',
      'Microsoft Sentinel & Defender XDR Queues',
      'Knowledge Base Documentation',
    ],
  },
  {
    name: 'End-User Support & Hardware',
    track: 'IT Support' as Track,
    skills: [
      'Windows 10/11 & macOS Troubleshooting',
      'Hardware Diagnostics & Repair',
      'Imaging & Deployment',
      'Mobile Devices',
      'Printers & Peripherals',
      'Remote & In-Person Support',
    ],
  },
  {
    name: 'Identity & Access Management',
    track: 'Identity & Access' as Track,
    skills: [
      'Active Directory Provisioning / Deprovisioning',
      'Password Resets & MFA Troubleshooting',
      'Security Group Membership & Access Control',
      'Group Policy (GPO)',
      'Microsoft Entra ID',
    ],
  },
  {
    name: 'Collaboration, Cloud & Security',
    track: 'Cloud Engineering' as Track,
    skills: [
      'Microsoft 365, Teams & Exchange/Outlook',
      'VPN & Remote Access',
      'Microsoft Azure (VMs, Entra ID)',
      'Microsoft Defender for Endpoint & KQL',
      'PowerShell (10+ deployed scripts)',
      'Python',
      'Network Security Fundamentals',
    ],
  },
];

export const certifications = {
  held: [
    {
      name: 'Microsoft Certified: Azure Administrator Associate (AZ-104)',
      issuer: 'Microsoft',
      note: 'Cloud identity, RBAC, and infrastructure administration',
    },
    {
      name: 'CompTIA Security+',
      issuer: 'CompTIA',
      note: 'Security fundamentals, access control, incident response',
    },
    {
      name: 'Computer Hardware Technician Certificate',
      issuer: 'Long Beach City College',
      note: 'Certificate of Achievement · LBCC | IT Essentials, Cisco Networking Academy',
    },
    {
      name: 'IT Essentials',
      issuer: 'Cisco Networking Academy',
      note: 'Hardware, software & networking essentials',
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
  cover: 'identity' | 'shield' | 'hunt' | 'terminal' | 'cloud' | 'workflow';
}

export const projects: Project[] = [
  {
    id: 'servicenow-employee-lifecycle',
    title: 'Employee Lifecycle Automation (ServiceNow)',
    description:
      'Service Catalog request and Flow Designer automation routing onboarding IT tasks to three assignment groups with SLA tracking.',
    metric: '3 assignment groups automated, real-time SLA tracking',
    tracks: ['IT Support', 'Identity & Access'],
    tech: ['ServiceNow', 'Flow Designer', 'Service Catalog', 'ITSM', 'SLA Definitions'],
    details:
      'Replaced a manual onboarding email chain, where setup steps routinely went unowned, with a Service Catalog request and Flow Designer automation that generates and routes IT tasks to three assignment groups in real time, with an SLA anchored to the employee start date. Diagnosed a platform scripting failure by tracing execution in ServiceNow Flow Context, isolating a null-reference root cause the builder interface had reported as successful.',
    link: 'https://github.com/CamPrice562/servicenow-employee-lifecycle',
    cover: 'workflow',
  },
  {
    id: 'stigs',
    title: 'Windows System Configuration Automation',
    description:
      'Idempotent PowerShell scripts that automate Windows 11 endpoint configuration, DISA STIG hardening, and registry management.',
    metric: '10+ scripts, 200+ endpoints in production',
    tracks: ['IT Support', 'Security Operations'],
    tech: ['PowerShell', 'Windows 11', 'DISA STIG v2r6', 'Registry Automation'],
    details:
      'Wrote 10+ idempotent PowerShell scripts automating Windows 11 endpoint configuration and hardening, reusable across systems in varying baseline states. A repo covering account lockout policy, guest account access, UAC configuration, telemetry restriction, and network security settings. Each one is idempotent and can run individually or as a pipeline, so it produces the same result whether the machine starts compliant, half-configured, or untouched.',
    link: 'https://github.com/CamPrice562/STIGS',
    cover: 'terminal',
  },
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

export type RoadmapStatus = 'Shipped' | 'In Progress' | 'Queued';

export interface RoadmapItem {
  number: number;
  title: string;
  pitch: string;
  status: RoadmapStatus;
  link?: string;
}

/**
 * The 12-project Cloud Security Engineer portfolio. Each ships a real repo with a
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
    status: 'Queued',
  },
  {
    number: 4,
    title: 'Graph API User Audit',
    pitch:
      'A PowerShell module that finds stale and never-used accounts, backed by Pester tests that mock the Graph call entirely.',
    status: 'Queued',
  },
  {
    number: 5,
    title: 'Terraform for Entra ID',
    pitch:
      'Groups, role assignments, app registrations, and Conditional Access policies for a whole product team in a single apply.',
    status: 'Queued',
  },
  {
    number: 6,
    title: 'AWS IAM Identity Center via Terraform',
    pitch:
      'Permission sets and account assignments across a four-account org, synced from Entra over SCIM, with zero persistent IAM users.',
    status: 'Queued',
  },
  {
    number: 7,
    title: 'SAML & SCIM Federation: Okta to Salesforce',
    pitch:
      'Single sign-on plus automatic provisioning and deprovisioning across the full joiner/mover/leaver cycle, verifiable via a Postman collection.',
    status: 'Queued',
  },
  {
    number: 8,
    title: 'Privileged Access: PIM & Permission Boundaries',
    pitch:
      'Just-in-time admin activation on the Entra side, permission boundaries and break-glass on the AWS side. One principle, two clouds.',
    status: 'Queued',
  },
  {
    number: 9,
    title: 'Non-Human Identity Inventory',
    pitch:
      'Every service principal, managed identity, app registration, and AWS key inventoried across both clouds, with the riskiest flagged.',
    status: 'Queued',
  },
  {
    number: 10,
    title: 'Identity Threat Detection & Response',
    pitch:
      'KQL detections and SOC runbooks for password spray, impossible travel, and token theft, validated by a simulated attack that actually trips them.',
    status: 'Queued',
  },
  {
    number: 11,
    title: 'DevSecOps for IAM: Checkov in CI/CD',
    pitch:
      'One reusable workflow that scans every Terraform pull request for IAM misconfigurations and blocks the unsafe ones from merging.',
    status: 'Queued',
  },
  {
    number: 12,
    title: 'Capstone: Multi-Cloud Identity Landing Zone',
    pitch:
      'One repo that takes an empty state to a fully governed multi-cloud identity foundation in about four minutes.',
    status: 'Queued',
  },
];

export const experience = [
  {
    title: 'IT Support & Security Analyst Intern',
    company: 'Log(N) Pacific',
    location: 'Long Beach, CA',
    period: 'March 2026 – Present',
    description:
      'First point of contact for 200+ end users across Windows 10/11 and macOS, managing incident triage, identity & access, M365 support, endpoint automation, and security monitoring.',
    achievements: [
      'Serve as first point of contact for 200+ end users, taking IT support requests by phone, email, and ticketing system, then diagnosing and resolving hardware, software, and network issues across Windows 10/11 and macOS devices.',
      'Handle identity and access requests daily: Active Directory account provisioning and deprovisioning, password resets, MFA troubleshooting, security group membership, and access control changes.',
      'Log, prioritize, and manage incidents and service requests through resolution, escalating to senior engineering with written summaries complete enough to be picked up without a handoff call.',
      'Act as a go-to resource for teammates and non-technical users on Microsoft Azure, virtual machine provisioning, and Tenable configuration, explaining each step in plain language so the fix sticks instead of returning as a repeat ticket.',
      'Support Microsoft 365, Teams, Exchange and Outlook, and VPN connectivity, including mailbox and license provisioning and remote access troubleshooting for off-site users.',
      'Troubleshoot and repair endpoint hardware, printers, and peripherals; image, configure, and deploy replacement systems to a consistent standard.',
      'Cut manual setup time by automating recurring Windows configuration and security-baseline tasks with 10 self-written PowerShell scripts, removing error-prone manual registry edits from the process.',
      'Coordinate with infrastructure and application teams to schedule, communicate, and validate patch deployments, tracking remediation status to closure across all managed systems.',
      'Monitor security alerts in Microsoft Sentinel using KQL and investigate in Defender XDR; authored Microsoft Defender for Endpoint detection rules that eliminated recurring brute-force sign-in incidents.',
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
    details: 'Long Beach, CA · Cybersecurity Club Member',
  },
];

export const activities = [
  {
    name: 'Online IT Practitioner Community',
    role: 'Peer Support Contributor',
    year: 'Ongoing',
    description:
      'Community peer support on Microsoft Azure, virtual machine provisioning, and enterprise security tooling.',
    achievements: [
      'Provide technical guidance and troubleshooting assistance on Azure VM setups and security tool configurations.',
      'Explain complex troubleshooting steps in plain language to help junior practitioners resolve issues effectively.',
    ],
  },
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
    name: 'Cybersecurity Club',
    role: 'Member',
    year: 'August 2025 – Present',
    description:
      'Long Beach City College. Group labs, capture-the-flag practice, and peer study for security certifications.',
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
];

/** Tools I built for myself that ended up mattering to the work. */
export const tooling = [
  {
    name: 'SRT & Video Composer',
    description:
      'An Adobe Premiere CEP extension driving a three-pass AI prompt chain that turns silent screen recordings into subtitled, narrated demo videos. Built to document the identity projects without spending hours per video in an editor.',
  },
  {
    name: 'MCP Tooling Stack',
    description:
      'GitHub, Playwright, Context7, and Exa wired into a local AI development environment, so project scaffolding, docs lookup, and browser testing all run from one place.',
  },
];
