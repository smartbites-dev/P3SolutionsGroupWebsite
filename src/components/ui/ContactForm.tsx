import { useState } from 'react';
import type { FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Loader2, Send } from 'lucide-react';
import { site } from '../../data/site';

/**
 * Netlify Forms submission from a client-rendered form.
 *
 * Netlify registers forms by parsing deployed HTML at build time, which never
 * sees this component. The hidden stub in index.html is what gets registered;
 * this posts to it by name. Field names must match that stub.
 */
const FORM_NAME = 'p3-contact';

const interests = [
  'AI-DLC / engineering maturity',
  'Broader AI-enabled capabilities',
  'Ventures & partnerships',
  'Something else',
];

type Status = 'idle' | 'submitting' | 'success' | 'error';

const encode = (data: Record<string, string>) =>
  Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');

const fieldClass =
  'w-full rounded-lg border border-zinc-300 bg-white px-4 py-3 text-sm text-p3-ink placeholder:text-zinc-400 transition-colors focus:border-p3-red focus:outline-none focus:ring-1 focus:ring-p3-red';

const labelClass = 'block text-xs font-medium uppercase tracking-wide text-zinc-500';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('submitting');

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries()) as Record<string, string>;

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': FORM_NAME, ...data }),
      });

      if (!response.ok) throw new Error(`Submission failed: ${response.status}`);

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="flex flex-col items-start rounded-xl border border-p3-red/25 bg-p3-red/[0.04] p-8">
        <CheckCircle2 className="h-8 w-8 text-p3-red" />
        <h4 className="mt-4 text-lg">Message received.</h4>
        <p className="mt-2 leading-relaxed text-zinc-600">
          Thanks for reaching out — we'll get back to you shortly. If it's time-sensitive, call{' '}
          <a href={site.phoneHref} className="font-medium text-p3-red hover:text-p3-red-deep">
            {site.phone}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-p3-red transition-colors hover:text-p3-red-deep"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      name={FORM_NAME}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      <input type="hidden" name="form-name" value={FORM_NAME} />

      {/* Honeypot: hidden from people, tempting to bots. */}
      <p className="hidden">
        <label>
          Don't fill this out if you're human: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-name">
            Name <span className="text-p3-red">*</span>
          </label>
          <input id="cf-name" name="name" type="text" required autoComplete="name" className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-email">
            Email <span className="text-p3-red">*</span>
          </label>
          <input id="cf-email" name="email" type="email" required autoComplete="email" className={`mt-2 ${fieldClass}`} />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="cf-company">
            Company
          </label>
          <input id="cf-company" name="company" type="text" autoComplete="organization" className={`mt-2 ${fieldClass}`} />
        </div>
        <div>
          <label className={labelClass} htmlFor="cf-phone">
            Phone
          </label>
          <input id="cf-phone" name="phone" type="tel" autoComplete="tel" className={`mt-2 ${fieldClass}`} />
        </div>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-interest">
          What's this about?
        </label>
        <select id="cf-interest" name="interest" defaultValue={interests[0]} className={`mt-2 ${fieldClass}`}>
          {interests.map((i) => (
            <option key={i} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="cf-message">
          Message <span className="text-p3-red">*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          rows={5}
          placeholder="What does the repeatable work look like in your business?"
          className={`mt-2 resize-y ${fieldClass}`}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-p3-red px-6 py-3.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-p3-red-deep disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'submitting' ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Work With P3
              <Send className="h-4 w-4" />
            </>
          )}
        </button>

        <p className="text-xs text-zinc-500">We'll only use this to reply. No lists, no sequences.</p>
      </div>

      <div aria-live="polite">
        {status === 'error' && (
          <p className="flex items-start gap-2.5 rounded-lg border border-p3-red/30 bg-p3-red/[0.04] p-4 text-sm text-p3-red-dark">
            <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
            <span>
              That didn't go through. Please email{' '}
              <a href={`mailto:${site.email}`} className="font-medium underline">
                {site.email}
              </a>{' '}
              or call {site.phone}.
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
