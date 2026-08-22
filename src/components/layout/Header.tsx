import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { mailto, nav, site } from '../../data/site';

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // The mobile panel takes over the viewport, so stop the page behind it scrolling.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-white/90 backdrop-blur transition-shadow duration-200 ${
        scrolled ? 'shadow-sm border-b border-zinc-200' : 'border-b border-transparent'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between py-3">
          <a href="#top" className="flex items-center gap-3" aria-label={`${site.name} home`}>
            <img
              src="/logo-mark.png"
              alt=""
              width={48}
              height={48}
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-tight text-p3-ink sm:text-xl">
                {site.name}
              </span>
              <span className="block font-mono text-[0.65rem] uppercase tracking-eyebrow text-zinc-500 sm:text-xs">
                {site.tagline}
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-zinc-600 transition-colors duration-200 hover:text-p3-red"
              >
                {item.label}
              </a>
            ))}
            <a
              href={mailto('Working with P3')}
              className="rounded-lg bg-p3-red px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-p3-red-deep"
            >
              Work With P3
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 inline-flex items-center justify-center rounded-lg p-2 text-zinc-700 transition-colors hover:text-p3-red lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-zinc-200 bg-white lg:hidden">
          <Container className="py-4">
            <nav className="flex flex-col" aria-label="Primary mobile">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-zinc-100 py-4 text-base font-medium text-zinc-700 transition-colors hover:text-p3-red"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={mailto('Working with P3')}
                onClick={() => setOpen(false)}
                className="mt-5 rounded-lg bg-p3-red px-5 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-p3-red-deep"
              >
                Work With P3
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
