import { fileURLToPath, URL } from 'node:url';

import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

import viteCompression from 'vite-plugin-compression';
import terser from '@rollup/plugin-terser';

// https://vite.dev/config/
export default defineConfig({
  mode: 'production',
  publicDir: false,
  plugins: [
    vue(),
    viteCompression()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    outDir: fileURLToPath(new URL('./lib', import.meta.url)),
    minify: true,
    lib: {
      entry: './src/code-markup/index.js',
      name: 'code-markup',
      cssFileName: 'style',
      fileName: () => 'index.js',
      formats: ['es'],
      minifyES: true
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        plugins: [terser()]
      },
    },
  },
})
