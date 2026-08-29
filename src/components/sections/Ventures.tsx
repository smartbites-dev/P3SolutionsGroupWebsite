import { ArrowUpRight } from 'lucide-react';
import { Section } from '../layout/Section';
import { Eyebrow } from '../ui/Eyebrow';
import { ventures } from '../../data/ventures';

export function Ventures() {
  return (
    <Section
      id="companies"
      tone="dark"
      eyebrow="Companies & Ventures"
      title="Where we prove it first"
      intro="P3 runs its own AI-driven delivery practice against real, live software — not internal demos. SmartBites is where that happens today."
    >
      {/* Single venture reads as a feature; additional entries fall into a two-up grid. */}
      <div className={`grid gap-6 ${ventures.length > 1 ? 'lg:grid-cols-2' : 'mx-auto max-w-4xl'}`}>
        {ventures.map((v) => (
          <article
            key={v.id}
            className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-shadow duration-300 hover:shadow-xl"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 bg-white/[0.03] px-8 py-6">
              <div className="flex items-center gap-4">
                {v.logo ? (
                  <img
                    src={v.logo}
                    alt=""
                    width={56}
                    height={56}
                    className="h-14 w-14 rounded-xl object-contain"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="flex h-14 w-14 items-center justify-center rounded-xl bg-p3-red text-xl font-bold text-white"
                  >
                    {v.name.charAt(0)}
                  </div>
                )}
                <div>
                  <h3 className="text-2xl text-white">
                    {v.name}
                    {v.nameSuffix && (
                      <span className="align-super text-xs text-zinc-500">{v.nameSuffix}</span>
                    )}
                  </h3>
                  <p className="mt-0.5 font-mono text-xs uppercase tracking-wide text-zinc-500">
                    {v.category}
                  </p>
                </div>
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-p3-red/25 bg-white/5 px-3.5 py-1.5 font-mono text-xs font-medium text-p3-red">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-p3-red" />
                {v.status}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-8">
              <p className="text-lg font-medium leading-relaxed text-white">{v.summary}</p>
              <p className="mt-4 leading-relaxed text-zinc-400">{v.body}</p>

              <ul className="mt-7 space-y-2.5">
                {v.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-3 text-sm text-zinc-400">
                    <span
                      aria-hidden="true"
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-p3-red"
                    />
                    {h}
                  </li>
                ))}
              </ul>

              {v.link && (
                <div className="mt-8 pt-2">
                  <a
                    href={v.link.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-p3-red transition-colors hover:text-white"
                  >
                    {v.link.label}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              )}
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-dashed border-white/15 p-8 text-center">
        <Eyebrow tone="dark">More To Come</Eyebrow>
        <p className="mt-4 leading-relaxed text-zinc-400">
          P3 is actively developing its next ventures. We add a company here when it exists and
          operates — not before.
        </p>
      </div>
    </Section>
  );
}
