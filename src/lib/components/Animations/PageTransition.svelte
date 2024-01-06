<script lang="ts">
	import { onMount } from 'svelte';
	import { quartOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	/**
	 * A half transition is from 0% -> -100%
	 */
	export let half = false;
	export let transitioning = false;

	let ref: HTMLDivElement;

	$: start = half ? 1 : 0;
	$: slide = tweened(start, { delay: 100, duration: 1000, easing: quartOut });

	onMount(async () => {
		if (half) {
			await slide.set(0);
		}
		slide.set(-1).then(() => {
			transitioning = false;
			ref.remove();
		});
	});
</script>

<div
	bind:this={ref}
	class="fixed top-0 z-50 h-screen w-screen translate-y-[var(--pos)] bg-off-black"
	style="--pos: {$slide * 100}%"
></div>

<style lang="postcss">
</style>
