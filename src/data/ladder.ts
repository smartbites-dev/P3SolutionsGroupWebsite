export type LadderStep = {
  stage: string;
  trigger: string;
  action: string;
};

/** Work → Checklist → System → Automation → Agent */
export const ladder: LadderStep[] = [
  { stage: 'Work', trigger: 'Do it once', action: 'Learn how the work actually behaves.' },
  { stage: 'Checklist', trigger: 'Do it twice', action: 'Write down what made it work.' },
  { stage: 'System', trigger: 'Do it three times', action: 'Build the repeatable process.' },
  { stage: 'Automation', trigger: 'Stable and repeatable', action: 'Let software run it.' },
  { stage: 'Agent', trigger: 'Requires judgment', action: 'Agent-assist, then agent-execute where risk is low.' },
];
