import { Code2, Compass, Network, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Service = {
  id: string;
  title: string;
  body: string;
  outcomes: string[];
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    id: 'os-design',
    title: 'AI Operating System Design',
    body: 'Map business operations and identify where AI, automation, and agents create leverage.',
    outcomes: [
      'Operating map of how work actually moves',
      'Ranked leverage points with effort and risk',
      'A sequenced plan, not a wish list',
    ],
    icon: Compass,
  },
  {
    id: 'workflow-agents',
    title: 'Workflow & Agent Automation',
    body: 'Turn repetitive processes into reliable automated and agent-assisted workflows.',
    outcomes: [
      'Closed-loop workflows that finish what they start',
      'Agents scoped to a defined responsibility',
      'Explicit hand-offs back to a person',
    ],
    icon: Workflow,
  },
  {
    id: 'app-development',
    title: 'AI Application Development',
    body: 'Build production AI applications, internal tools, integrations, and customer-facing products.',
    outcomes: [
      'Software built to run, not to demo',
      'Retrieval over your own knowledge and data',
      'Integrations through governed interfaces',
    ],
    icon: Code2,
  },
  {
    id: 'architecture',
    title: 'Architecture & AI Transformation',
    body: 'Modernize systems so AI capabilities can be safely integrated into existing software and business operations.',
    outcomes: [
      'Architecture that can absorb AI safely',
      'Clear boundaries, permissions, and audit trails',
      'A path that does not require a rewrite',
    ],
    icon: Network,
  },
];
