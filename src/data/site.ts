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
  tagline: 'Engineering · Delivery · Governance',
  url: 'https://www.p3solutionsgroup.com',
  email: 'support@p3solutionsgroup.com',
  phone: '602-220-9724',
  phoneHref: 'tel:+16022209724',
  footerLine:
    'We help engineering organizations turn AI adoption into safe, measurable software delivery.',
};

// Nav order must match section order down the page — this is a single-page,
// anchor-nav site, so a nav that disagrees with scroll order is a defect.
export const nav: NavItem[] = [
  { label: 'AI-DLC', href: '#ai-dlc' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Ventures', href: '#companies' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
  // TODO: add { label: 'Insights', href: '/insights' } once the first article ships.
];
