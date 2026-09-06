import { Link } from 'react-router-dom';
import type { InsightArticleData } from '../../data/insights';

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}

export function ArticleCard({ article }: { article: InsightArticleData }) {
  return (
    <Link
      to={`/insights/${article.slug}`}
      className="block rounded-2xl border border-zinc-200 bg-white p-7 transition-colors duration-300 hover:border-p3-red/40"
    >
      <p className="font-mono text-xs uppercase tracking-eyebrow text-zinc-500">
        {formatDate(article.date)}
      </p>
      <h3 className="mt-3 text-lg font-semibold text-p3-ink">{article.title}</h3>
      <p className="mt-2.5 leading-relaxed text-zinc-600">{article.description}</p>
    </Link>
  );
}
