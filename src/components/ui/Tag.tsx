import type { ReactNode } from 'react';

type TagProps = {
  children: ReactNode;
  tone?: 'light' | 'dark' | 'accent';
};

const tones = {
  light: 'border-zinc-200 bg-white text-zinc-600',
  dark: 'border-white/15 bg-white/5 text-zinc-300',
  accent: 'border-p3-red/25 bg-p3-red/5 text-p3-red-deep',
};

export function Tag({ children, tone = 'light' }: TagProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 font-mono text-xs tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
