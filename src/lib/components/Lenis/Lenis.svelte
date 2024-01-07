<script lang="ts">
	import { onMount, setContext } from 'svelte';
	import { scrollPosition } from '$lib/stores';
	import Lenis from '@studio-freight/lenis';
	import { writable } from 'svelte/store';
	import { lenisFunctionStore, lenisInstance } from '.';

	let lenis: Lenis;

	const lenisContext = writable<Lenis>();
	setContext('lenis', lenisContext);

	// Handle Lenis
	onMount(() => {
		lenis = new Lenis({
			lerp: 0.075,
		});

		lenisInstance.set(lenis);

		lenis.on('scroll', () => {
			scrollPosition.set(lenis.animatedScroll);

			// run function from other components
			$lenisFunctionStore();
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
