import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';
import { ArticleCard } from '../components/insights/ArticleCard';
import { publishedInsights, plannedInsights } from '../data/insights';
import { usePageTitle } from '../hooks/usePageTitle';

/**
 * /insights — same component drives local dev, the production client
 * bundle, and the build-time prerender (see entry-static.tsx). Published and
 * planned articles are shown in visibly separate lists — a planned title is
 * never presented as if it were live content.
 */
export function InsightsLandingPage() {
  usePageTitle('Insights');

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <Container className="py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold tracking-tight text-p3-ink sm:text-4xl">Insights</h1>
            <p className="mt-4 text-lg leading-relaxed text-zinc-600">
              Notes on AI-driven software delivery — spec-driven development, the AI-DLC → ADLC
              maturity model, and where human judgment stays load-bearing.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6">
            {publishedInsights.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>

          {plannedInsights.length > 0 && (
            <div className="mx-auto mt-16 max-w-3xl border-t border-zinc-200 pt-10">
              <h2 className="font-mono text-xs uppercase tracking-eyebrow text-zinc-500">
                Coming soon
              </h2>
              <ul className="mt-5 space-y-3">
                {plannedInsights.map((article) => (
                  <li key={article.slug} className="text-zinc-500">
                    {article.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </main>
      <Footer />
    </div>
  );
}
