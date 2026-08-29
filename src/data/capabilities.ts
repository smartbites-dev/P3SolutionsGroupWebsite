import { Boxes, Compass, Network, Workflow } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Broader P3 capabilities beyond the AI-DLC wedge.
 *
 * Real, not speculative — but secondary, and developed further just-in-time when
 * customer demand warrants it rather than sold as parallel offerings today.
 */
export type CapabilityArea = {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const capabilityAreas: CapabilityArea[] = [
  {
    id: 'business-operations',
    title: 'AI-Enabled Business Operations',
    body: 'AI assistants, workflow automation, and agent-enabled operations that connect knowledge and work inside a business — applied where a specific operational pain justifies it.',
    icon: Workflow,
  },
  {
    id: 'operating-systems',
    title: 'AI Operating Systems',
    body: 'The integrated layer connecting knowledge, agents, models, tools, and governance underneath a business, rather than a collection of disconnected AI features.',
    icon: Compass,
  },
  {
    id: 'product-development',
    title: 'AI-Driven Product Development',
    body: 'AI-native and AI-enabled applications, built or modernized on infrastructure that can absorb AI safely rather than bolted on top.',
    icon: Boxes,
  },
  {
    id: 'architecture-transformation',
    title: 'Architecture & AI Transformation',
    body: 'Enterprise architecture, modernization, and integration work that prepares existing systems for AI adoption without requiring a rewrite.',
    icon: Network,
  },
];
