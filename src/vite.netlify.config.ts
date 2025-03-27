import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'client',
  publicDir: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    minify: true,
    cssMinify: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './client/src') },
      { find: '@assets', replacement: resolve(__dirname, './attached_assets') },
      { find: '@shared', replacement: resolve(__dirname, './shared') }
    ]
  }
});
