export type MaturityLevel = {
  level: number;
  stage: string;
  trigger: string;
  action: string;
  /** Level 3 is where the offering is aimed. 4–5 are shown, not hidden, but muted —
   *  real stages, not the default destination. */
  emphasis?: 'primary' | 'muted';
};

/** Traditional SDLC → AI-Assisted → Standardized → AI-DLC → Agentic AI-DLC → ADLC. */
export const maturityLevels: MaturityLevel[] = [
  {
    level: 0,
    stage: 'Traditional SDLC',
    trigger: 'Humans do it all',
    action: 'The baseline every organization starts from.',
  },
  {
    level: 1,
    stage: 'AI-Assisted',
    trigger: 'Individual tools',
    action: 'Developers use Copilot, Claude, Codex, Gemini — with no shared standard.',
  },
  {
    level: 2,
    stage: 'Standardized',
    trigger: 'Shared context',
    action: 'Organizational standards, practices, and instructions developers and agents both follow.',
  },
  {
    level: 3,
    stage: 'AI-DLC',
    trigger: 'Lifecycle participation',
    action:
      'AI participates across requirements, design, implementation, testing, review, and release — humans stay authoritative.',
    emphasis: 'primary',
  },
  {
    level: 4,
    stage: 'Agentic AI-DLC',
    trigger: 'Bounded execution',
    action: 'Agents execute defined portions of the lifecycle under explicit human governance.',
    emphasis: 'muted',
  },
  {
    level: 5,
    stage: 'ADLC',
    trigger: 'Governed autonomy',
    action: 'Agents primary-execute larger portions of delivery; humans govern intent, risk, and exceptions.',
    emphasis: 'muted',
  },
];
