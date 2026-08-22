import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  tone?: 'light' | 'dark';
  /** `lg` is for the hero, where surrounding type is much larger. */
  size?: 'base' | 'lg';
  className?: string;
};

const sizes = {
  base: 'text-xs',
  lg: 'text-sm',
};

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({ children, tone = 'light', size = 'base', className = '' }: EyebrowProps) {
  const color = tone === 'dark' ? 'text-p3-gray' : 'text-p3-red';

  return (
    <p
      className={`font-mono ${sizes[size]} font-medium uppercase tracking-eyebrow ${color} ${className}`}
    >
      {children}
    </p>
  );
}
