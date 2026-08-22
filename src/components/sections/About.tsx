import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';

const principles = [
  {
    title: 'Systems thinking',
    body: 'We look at how work moves through a business before we look at what to automate.',
  },
  {
    title: 'Builder mentality',
    body: 'We would rather ship a working system than produce a deck describing one.',
  },
  {
    title: 'Pragmatic about AI',
    body: 'AI is used where it creates leverage. Elsewhere, ordinary software is the better answer.',
  },
  {
    title: 'Measurable outcomes',
    body: 'A system earns its place by what it changes in the operation, not by how it demos.',
  },
];

export function About() {
  return (
    <section id="about" className="scroll-mt-24 bg-p3-mist py-20 lg:py-28">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <Eyebrow>About P3</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">
              A small company built to produce disproportionate output
            </h2>

            <div className="mt-7 space-y-5 text-lg leading-relaxed text-zinc-600">
              <p>
                P3 Solutions Group is a founder-led operating company built on deep software
                engineering experience and modern AI-native operating models. We have spent careers
                designing systems, architecting software, and untangling how work actually moves
                through organizations — and we now apply that to businesses we own as well as ones
                we advise.
              </p>
              <p>
                We are deliberately small. Modern software, automation, and AI let a focused team
                operate at a scale that used to require a department, and we would rather prove that
                in our own companies than describe it in a deck.
              </p>
              <p className="font-medium text-p3-ink">
                We build. We operate. We productize. Then we help others implement what we have
                learned.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:content-start">
            {principles.map((p) => (
              <div key={p.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <h3 className="text-base">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-600">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
