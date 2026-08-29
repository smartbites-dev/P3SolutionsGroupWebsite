import { Container } from '../layout/Container';
import { Eyebrow } from '../ui/Eyebrow';

const path = [
  { step: 'Internal system', detail: 'Built to solve a problem in a business we operate' },
  { step: 'Proven in operation', detail: 'Measured, corrected, and run under real conditions' },
  { step: 'Reusable platform', detail: 'Generalized once the pattern holds more than once' },
  { step: 'Product or practice', detail: 'A product, a methodology, or a company of its own' },
];

export function BuiltInsideP3() {
  return (
    <section id="built-inside" className="scroll-mt-24 bg-p3-deep py-20 lg:py-28">
      <Container>
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Eyebrow tone="dark">Built Inside P3</Eyebrow>
            <h2 className="mt-4 text-3xl leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Built in the Real World.
              <span className="block text-p3-red">Productized When Proven.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-zinc-400">
              We don't begin with theoretical AI demos. We run our AI-driven delivery practice
              against our own software first, measure what works, improve it, and turn the
              strongest solutions into repeatable standards and controls.
            </p>
            <p className="mt-5 leading-relaxed text-zinc-400">
              SmartBites — a live consumer product, not an internal prototype — is where that
              happens today. When we recommend an approach to another engineering organization, it
              is one we have already had to live with.
            </p>
          </div>

          <ol className="relative space-y-1">
            {path.map((item, i) => (
              <li key={item.step} className="relative flex gap-6 pb-8 last:pb-0">
                {i < path.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute left-[19px] top-11 h-[calc(100%-1.75rem)] w-px bg-white/15"
                  />
                )}
                <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 font-mono text-xs font-medium text-p3-red">
                  0{i + 1}
                </span>
                <div className="pt-1.5">
                  <h3 className="text-base text-white">{item.step}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-zinc-400">{item.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
