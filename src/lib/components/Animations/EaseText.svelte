<script lang="ts">
	import { onMount } from 'svelte';
	import { quartOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let showEnd = false;
	export let start: string;
	export let end: string;

	let startW: number;
	let endW: number;

	let mounted = false;

	const vals = {
		translate: 0,
		width: 0,
	};
	const widths = {
		from: 0,
		to: 0,
	};
	const animations = tweened(vals, { duration: 800, easing: quartOut });
	$: if (showEnd) animate();

	onMount(() => {
		// store initial start/end widths on mount to account for layout shifts from css (i.e: display: none)
		widths.from = startW;
		widths.to = endW;
		$animations.width = widths.from;
		mounted = true;
	});

	function animate() {
		animations.set({
			translate: 1,
			width: widths.to,
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
