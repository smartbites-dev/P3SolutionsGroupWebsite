/**
 * Downloadable PDFs under public/downloads/. Content is data — see
 * .ai/memory/architecture.md.
 */
export type Resource = {
  title: string;
  description: string;
  href: string;
};

export const resources: Resource[] = [
  {
    title: 'Philosophy & Leadership',
    description: "P3's operating philosophy and how engineering leadership changes when AI does substantial work.",
    href: '/downloads/P3_01_Philosophy_and_Leadership.pdf',
  },
  {
    title: 'P3 AI-DLC → ADLC Methodology',
    description: 'The maturity model, from AI-assisted development through governed, agentic delivery.',
    href: '/downloads/P3_02_Methodology_AI-DLC_to_ADLC.pdf',
  },
  {
    title: 'AI-DLC & ADLC Services',
    description: "P3's engagement model for assessing, designing, and proving AI-driven software delivery.",
    href: '/downloads/P3_03_Services.pdf',
  },
];
