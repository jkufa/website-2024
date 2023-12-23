<script lang="ts">
	import { onMount } from 'svelte';
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	let barRef: HTMLDivElement;
	const progress = tweened(0, { duration: 3000, delay: 1000, easing: cubicInOut });
	onMount(() => {
		progress.set(1);
	});
</script>

<div
	class="
  flex h-10 w-full justify-end border border-solid border-pistachio p-1 text-pistachio transition-all
  focus-within:outline-none
  "
>
	<div
		bind:this={barRef}
		class="h-full w-full origin-left bg-pistachio"
		style="transform: scaleX({$progress})"
	></div>
</div>
