import { Section } from '../layout/Section';
import { capabilityAreas } from '../../data/capabilities';

export function Capabilities() {
  return (
    <Section
      id="capabilities"
      tone="mist"
      eyebrow="Broader Capabilities"
      title="AI-DLC is the wedge. These are the rest of the practice."
      intro="Software delivery is our current focus, not our ceiling. We build these further when the pain is real and specific enough to justify it — not by default."
    >
      <div className="grid gap-6 sm:grid-cols-2">
        {capabilityAreas.map(({ id, title, body, icon: Icon }) => (
          <div
            key={id}
            className="flex gap-5 rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-300 hover:border-p3-red/40"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-p3-mist">
              <Icon className="h-5 w-5 text-p3-red" />
            </div>
            <div>
              <h3 className="text-lg">{title}</h3>
              <p className="mt-2.5 leading-relaxed text-zinc-600">{body}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
