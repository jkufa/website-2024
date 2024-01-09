<script lang="ts">
	import { onMount } from 'svelte';
	import { quartOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let showEnd = false;
	export let start: string = '';
	export let end: string = '';

	let startW: number;
	let endW: number;

	let width: number;
	let mounted = false;

	let widths: [number, number] = [0, 0];
	const vals = {
		translate: 0,
		width: 0,
	};
	const animations = tweened(vals, { duration: 800, easing: quartOut });
	$: vals.width = width;
	$: if (showEnd) animate();

	onMount(() => {
		widths = [startW, endW];
		width = widths[0];
		mounted = true;
	});

	function animate() {
		animations.set({
			translate: 1,
			width: widths[1],
		});
	}
</script>

<div class="relative flex flex-col justify-end" style="width: {$animations.width}px;">
	<div style="transform: translateY(calc(-{$animations.translate * 100}%));">
		<div
			bind:clientWidth={startW}
			class="w-fit transition-opacity duration-500"
			class:opacity-0={showEnd}
		>
			{#if start}
				{start}
			{:else}
				<slot name="start" />
			{/if}
		</div>
		<div bind:clientWidth={endW} class="absolute w-fit" class:hidden={mounted && !showEnd}>
			{#if end}
				{end}
			{:else}
				<slot name="end" />
			{/if}
		</div>
	</div>
</div>
