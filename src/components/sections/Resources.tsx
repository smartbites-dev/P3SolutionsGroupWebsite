import { FileText, Download } from 'lucide-react';
import { Section } from '../layout/Section';
import { resources } from '../../data/resources';

export function Resources() {
  return (
    <Section
      id="resources"
      tone="mist"
      eyebrow="Resources"
      title="Read the case for the maturity model"
      intro="Three short PDFs — the philosophy behind P3's approach, the methodology itself, and how an engagement actually runs."
    >
      <div className="grid gap-6 sm:grid-cols-3">
        {resources.map(({ title, description, href }) => (
          <a
            key={href}
            href={href}
            download
            className="flex flex-col rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-300 hover:border-p3-red/40"
          >
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-p3-mist">
              <FileText className="h-5 w-5 text-p3-red" />
            </div>
            <h3 className="mt-5 text-lg">{title}</h3>
            <p className="mt-2.5 flex-1 leading-relaxed text-zinc-600">{description}</p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-p3-red">
              <Download className="h-4 w-4" />
              Download PDF
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
}
