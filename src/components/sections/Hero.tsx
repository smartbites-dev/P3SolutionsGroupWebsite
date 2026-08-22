import { ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { Button } from '../ui/Button';
import { Eyebrow } from '../ui/Eyebrow';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-zinc-100 bg-white">
      <div aria-hidden="true" className="p3-grid absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/85 to-white"
      />

      <Container className="relative py-24 lg:py-36">
        <div className="max-w-4xl animate-fade-up">
          <Eyebrow size="lg">AI Ventures · Products · Systems</Eyebrow>

          <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Build Smarter Businesses.
            <span className="block text-p3-red">Operate Them With AI.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-relaxed text-zinc-600 lg:text-xl">
            P3 Solutions Group builds AI-driven companies, products, and operating systems — and
            helps organizations transform repeatable work into intelligent workflows.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Button href="#what-we-do">
              Explore What We Build
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button href="#contact" variant="secondary">
              Work With P3
            </Button>
          </div>

          <dl className="mt-16 grid max-w-2xl gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-3">
            {[
              { term: 'Build', desc: 'Companies we own and operate' },
              { term: 'Productize', desc: 'Systems proven in the real world' },
              { term: 'Transform', desc: 'Implementation for other organizations' },
            ].map((item) => (
              <div key={item.term}>
                <dt className="font-mono text-sm uppercase tracking-eyebrow text-p3-red">
                  {item.term}
                </dt>
                <dd className="mt-2.5 text-base leading-relaxed text-zinc-600">{item.desc}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
