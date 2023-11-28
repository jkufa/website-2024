<script lang="ts">
	import About from '$lib/components/about.svelte';
	import Cursor from '$lib/components/cursor.svelte';
	import Landing from '$lib/components/landing.svelte';
	import { createScene } from '$lib/scene';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	let lenis: Lenis;
	let follow = false;
	let cursor: HTMLDivElement;
  let el:HTMLCanvasElement;

	onMount(() => {
    createScene(el);
		lenis = new Lenis({
			lerp: 0.075
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		lenis.on('scroll', (e: number) => {
			lenis.progress > 0.3 ? (follow = true) : (follow = false);
		});

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<canvas bind:this={el} class="fixed" />
<Cursor bind:follow bind:el={cursor} />
<!-- <Landing /> -->
<!-- <About /> -->
<div class="h-screen"></div>
