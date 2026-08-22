import { ArrowRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { pillars } from '../../data/pillars';

export function WhatWeDo() {
  return (
    <Section
      id="what-we-do"
      eyebrow="What We Do"
      title="Three connected ways of working"
      intro="Each one feeds the others. What we learn operating a business becomes a product, and what we prove in a product becomes how we help someone else."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        {pillars.map(({ id, kicker, title, body, concepts, icon: Icon, href }) => (
          <a
            key={id}
            href={href}
            className="group flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-p3-red/40 hover:shadow-lg"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-p3-mist transition-colors duration-300 group-hover:bg-p3-red/10">
              <Icon className="h-6 w-6 text-p3-red" />
            </div>

            <Eyebrow className="mt-7">{kicker}</Eyebrow>
            <h3 className="mt-3 text-2xl">{title}</h3>
            <p className="mt-4 flex-1 leading-relaxed text-zinc-600">{body}</p>

            <ul className="mt-7 space-y-2.5 border-t border-zinc-100 pt-6">
              {concepts.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-zinc-600">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-p3-red"
                  />
                  {c}
                </li>
              ))}
            </ul>

            <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-p3-red">
              Learn more
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
