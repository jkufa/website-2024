<script lang="ts">
	import About from '$lib/components/about.svelte';
	import Cursor from '$lib/components/cursor.svelte';
	import Landing from '$lib/components/landing.svelte';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';

	let lenis: Lenis;

	onMount(() => {
		lenis = new Lenis({
			lerp: 0.075
		});

		lenis.on('scroll', (e: number) => {
			console.log(e);
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

<Cursor />
<Landing />
<About />
<!-- <div class="h-screen"></div> -->
