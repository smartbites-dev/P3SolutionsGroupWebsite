import { Bot, Boxes, GitBranch, Plug } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/**
 * Product and platform capability areas.
 *
 * These are deliberately framed as what P3 builds rather than as named,
 * purchasable products. Replace an entry with a real product — name,
 * status, and link — as each one is productized.
 */
export type ProductArea = {
  id: string;
  title: string;
  body: string;
  icon: LucideIcon;
};

export const productAreas: ProductArea[] = [
  {
    id: 'agents',
    title: 'Agents & Orchestration',
    body: 'Scoped agents that carry a defined responsibility end to end, coordinated so their work composes instead of collides.',
    icon: Bot,
  },
  {
    id: 'integration',
    title: 'MCP & Integration Layers',
    body: 'The connective tissue that lets AI reach real business systems through governed, auditable interfaces rather than copy-and-paste.',
    icon: Plug,
  },
  {
    id: 'automation',
    title: 'Reusable Automation',
    body: 'Workflow and automation building blocks proven inside a live operation, then generalized so the next business starts further ahead.',
    icon: GitBranch,
  },
  {
    id: 'applications',
    title: 'Applications & Vertical SaaS',
    body: 'Production software for a specific industry problem, built on the operating systems underneath it rather than bolted on top.',
    icon: Boxes,
  },
];
