import type { ReactNode } from 'react';
import { Container } from './Container';
import { Eyebrow } from '../ui/Eyebrow';

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  tone?: 'white' | 'mist' | 'dark' | 'charcoal';
  /** Centres the heading block. Left-aligned reads more editorial for dense sections. */
  align?: 'center' | 'left';
  className?: string;
};

const tones = {
  white: 'bg-white',
  mist: 'bg-p3-mist',
  dark: 'bg-p3-deep',
  charcoal: 'bg-p3-charcoal',
};

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = 'white',
  align = 'center',
  className = '',
}: SectionProps) {
  const dark = tone === 'dark' || tone === 'charcoal';
  const hasHeading = Boolean(eyebrow || title || intro);

  return (
    <section id={id} className={`scroll-mt-24 py-20 lg:py-28 ${tones[tone]} ${className}`}>
      <Container>
        {hasHeading && (
          <div
            className={
              align === 'center'
                ? 'mx-auto mb-14 max-w-3xl text-center lg:mb-16'
                : 'mb-14 max-w-3xl lg:mb-16'
            }
          >
            {eyebrow && <Eyebrow tone={dark ? 'dark' : 'light'}>{eyebrow}</Eyebrow>}
            {title && (
              <h2
                className={`mt-4 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem] ${
                  dark ? 'text-white' : ''
                }`}
              >
                {title}
              </h2>
            )}
            {intro && (
              <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-zinc-400' : 'text-zinc-600'}`}>
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
