import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Separate, minimal config for building src/entry-ssr.tsx into a plain Node
 * ESM module (dist-ssr/entry-ssr.mjs) that scripts/build-insights-pages.mjs
 * imports directly. Keeps the SSR build fully isolated from the main
 * vite.config.ts used for the homepage bundle — no shared build options to
 * accidentally cross-affect the two.
 *
 * No new dependency: this is Vite's own `--ssr` build target, run as
 * `vite build --config vite.ssr.config.ts` (see package.json's `build` script).
 */
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-ssr.tsx',
    outDir: 'dist-ssr',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'entry-ssr.mjs',
      },
    },
  },
});
