import { Link } from 'react-router-dom';
import { Container } from './Container';
import { nav, site } from '../../data/site';

function navTarget(item: { href: string; page?: string }): string {
  return item.page ?? `/${item.href}`;
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-p3-ink py-14 text-zinc-400">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img
                src="/logo-mark-gray.png"
                alt=""
                width={48}
                height={48}
                className="h-11 w-11 object-contain"
              />
              <span className="text-lg font-bold text-white">{site.name}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">{site.footerLine}</p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-mono text-xs uppercase tracking-eyebrow text-zinc-500">Explore</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {nav.map((item) => (
                <li key={item.label}>
                  <Link to={navTarget(item)} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-mono text-xs uppercase tracking-eyebrow text-zinc-500">Contact</h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={site.phoneHref} className="transition-colors hover:text-white">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="break-all transition-colors hover:text-white">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-zinc-800 pt-8 text-sm">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
