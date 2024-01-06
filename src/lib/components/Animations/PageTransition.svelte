<script lang="ts">
	import { onMount } from 'svelte';
	import { quartOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	const slide = tweened(0, { delay: 100, duration: 1000, easing: quartOut });

	let ref: HTMLDivElement;

	onMount(() => {
		slide.set(-1).then(() => ref.remove());
	});
</script>

<div
	bind:this={ref}
	class="fixed top-0 z-50 h-screen w-screen translate-y-[var(--pos)] bg-off-black"
	style="--pos: {$slide * 100}%"
	on:scroll|preventDefault|stopPropagation|capture
></div>

<style lang="postcss">
</style>
