import { Section } from '../layout/Section';
import { StackDiagram } from '../diagrams/StackDiagram';
import { Tag } from '../ui/Tag';

const technologies = [
  'AI agents',
  'MCP',
  'Workflow automation',
  'RAG & retrieval',
  'APIs',
  'Cloud infrastructure',
  'Agent orchestration',
];

export function OperatingSystem() {
  return (
    <Section
      id="operating-systems"
      tone="dark"
      eyebrow="AI Operating Systems"
      title="A company is a system, not a collection of AI features"
      intro="Most AI efforts stall because they add tools without changing how work moves. We design the connected layer underneath — where intake, delivery, and follow-through close the loop instead of ending at a hand-off."
      className="relative overflow-hidden"
    >
      <div aria-hidden="true" className="p3-grid-dark pointer-events-none absolute inset-0" />

      <div className="relative">
        <StackDiagram />

        <div className="mx-auto mt-16 max-w-3xl border-t border-white/10 pt-12 text-center">
          <p className="text-lg leading-relaxed text-zinc-400">
            Agents handle information movement, preparation, retrieval, and repetitive execution.
            Strategy, relationships, risk, and capital allocation stay with people — by design, not
            as a limitation.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-2.5">
            {technologies.map((t) => (
              <Tag key={t} tone="dark">
                {t}
              </Tag>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
