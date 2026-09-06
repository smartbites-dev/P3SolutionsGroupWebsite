import { Link } from 'react-router-dom';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';

/**
 * Client-side catch-all only (route "*") — a direct/refreshed load of an
 * unmatched path still gets Netlify's plain default 404, since netlify.toml's
 * SPA fallback isn't enabled (deliberately deferred, see KAN-1). This covers
 * navigation to an unmatched path from inside an already-loaded session.
 */
export function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main id="main">
        <Container className="py-24 text-center">
          <h1 className="text-2xl font-bold text-p3-ink">Page not found</h1>
          <p className="mt-4 text-lg text-zinc-600">
            <Link to="/" className="font-semibold text-p3-red hover:underline">
              Back home
            </Link>
          </p>
        </Container>
      </main>
      <Footer />
    </div>
  );
}
