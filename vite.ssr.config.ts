import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Separate, minimal config for building src/entry-static.tsx into a plain
 * Node ESM module (dist-ssr/entry-static.mjs) that
 * scripts/build-static-pages.mjs imports directly. Keeps the SSR build fully
 * isolated from the main vite.config.ts used for the homepage/client bundle.
 *
 * No new dependency: this is Vite's own `--ssr` build target.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    ssr: 'src/entry-static.tsx',
    outDir: 'dist-ssr',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'entry-static.mjs',
      },
    },
  },
});
