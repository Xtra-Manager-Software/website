import { defineConfig, loadEnv } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Icons from 'unplugin-icons/vite'
import tailwindcss from '@tailwindcss/vite'
import viteCompression from 'vite-plugin-compression';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), 'API_')

  return {
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
    server: {
      proxy: {
        '/api': {
          target: env.API_URL,
          changeOrigin: true,
          secure: false,
        }
      }
    }
  }
})
