export type SdlcStage = {
  name: string;
  detail: string;
  /** Emphasised stages are where AI participation and human accountability both live. */
  accent?: boolean;
};

/** Top-to-bottom: the software delivery lifecycle AI-DLC works inside, not around. */
export const sdlcStack: SdlcStage[] = [
  { name: 'Business Intent', detail: 'The outcome the work is supposed to produce' },
  { name: 'Requirements & Design', detail: 'What gets built, and why' },
  { name: 'Architecture', detail: 'Where AI proposals meet human judgment', accent: true },
  { name: 'Development', detail: 'Where individual AI adoption already lives' },
  { name: 'Testing & Review', detail: 'Where review bottlenecks show up first', accent: true },
  { name: 'Security', detail: 'Permissions and boundaries on what agents can touch', accent: true },
  { name: 'CI/CD & Release', detail: 'How change reaches production safely' },
  { name: 'Production & Observability', detail: 'Where delivery outcomes actually get measured' },
  { name: 'Business Outcome', detail: 'The proof the investment was worth it' },
];
