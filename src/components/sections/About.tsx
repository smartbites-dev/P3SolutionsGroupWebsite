import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';

const principles = [
  {
    title: 'Systems thinking',
    body: 'We look at how work moves through the SDLC before we look at what to automate.',
  },
  {
    title: 'Builder mentality',
    body: 'We would rather ship a working system than produce a deck describing one.',
  },
  {
    title: 'Pragmatic about AI',
    body: 'AI participates where it earns its place in the delivery lifecycle. Elsewhere, ordinary engineering practice is the better answer.',
  },
  {
    title: 'Measurable outcomes',
    body: 'A practice earns its place by what it changes in delivery outcomes, not by how it demos.',
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-p3-deep py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow tone="dark">About P3</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Engineers redesigning delivery around AI — not consultants learning how software
              works
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-zinc-400">
              <p>
                P3 Solutions Group is led by{' '}
                <strong className="font-semibold text-white">Joe Davault</strong>, a software
                engineer and architect with 20+ years building production systems — most recently
                as a Principal Software Engineer working across the full stack, cloud
                infrastructure, and enterprise integration. That background is why P3 approaches
                AI-DLC as engineers redesigning software delivery around AI, not as AI specialists
                learning how a software development lifecycle works after the fact.
              </p>
              <p>
                We've lived through the parts of the job AI can't shortcut — legacy modernization,
                CI/CD, security reviews, the judgment calls about where a system is allowed to be
                wrong — and we apply that experience to the question underneath every AI adoption
                effort: where AI should participate, what context it needs, what it should be
                allowed to do, where humans stay accountable, and whether any of it actually
                improved delivery.
              </p>
              <p className="font-medium text-white">
                We build. We measure. We prove it on our own software first. Then we help other
                engineering organizations do the same.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:content-start">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-base text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-400">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
