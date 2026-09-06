import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // `manifest: true` lets scripts/build-insights-pages.mjs look up the
    // hashed CSS/JS asset filenames instead of parsing dist/index.html.
    manifest: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        // Hydrates only the Header on prerendered Insights article pages
        // (see src/insights-hydrate.tsx) — the homepage entry above is
        // unaffected by this addition.
        'insights-hydrate': 'src/insights-hydrate.tsx',
      },
    },
  },
});
