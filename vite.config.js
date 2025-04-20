import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Use '/' unless deploying to a sub-path, e.g., '/my-app/'
  base: '/', 
  build: {
    outDir: 'dist', // Specify the output directory for build
  },
});
