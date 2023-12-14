import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		sveltekit(),
		visualizer({
			emitFile: true,
			brotliSize: true,
			filename: 'stats.html'
		}) as PluginOption
	],
	ssr: {
		noExternal: ['three', 'gsap']
	}
});
