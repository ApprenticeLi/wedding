import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslintPlugin from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // 配置eslintPlugin
    eslintPlugin({
      cache: false,
      include: /\.(jsx?|tsx?|vue|svelte)$/,
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
