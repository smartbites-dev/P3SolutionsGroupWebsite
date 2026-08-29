import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-p3-deep">
      <div aria-hidden="true" className="p3-grid-dark absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-p3-deep/40 via-p3-deep/85 to-p3-deep"
      />

      <Container className="relative py-24 lg:py-36">
        <div className="max-w-4xl animate-fade-up">
          <Eyebrow size="lg" tone="dark">AI-Driven Software Delivery</Eyebrow>

          <h1 className="mt-6 text-4xl leading-[1.08] text-white sm:text-5xl lg:text-6xl">
            Your Developers Adopted AI.
            <span className="block text-p3-red">Your Engineering System Didn't.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-400 lg:text-xl">
            P3 helps engineering organizations turn individual AI coding experiments into a
            repeatable, governed, measurable software-delivery capability.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Assess Your AI Engineering Maturity
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#maturity" variant="inverse">
              See the Maturity Model
            </Button>
          </div>

          <dl className="mt-16 grid max-w-2xl gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            {[
              { term: 'Safe', desc: 'Architecture, quality, and security stay intact' },
              { term: 'Repeatable', desc: 'Standards and context, not tribal knowledge' },
              { term: 'Measurable', desc: 'Proof the investment improved delivery' },
            ].map((item) => (
              <div key={item.term}>
                <dt className="font-mono text-sm uppercase tracking-eyebrow text-p3-red">
                  {item.term}
                </dt>
                <dd className="mt-2.5 text-base leading-relaxed text-zinc-400">{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
