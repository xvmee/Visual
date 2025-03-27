import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'client/netlify-index.html'),
      },
      external: [
        'express',
        'passport',
        'passport-local',
        'express-session',
        'connect-pg-simple',
        'ws',
        'memorystore',
        '@neondatabase/serverless'
      ],
    },
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './client/src') },
      { find: '@assets', replacement: resolve(__dirname, './attached_assets') },
      { find: '@shared', replacement: resolve(__dirname, './shared') }
    ]
  }
});