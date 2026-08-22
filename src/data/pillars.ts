import { Boxes, Layers, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Pillar = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  concepts: string[];
  icon: LucideIcon;
  href: string;
};

export const pillars: Pillar[] = [
  {
    id: 'build',
    kicker: 'Build',
    title: 'AI-Driven Companies',
    body: 'We create and operate businesses where AI, software, and automation provide a structural advantage from day one.',
    concepts: [
      'AI-native operations',
      'Vertical businesses',
      'Internal automation',
      'Scalable operating models',
    ],
    icon: Boxes,
    href: '#companies',
  },
  {
    id: 'productize',
    kicker: 'Productize',
    title: 'AI Products & Platforms',
    body: 'We turn proven internal systems, workflows, and ideas into software products that can serve larger markets.',
    concepts: [
      'AI applications',
      'Agents & orchestration',
      'MCP integrations',
      'Developer systems',
    ],
    icon: Layers,
    href: '#products',
  },
  {
    id: 'transform',
    kicker: 'Transform',
    title: 'AI Consulting & Implementation',
    body: 'We help organizations identify repeatable work and move it from process to system to automation to agentic execution.',
    concepts: [
      'AI strategy',
      'Workflow design',
      'Agentic systems',
      'Software architecture',
    ],
    icon: Workflow,
    href: '#services',
  },
];
