import { Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { InsightsLandingPage } from './pages/InsightsLandingPage';
import { InsightsArticlePage } from './pages/InsightsArticlePage';
import { NotFound } from './pages/NotFound';

/**
 * The single route table — used identically by local dev, the production
 * client bundle (main.tsx, wrapped in BrowserRouter), and the build-time
 * prerender path (entry-static.tsx, wrapped in StaticRouter). One component
 * per route; never a separate dev-only or build-only page implementation.
 */
function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/insights" element={<InsightsLandingPage />} />
      <Route path="/insights/:slug" element={<InsightsArticlePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
