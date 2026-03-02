import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), 'API_');

	return {
		envPrefix: ['VITE_', 'API_'],
		plugins: [
			sveltekit(),
			tailwindcss(),
			Icons({
				compiler: 'svelte',
			}),
		],
		server: {
			allowedHosts: [
				"convinced-reg-qty-cherry.trycloudflare.com"
			],
			proxy: {
				'/api': {
					target: env.API_URL,
					changeOrigin: true,
					secure: false,
				}
			}
		}
	};
});
