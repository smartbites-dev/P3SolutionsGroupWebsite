import { renderToStaticMarkup } from 'react-dom/server';
import { InsightArticlePage } from './components/insights/InsightArticlePage';
import { insights } from './data/insights';
import type { InsightArticleData } from './data/insights';

/**
 * Build-time-only entry point. Compiled by `vite.ssr.config.ts` into a plain
 * Node ESM module (`dist-ssr/entry-ssr.mjs`) that `scripts/build-insights-pages.mjs`
 * imports directly — that script is plain Node and can't transpile TSX itself,
 * so this is where that transpilation happens instead, via Vite/esbuild.
 *
 * Re-exports `insights` too, so the build script has one import for both the
 * data and the render function, rather than needing its own way to read
 * TypeScript source.
 */
export { insights };
export type { InsightArticleData };

export function renderInsightArticle(article: InsightArticleData): string {
  return renderToStaticMarkup(<InsightArticlePage article={article} />);
}
