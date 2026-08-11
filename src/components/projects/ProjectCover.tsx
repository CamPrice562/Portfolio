import React, { useId } from 'react';
import type { Project } from '@/data/portfolio';

/**
 * Generated cover artwork for a project card. Each variant is a small diagram
 * of what the project actually does, drawn in the site's own palette. Inline
 * SVG rather than stock photography so nothing loads off-site.
 */

const TEAL = '#14b8a6';

interface CoverProps {
  variant: Project['cover'];
  className?: string;
}

const variants: Record<Project['cover'], React.ReactNode> = {
  /** Two clouds federated into one identity plane. */
  identity: (
    <>
      <circle cx="70" cy="60" r="26" fill="none" stroke={TEAL} strokeWidth="1.5" opacity="0.7" />
      <circle cx="170" cy="60" r="26" fill="none" stroke={TEAL} strokeWidth="1.5" opacity="0.7" />
      <path d="M96 60h48" stroke={TEAL} strokeWidth="1.5" strokeDasharray="4 4" opacity="0.9" />
      <circle cx="120" cy="60" r="5" fill={TEAL} />
      <path
        d="M70 52v16M62 60h16M170 52v16M162 60h16"
        stroke={TEAL}
        strokeWidth="1.5"
        opacity="0.5"
      />
      <rect x="46" y="98" width="148" height="1" fill={TEAL} opacity="0.25" />
      <rect x="46" y="108" width="96" height="1" fill={TEAL} opacity="0.15" />
    </>
  ),

  /** A shield over a descending bar chart: findings closing out. */
  shield: (
    <>
      <path
        d="M120 24l32 12v28c0 22-14 38-32 46-18-8-32-24-32-46V36l32-12z"
        fill="none"
        stroke={TEAL}
        strokeWidth="1.5"
        opacity="0.8"
      />
      <path d="M108 62l9 10 18-20" stroke={TEAL} strokeWidth="2" fill="none" />
      <rect x="52" y="86" width="10" height="24" fill={TEAL} opacity="0.5" />
      <rect x="68" y="94" width="10" height="16" fill={TEAL} opacity="0.38" />
      <rect x="84" y="102" width="10" height="8" fill={TEAL} opacity="0.26" />
      <rect x="162" y="90" width="10" height="20" fill={TEAL} opacity="0.5" />
      <rect x="178" y="100" width="10" height="10" fill={TEAL} opacity="0.34" />
      <rect x="194" y="106" width="10" height="4" fill={TEAL} opacity="0.22" />
    </>
  ),

  /** Telemetry timeline with one anomalous spike found. */
  hunt: (
    <>
      <path
        d="M28 84l16-4 14 6 12-10 14 4 12-30 14 34 16-8 14 6 12-12 14 8 16-4"
        fill="none"
        stroke={TEAL}
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle cx="110" cy="50" r="16" fill="none" stroke={TEAL} strokeWidth="1.5" />
      <path d="M122 62l14 14" stroke={TEAL} strokeWidth="2" />
      <circle cx="110" cy="50" r="3" fill={TEAL} />
      <rect x="28" y="102" width="184" height="1" fill={TEAL} opacity="0.2" />
      {[0, 1, 2, 3, 4, 5, 6].map((i) => (
        <rect key={i} x={28 + i * 30} y="106" width="1" height="6" fill={TEAL} opacity="0.3" />
      ))}
    </>
  ),

  /** A terminal window running a hardening script. */
  terminal: (
    <>
      <rect
        x="48"
        y="26"
        width="144"
        height="88"
        rx="4"
        fill="none"
        stroke={TEAL}
        strokeWidth="1.5"
        opacity="0.7"
      />
      <path d="M48 42h144" stroke={TEAL} strokeWidth="1.5" opacity="0.5" />
      <circle cx="60" cy="34" r="3" fill={TEAL} opacity="0.6" />
      <circle cx="72" cy="34" r="3" fill={TEAL} opacity="0.4" />
      <circle cx="84" cy="34" r="3" fill={TEAL} opacity="0.25" />
      <path d="M62 58l10 8-10 8" stroke={TEAL} strokeWidth="2" fill="none" />
      <rect x="80" y="64" width="52" height="3" fill={TEAL} opacity="0.55" />
      <rect x="62" y="80" width="86" height="3" fill={TEAL} opacity="0.35" />
      <rect x="62" y="92" width="60" height="3" fill={TEAL} opacity="0.22" />
      <rect x="132" y="92" width="16" height="3" fill={TEAL} opacity="0.5" />
    </>
  ),

  /** A cloud over stacked infrastructure tiers. */
  cloud: (
    <>
      <path
        d="M84 60a20 20 0 0139-6 16 16 0 0114 24H92a16 16 0 01-8-18z"
        fill="none"
        stroke={TEAL}
        strokeWidth="1.5"
        opacity="0.8"
      />
      <rect x="70" y="92" width="100" height="10" rx="2" fill="none" stroke={TEAL} strokeWidth="1.5" opacity="0.5" />
      <rect x="82" y="106" width="76" height="8" rx="2" fill="none" stroke={TEAL} strokeWidth="1.5" opacity="0.3" />
      <path d="M120 78v14" stroke={TEAL} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
    </>
  ),
};

const ProjectCover: React.FC<CoverProps> = ({ variant, className = '' }) => {
  // Scoped per instance so two cards using the same variant cannot collide.
  const uid = useId().replace(/:/g, '');
  const gridId = `grid-${uid}`;
  const fadeId = `fade-${uid}`;

  return (
    <svg
      viewBox="0 0 240 130"
      className={className}
      role="presentation"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id={gridId} width="12" height="12" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill={TEAL} opacity="0.12" />
        </pattern>
        <linearGradient id={fadeId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#090912" stopOpacity="0" />
          <stop offset="100%" stopColor="#090912" stopOpacity="0.95" />
        </linearGradient>
      </defs>

      <rect width="240" height="130" fill="#0d0d12" />
      <rect width="240" height="130" fill={`url(#${gridId})`} />
      {variants[variant]}
      <rect width="240" height="130" fill={`url(#${fadeId})`} />
    </svg>
  );
};

export default ProjectCover;
