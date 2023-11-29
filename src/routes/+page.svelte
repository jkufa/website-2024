<script lang="ts">
	import About from '$lib/components/about.svelte';
	import Cursor from '$lib/components/cursor.svelte';
	import Landing from '$lib/components/landing.svelte';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	let lenis: Lenis;
	let follow = false;
	let cursor: HTMLDivElement;
	let el: HTMLCanvasElement;
  let createScene;

	onMount(async () => {
    // ensures window exists
  	createScene = (await import('$lib/scene')).createScene;

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

<canvas bind:this={el} id="container" class="fixed transition-opacity w-full h-full"/>
<!-- <canvas bind:this={el} id="container" class="fixed transition-opacity w-full h-full" class:opacity-20={follow}/> -->
<Cursor bind:follow bind:el={cursor} />
<!-- <Landing /> -->
<!-- <About /> -->
<div class="h-screen"></div>