import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

const rootEl = document.getElementById('root')!;

const app = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

// '/' is served from the original index.html (empty #root) — plain client
// render, unchanged from before routing existed. /insights and
// /insights/:slug are prerendered at build time (see entry-static.tsx) —
// #root already has real markup, so hydrate instead of re-creating it.
if (rootEl.hasChildNodes()) {
  hydrateRoot(rootEl, app);
} else {
  createRoot(rootEl).render(app);
}
