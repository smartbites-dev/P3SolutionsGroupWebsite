import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { publishedInsights } from '../data/insights';
import { usePageTitle } from '../hooks/usePageTitle';

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

/**
 * Article body is plain data (see `../data/insights.ts`), not markdown — the
 * only inline syntax it carries is `**emphasis**`, rendered as <strong>.
 * Anything more (links, lists) should stay out of body copy rather than
 * growing this into a markdown parser.
 */
function renderEmphasis(paragraph: string) {
  return paragraph.split(/\*\*(.+?)\*\*/g).map((chunk, i) =>
    i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk
  );
}

/**
 * /insights/:slug — same component drives local dev, the production client
 * bundle, and the build-time prerender (see entry-static.tsx). Only
 * published articles resolve; anything else (unknown slug, or a planned
 * article that isn't live yet) renders the same not-found treatment rather
 * than exposing an empty page at a real URL.
 */
export function InsightsArticlePage() {
  const { slug } = useParams();
  const article = publishedInsights.find((a) => a.slug === slug);
  usePageTitle(article?.title ?? 'Insights');

  if (!article) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <main id="main">
          <Container className="py-24 text-center">
            <p className="text-lg text-zinc-600">
              That article isn't published yet.{' '}
              <Link to="/insights" className="font-semibold text-p3-red hover:underline">
                Back to Insights
              </Link>
            </p>
          </Container>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <Container className="py-16">
          <article className="mx-auto max-w-3xl">
            <p className="font-mono text-xs uppercase tracking-eyebrow text-zinc-500">
              {formatDate(article.date)}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-p3-ink sm:text-4xl">
              {article.title}
            </h1>
            {article.author && (
              <p className="mt-3 text-sm font-semibold text-zinc-600">{article.author}</p>
            )}
            <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-700">
              {article.body.map((paragraph, i) => (
                <p key={i}>{renderEmphasis(paragraph)}</p>
              ))}
            </div>
          </article>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
