import { hydrateRoot } from 'react-dom/client';
import { Header } from './components/layout/Header';

/**
 * Insights article pages are static, prerendered HTML (see `entry-ssr.tsx`) —
 * not part of the homepage's client bundle. This is the one piece of
 * interactivity they need: the mobile-menu toggle, which the accessibility
 * floor (`.ai/agents/frontend-engineer.md`) requires stay working. Everything
 * else on the page (the article body, the footer) is inert static HTML.
 */
const el = document.getElementById('header-root');
if (el) {
  hydrateRoot(el, <Header basePath="/" />);
}
