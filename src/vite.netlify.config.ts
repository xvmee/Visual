import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { existsSync } from 'fs';

// Determine if we're building on Netlify
const isNetlify = process.env.NETLIFY === 'true';

// Get the correct base directory
const baseDir = isNetlify ? process.cwd() : __dirname;

// Find the client directory
const findClientDir = () => {
  // Sprawdź, czy katalog client istnieje w bieżącym katalogu
  if (existsSync(resolve(baseDir, 'client'))) {
    return resolve(baseDir, 'client');
  }
  
  // Sprawdź, czy katalog client istnieje w katalogu nadrzędnym
  if (existsSync(resolve(baseDir, '../client'))) {
    return resolve(baseDir, '../client');
  }
  
  // Domyślnie zwróć client w bieżącym katalogu
  return resolve(baseDir, 'client');
};

const clientDir = findClientDir();
console.log('Client directory:', clientDir);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: clientDir,
  publicDir: existsSync(resolve(baseDir, 'public')) 
    ? resolve(baseDir, 'public') 
    : undefined,
  build: {
    outDir: resolve(baseDir, 'dist'),
    emptyOutDir: true,
    minify: true,
    cssMinify: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: resolve(clientDir, 'src') },
      { find: '@assets', replacement: resolve(baseDir, 'attached_assets') },
      { find: '@shared', replacement: resolve(baseDir, 'shared') }
    ]
  }
});
