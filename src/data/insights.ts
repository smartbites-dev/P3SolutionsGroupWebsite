import raw from './insights.json';

/**
 * An Insights article. Content is data — see `../../.ai/memory/architecture.md`.
 * The raw array lives in `insights.json` (not `.ts`) so the build-time sitemap
 * script (plain Node, no TSX/TS transpilation) can read it directly.
 */
export type InsightArticleData = {
  slug: string;
  title: string;
  description: string;
  date: string;
  body: string[];
};

export const insights: InsightArticleData[] = raw;
