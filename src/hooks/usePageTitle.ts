import { useEffect } from 'react';

/**
 * Production's prerendered Insights pages get a real per-route <title> baked
 * in by scripts/build-static-pages.mjs. In local dev (and for '/', which is
 * never prerendered), nothing else sets it — this keeps the tab title
 * consistent across dev and prod without needing a build step to see it.
 */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = `${title} | P3 Solutions Group`;
  }, [title]);
}
