<script lang="ts">
	import Mug from '$lib/components/Mug.svelte';
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

<canvas bind:this={el} id="container" class="fixed -z-10 h-full w-full transition-opacity" />
<!-- <canvas bind:this={el} id="container" class="fixed transition-opacity w-full h-full" class:opacity-20={follow}/> -->
<div class="flex h-screen flex-col items-center justify-center gap-10">
	<Mug bind:follow bind:el={cursor} />
	<h1
		class="leading-90 absolute bottom-12 max-w-5xl text-center text-6xl font-black tracking-tighter text-white md:text-9xl md:leading-9 md:tracking-tightest"
	>
		HIRE JACK KUFA
	</h1>
</div>
<!-- <Landing /> -->
<!-- <About /> -->
<div class="h-screen"></div>
