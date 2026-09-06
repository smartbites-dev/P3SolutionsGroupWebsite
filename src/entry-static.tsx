import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import App from './App';
import { insights, publishedInsights } from './data/insights';
import type { InsightArticleData } from './data/insights';

/**
 * Build-time-only entry point. Compiled by `vite.ssr.config.ts` into a plain
 * Node ESM module (`dist-ssr/entry-static.mjs`) that
 * `scripts/build-static-pages.mjs` imports directly — that script is plain
 * Node and can't transpile TSX itself, so this is where that transpilation
 * happens instead, via Vite/esbuild.
 *
 * Renders the *same* <App/> route table used by main.tsx (BrowserRouter) and
 * local dev — wrapped in StaticRouter instead, for a specific path. One
 * route table, one set of page components, never a separate static-only
 * implementation.
 */
export { insights, publishedInsights };
export type { InsightArticleData };

export function renderRoute(path: string): string {
  return renderToString(
    <StaticRouter location={path}>
      <App />
    </StaticRouter>
  );
}
