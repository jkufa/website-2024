<script lang="ts">
	import { onMount } from 'svelte';
	import { quartOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	/**
	 * A half transition is from 0% -> -100%
	 */
	export let half = false;
	export let transitioning = false;
	export let id: number;

	let ref: HTMLDivElement;

	$: offset = id * 40;
	$: start = half ? 1 : 0;
	$: slide = tweened(start, { delay: 100 + offset, duration: 1000, easing: quartOut });

	onMount(async () => {
		if (half) {
			await slide.set(0);
		}
		slide.set(-1).then(() => {
			transitioning = false;
			console.log('deleting');
			ref.remove();
		});
	});
</script>

<div class="w-full translate-y-[var(--pos)] bg-off-black" style="--pos: {$slide * 100}%"></div>
