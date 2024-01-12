import { resolve } from 'path';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig, type PluginOption } from 'vite';
import { threeMinifier } from '@yushijinhun/three-minifier-rollup';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
	plugins: [
		sveltekit(),
		threeMinifier(),
		visualizer({
			emitFile: true,
			brotliSize: true,
			filename: 'stats.html',
		}) as PluginOption,
	],
	ssr: {
		noExternal: ['three', 'gsap'],
	},
  resolve: {
    alias: {
      $fonts: resolve('./static/fonts')
    }
  }
});
