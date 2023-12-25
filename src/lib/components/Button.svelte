<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import SlideInOut from './SlideInOut.svelte';

	export let onClick: () => void = () => {};
	export let label: string;
	export let disabled = false;

	const slide = tweened(1, { duration: 400, delay: 100, easing: cubicIn });

	function slideIn() {
		if ($slide <= 0) {
			slide.set(1, { duration: 0 }); // Reset
		}
		slide.set(0); // 100% to 0
	}

	function slideOut() {
		if ($slide <= 0.4) {
			slide.set(-1); // 0 to -100%
			return;
		}
		slide.set(1); // Go back to 100%
	}
</script>

<SlideInOut>
  <button
	class="
  w-full
  border border-solid border-pistachio
  p-3
  font-semibold
  text-off-black

  active:scale-95
  disabled:opacity-50
  focus-visible:outline-none
  "
	style="--bg-pos: {$slide * 100}%"
	{disabled}
	on:click={onClick}
	on:mouseenter={slideIn}
	on:mouseleave={slideOut}
	on:focusin={slideIn}
	on:focusout={slideOut}
>
	{label}
</button>
</SlideInOut>
