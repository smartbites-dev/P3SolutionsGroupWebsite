import type { ReactNode } from 'react';

type EyebrowProps = {
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
};

/** Small uppercase label that sits above a section heading. */
export function Eyebrow({ children, tone = 'light', className = '' }: EyebrowProps) {
  const color = tone === 'dark' ? 'text-p3-gray' : 'text-p3-red';

  return (
    <p className={`font-mono text-xs font-medium uppercase tracking-eyebrow ${color} ${className}`}>
      {children}
    </p>
  );
}
