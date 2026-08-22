import { ArrowRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Button } from '../ui/Button';
import { services } from '../../data/services';
import { mailto } from '../../data/site';

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="AI Services"
      title="Engagements defined by outcomes, not hours"
      intro="We help organizations identify repeatable work and move it progressively from process to system to automation to agentic execution. The emphasis is not putting AI everywhere — it is putting it where it earns its place."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {services.map(({ id, title, body, outcomes, icon: Icon }) => (
          <div
            key={id}
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-p3-red/40 hover:shadow-lg"
          >
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-p3-mist">
                <Icon className="h-6 w-6 text-p3-red" />
              </div>
              <div>
                <h3 className="text-xl">{title}</h3>
                <p className="mt-2.5 leading-relaxed text-zinc-600">{body}</p>
              </div>
            </div>

            <ul className="mt-7 space-y-2.5 border-t border-zinc-100 pt-6">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 text-sm text-zinc-600">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-p3-red"
                  />
                  {o}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <Button href={mailto('AI Operating System — initial conversation')}>
          Build Your AI Operating System
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Section>
  );
}
