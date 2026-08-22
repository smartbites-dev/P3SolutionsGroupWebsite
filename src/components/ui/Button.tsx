import type { AnchorHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'ghost' | 'inverse';

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 text-sm font-semibold transition-colors duration-200';

const variants: Record<Variant, string> = {
  primary: 'bg-p3-red text-white hover:bg-p3-red-deep',
  secondary:
    'border-2 border-p3-red text-p3-red bg-white hover:bg-p3-mist hover:border-p3-red-deep hover:text-p3-red-deep',
  ghost:
    'border border-zinc-300 text-zinc-800 bg-white hover:border-p3-red hover:text-p3-red',
  inverse:
    'border border-white/25 text-white bg-white/5 hover:bg-white/10 hover:border-white/50',
};

export function Button({ href, variant = 'primary', children, className = '', ...rest }: ButtonProps) {
  const external = href.startsWith('http');

  return (
    <a
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noreferrer noopener' } : {})}
      {...rest}
    >
      {children}
    </a>
  );
}
