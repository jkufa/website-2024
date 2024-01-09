<script lang="ts">
	import { onMount } from 'svelte';
	import { quadOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let animateOff: boolean;
	export let words = ['KINETICALLY', 'UNREAL', 'FRAMING', 'ALTERATION'];

	let textHeight: number;
	let containerW: number;
	let count = tweened(0, { delay: 400, duration: 800, easing: quadOut });

	let smallW = 63;
	let largeW = 117;

	let bindedW: number;
	let bindedW2: number;

	containerW = largeW;

	$: multiplier = textHeight * $count;

	async function animate() {
		for (let i = 0; i <= words.length; i++) {
			await count.set(i);
			if (containerW !== largeW) containerW = largeW; // Only set it on first pass
		}
		reset();

		if (animateOff) return;

		await new Promise((resolve) => setTimeout(resolve, 2000));

		animate();
	}
	async function reset() {
		await count.set(0);
		containerW = smallW;
	}

	onMount(async () => {
		smallW = bindedW2;
		largeW = bindedW;
		containerW = smallW;
		animate();
	});
	// 116.33px
	// 62.78
	//
</script>

<div
	class="relative overflow-hidden font-semibold transition-[width] duration-500"
	style="width: {containerW}px;"
>
	<div style="transform: translateY(calc(100% - {multiplier}px));">
		{#each words as word, i}
			{#if i < words.length - 1}
				<div class="w-fit">{word}</div>
			{:else}
				<!-- Bind only final element's height to reduce overhead -->
				<div class="w-fit pe-[2px]" bind:clientWidth={bindedW} bind:clientHeight={textHeight}>
					{word}
				</div>
			{/if}
		{/each}
	</div>
	<div
		bind:clientWidth={bindedW2}
		class="absolute bottom-0 -z-10 transition-opacity duration-300"
		class:opacity-0={$count > 0}
	>
		K.U.F.A
	</div>
</div>
