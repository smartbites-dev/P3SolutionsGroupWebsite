import raw from './insights.json';

/**
 * An Insights article. Content is data — see `../../.ai/memory/architecture.md`.
 * The raw array lives in `insights.json` (not `.ts`) so the build-time
 * sitemap script (plain Node, no TSX/TS transpilation) can read it directly.
 *
 * `status: 'planned'` entries are title-only — no body, no route, no sitemap
 * entry. Never fabricate body content for a planned entry; add real content
 * and flip status to 'published' only once it's actually authored.
 */
export type InsightArticleData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string[];
  status: 'published' | 'planned';
};

export const insights: InsightArticleData[] = raw as InsightArticleData[];

export const publishedInsights = insights.filter((a) => a.status === 'published');
export const plannedInsights = insights.filter((a) => a.status === 'planned');
