import { Mail, Phone } from 'lucide-react';
import { Section } from '../layout/Section';
import { ContactForm } from '../ui/ContactForm';
import { site } from '../../data/site';

const goodFit = [
  'Repeatable work that consumes real hours every week',
  'Processes that currently live in one person’s head',
  'Systems that hold the right data but do not talk to each other',
  'A business where AI should change the operating model, not add a chatbot',
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's talk about the work"
      intro="Tell us what the repeatable work looks like in your business. That conversation is usually more useful than a demo."
    >
      <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.35fr_1fr]">
        <div className="rounded-2xl border border-zinc-200 bg-white p-8 lg:p-10">
          <h3 className="text-xl">Send us a message</h3>
          <p className="mt-3 leading-relaxed text-zinc-600">
            Whether you are exploring what AI could change in your operation, interested in what we
            are building, or looking to work together — we would like to hear about it.
          </p>

          <div className="mt-8">
            <ContactForm />
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-zinc-200 bg-p3-mist p-8">
            <h3 className="text-lg">A good fit looks like</h3>
            <ul className="mt-5 space-y-3.5">
              {goodFit.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-zinc-600">
                  <span
                    aria-hidden="true"
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-p3-red"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-8">
            <h3 className="text-lg">Prefer to reach out directly?</h3>

            <div className="mt-5 space-y-3">
              <a
                href={site.phoneHref}
                className="group flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-p3-red/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-p3-red">
                  <Phone className="h-5 w-5 text-white" />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Phone
                  </span>
                  <span className="block font-medium text-p3-ink transition-colors group-hover:text-p3-red">
                    {site.phone}
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="group flex items-center gap-4 rounded-xl border border-zinc-200 p-4 transition-colors hover:border-p3-red/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-p3-red-deep">
                  <Mail className="h-5 w-5 text-white" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-medium uppercase tracking-wide text-zinc-500">
                    Email
                  </span>
                  <span className="block break-all font-medium text-p3-ink transition-colors group-hover:text-p3-red">
                    {site.email}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
