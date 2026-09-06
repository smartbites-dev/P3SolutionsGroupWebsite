/**
 * Global site configuration.
 *
 * The homepage renders its sections on one page, linked by anchor. A nav item
 * either targets a homepage anchor (`href`) or a real route (`page`) — see
 * `Header`/`Footer`, which render every item as `<Link to={page ?? '/' + href}>`
 * so navigation works correctly from any route, not just the homepage.
 */
export type NavItem = {
  label: string;
  href: string;
  /** A real route, e.g. '/insights'. When set, this wins over `href`. */
  page?: string;
};

export const site = {
  name: 'P3 Solutions Group',
  shortName: 'P3',
  tagline: 'Engineering · Delivery · Governance',
  url: 'https://www.p3solutionsgroup.com',
  email: 'support@p3solutionsgroup.com',
  phone: '602-220-9724',
  phoneHref: 'tel:+16022209724',
  footerLine:
    'We help engineering organizations turn AI adoption into safe, measurable software delivery.',
};

// Primary nav. Ventures and Built Inside P3 stay on the homepage but are
// deliberately not primary nav items (see .ai/memory/decisions.md).
export const nav: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Methodology', href: '#methodology' },
  { label: 'Insights', href: '#', page: '/insights' },
  { label: 'Resources', href: '#resources' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];
