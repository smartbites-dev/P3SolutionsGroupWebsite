import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // manifest: true lets scripts/build-static-pages.mjs look up the hashed
    // CSS/JS asset filenames for the prerendered Insights pages' <head>.
    manifest: true,
  },
});
