<script lang="ts">
	import Lenis from '@studio-freight/lenis';
	import '../app.css';
	import { onMount } from 'svelte';

	let lenis: Lenis;

	// Handle Lenis
	onMount(async () => {
		// ensures window exists
		lenis = new Lenis({
			lerp: 0.075
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
