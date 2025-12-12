import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';

import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';

import terser from '@rollup/plugin-terser';

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 8080
  },
  base: '/vue-code-markup/',
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        entryFileNames: 'js/main.js',
        assetFileNames: (info) => {
          const name = info?.name;
          const isCSS = name && name?.endsWith('.css');

          if (isCSS) return 'css/styles[extname]';

          return 'images/[name][extname]';
        },
        plugins: [terser({
          format: {
            comments: false
          },
        })]
      },
    },
  },
})
