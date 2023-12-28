<script lang="ts">
	import { cubicIn, quintOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import SlideInOut from '../SlideInOut.svelte';

	export let active = false;
	export let href: string;
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
	<a
		{href}
		draggable="false"
		class="
    ms-auto
    p-4
    font-semibold
    text-off-black
  
    focus-visible:outline-none
    md:my-1
    "
		style="--bg-pos: {$slide * 100}%"
		on:mouseenter={slideIn}
		on:mouseleave={slideOut}
		on:focusin={slideIn}
		on:focusout={slideOut}
	>
		<slot />
	</a>
</SlideInOut>
