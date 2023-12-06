<script lang="ts">
	import Mug from '$lib/components/Mug.svelte';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';
	import gsap from 'gsap';

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

		gsap.from('h1', {
			opacity: 0,
			y: 200,
			delay: 0.2,
			duration: 2,
			ease: 'power4.out'
		});

		return () => {
			lenis.destroy();
		};
	});
</script>

<!-- <canvas bind:this={el} id="container" class="fixed -z-10 h-full w-full transition-opacity" /> -->
<canvas
	bind:this={el}
	id="container"
	class="fixed -z-10 h-full w-full transition-opacity duration-500"
	class:opacity-20={follow}
/>
<div class="flex h-screen flex-col items-center justify-center gap-10">
	<Mug bind:follow bind:el={cursor} />
	<h1
		class="leading-85 absolute bottom-12 text-center text-6xl font-black tracking-tighter text-off-white md:text-9xl md:leading-9 md:tracking-tightest lg:text-10xl"
	>
		HIRE JACK KUFA
	</h1>
</div>
<!-- <Landing /> -->
<!-- <About /> -->
<div class="h-screen"></div>
