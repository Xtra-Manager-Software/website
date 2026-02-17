import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  base: '/',
  plugins: [
    svelte(),
    Icons({
      compiler: 'svelte',
    }),
    tailwindcss(),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['svelte'],
        },
      },
    },
  },
})
