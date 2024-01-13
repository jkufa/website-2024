<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
  import { loadedComponents } from '$lib/components';

	export let complete = false;
	const progress = tweened(0, { duration: 2000, delay: 100, easing: cubicInOut });

	let barRef: HTMLDivElement;

  const TOTAL = 2;

  loadedComponents.subscribe((numLoaded) => progress.set(numLoaded / TOTAL));
  progress.subscribe((value) => {
    if (value === 1) complete = true;
  });

</script>

<div
	class="
  flex h-10 w-full justify-end border border-solid border-pistachio p-1 transition-all
  focus-within:outline-none
  "
>
	<div
		bind:this={barRef}
		class="h-full w-full origin-left bg-pistachio"
		style="transform: scaleX({$progress})"
	></div>
</div>
