/**
 * Global site configuration.
 *
 * Sections are currently rendered on a single page and linked by anchor.
 * Each nav item already carries the shape it will need as a standalone
 * route, so promoting one to its own page is a routing change only.
 */
export type NavItem = {
  label: string;
  href: string;
  /** Set once this section is promoted to a standalone page. */
  page?: string;
};

export const site = {
  name: 'P3 Solutions Group',
  shortName: 'P3',
  tagline: 'AI Ventures · Products · Systems',
  url: 'https://www.p3solutionsgroup.com',
  email: 'support@p3solutionsgroup.com',
  phone: '602-220-9724',
  phoneHref: 'tel:+16022209724',
  footerLine:
    'We build businesses that operate differently because AI exists.',
};

export const nav: NavItem[] = [
  { label: 'Companies', href: '#companies' },
  { label: 'Products', href: '#products' },
  { label: 'AI Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  // TODO: add { label: 'Insights', href: '/insights' } once the first article ships.
];

/** Subject-line-primed mailto links so inbound intent is legible on arrival. */
export const mailto = (subject: string) =>
  `mailto:${site.email}?subject=${encodeURIComponent(subject)}`;
