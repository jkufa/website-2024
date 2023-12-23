<script lang="ts">
	import { onMount } from 'svelte';
	import { scrollPosition } from '$lib/stores';
	import Lenis from '@studio-freight/lenis';

	export let onScroll: () => unknown;

	let lenis: Lenis;

	// Handle Lenis
	onMount(() => {
		lenis = new Lenis({
			lerp: 0.075,
		});

		lenis.on('scroll', () => {
			scrollPosition.set(lenis.animatedScroll);

			onScroll(); // do stuff from other components
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
