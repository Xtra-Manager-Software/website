import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, loadEnv } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig(({ mode }) => {
	return {
		plugins: [
			sveltekit(),
			tailwindcss(),
			Icons({
				compiler: 'svelte',
			}),
		]
	};
});
