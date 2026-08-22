import { Section } from '../layout/Section';
import { LadderDiagram } from '../diagrams/LadderDiagram';

export function HowWeThink() {
  return (
    <Section
      id="how-we-think"
      tone="mist"
      eyebrow="How We Think"
      title="Great AI systems begin with understanding the work"
      intro="We identify repeatable processes, document what works, build reliable systems, automate predictable execution, and introduce agents where reasoning or adaptive behavior creates real leverage."
    >
      <div className="rounded-2xl border border-zinc-200 bg-white p-8 lg:p-12">
        <LadderDiagram />
      </div>

      <p className="mx-auto mt-12 max-w-2xl text-center text-lg leading-relaxed text-zinc-600">
        The goal is not maximum automation. The goal is{' '}
        <strong className="font-semibold text-p3-ink">
          maximum leverage with appropriate human control.
        </strong>
      </p>
    </Section>
  );
}
