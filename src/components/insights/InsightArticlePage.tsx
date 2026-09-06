import { Header } from '../layout/Header';
import { Footer } from '../layout/Footer';
import { Container } from '../layout/Container';
import type { InsightArticleData } from '../../data/insights';

type Props = {
  article: InsightArticleData;
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * A single Insights article page. Rendered at build time to a static file —
 * see `../../entry-ssr.tsx` and `../../../scripts/build-insights-pages.mjs`.
 * Not part of the homepage bundle's route tree; there is no client router.
 */
export function InsightArticlePage({ article }: Props) {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-p3-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>

      <div id="header-root">
        <Header basePath="/" />
      </div>

      <main id="main">
        <Container className="py-16">
          <article className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-eyebrow text-zinc-500">
              {formatDate(article.date)}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-p3-ink sm:text-4xl">
              {article.title}
            </h1>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-700">
              {article.body.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </article>
        </Container>
      </main>

      <Footer basePath="/" />
    </div>
  );
}
