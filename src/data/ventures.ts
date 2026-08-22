/**
 * P3 operating companies and ventures.
 *
 * Adding a venture is a matter of appending one entry here — the section
 * grid, card layout, and status treatment all key off this shape.
 * Do not add speculative or unbuilt companies.
 */
export type VentureStatus = 'Operating' | 'In Beta' | 'In Development';

export type Venture = {
  id: string;
  name: string;
  /** Rendered after the name, e.g. a trademark marker. */
  nameSuffix?: string;
  category: string;
  status: VentureStatus;
  summary: string;
  body: string;
  highlights: string[];
  /** Path under /public. Falls back to a lettermark when absent. */
  logo?: string;
  link?: { label: string; href: string };
};

export const ventures: Venture[] = [
  {
    id: 'smartbites',
    name: 'SmartBites',
    nameSuffix: '™',
    category: 'Food Intelligence · Consumer',
    status: 'Operating',
    summary:
      'AI-powered food intelligence for people with allergies, dietary restrictions, and food preferences.',
    body: 'SmartBites combines AI-powered recipes with allergy-aware restaurant menu discovery to help people dine in or dine out with greater confidence.',
    highlights: [
      'AI recipes matched to an individual allergen profile',
      'Restaurant menu discovery filtered by allergens and diet',
      'Personalized before account creation, not after',
    ],
    // TODO: swap for the SmartBites marketing site once it is live.
    link: { label: 'Visit SmartBites', href: 'https://apps.apple.com/us/app/smartbites-cooking/id6745743999' },
  },
];
