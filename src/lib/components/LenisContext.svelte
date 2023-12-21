<script lang="ts">
	import { scrollPosition } from '$lib/stores/scrollPosition';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	let lenis: Lenis;
	export let scroll: () => unknown;

	// Handle Lenis
	onMount(() => {
		lenis = new Lenis({
			lerp: 0.075,
		});

		lenis.on('scroll', () => {
			scrollPosition.set(lenis.animatedScroll);

			scroll(); // do stuff from other components
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	});
</script>

<slot />
