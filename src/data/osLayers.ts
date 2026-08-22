export type OsLayer = {
  name: string;
  detail: string;
  /** Emphasised layers are the ones people usually skip straight past. */
  accent?: boolean;
};

/** Top-to-bottom architecture of a connected business operating system. */
export const osLayers: OsLayer[] = [
  { name: 'Customer / Employee', detail: 'Where work actually enters the business' },
  { name: 'AI Agents', detail: 'Scoped responsibilities, not a general chatbot', accent: true },
  { name: 'Workflows & Automation', detail: 'Closed loops that finish what they start' },
  { name: 'MCP · APIs · Integrations', detail: 'How systems reach each other safely', accent: true },
  { name: 'Business Systems', detail: 'CRM, billing, scheduling, delivery' },
  { name: 'Knowledge & Data', detail: 'Retrieval over the record of how you operate' },
  { name: 'Human Governance', detail: 'Rules, thresholds, and the decisions people keep', accent: true },
];
