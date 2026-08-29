import { Section } from '../layout/Section';
import { MaturityLadder } from '../diagrams/MaturityLadder';

export function MaturityModel() {
  return (
    <Section
      id="maturity"
      tone="charcoal"
      eyebrow="The AI-DLC Maturity Model"
      title="AI participation is a maturity curve, not a switch"
      intro="Most organizations sit somewhere between individual tool adoption and a governed practice. P3's focus is Level 3 — AI-DLC: AI participating across the lifecycle while humans stay authoritative."
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-12">
        <MaturityLadder />
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed text-zinc-400">
        P3 does not advocate maximum autonomy.{' '}
        <strong className="font-semibold text-white">
          The goal is the level of AI participation that improves your outcomes without losing
          control.
        </strong>
      </p>
    </Section>
  );
}
