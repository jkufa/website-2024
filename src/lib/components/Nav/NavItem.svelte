<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { SlideInOut } from '../Animations';
	import { scrollPosition } from '$lib/stores';

	export let href: string;

	const slide = tweened(1, { duration: 400, delay: 100, easing: cubicIn });

	// Doesn't work
	function scrollTo() {
		const body = document.body.getBoundingClientRect().top;
		const el = document.getElementById(href)?.getBoundingClientRect().top ?? 0;
		const diff = el - body;
		console.log(href, body, el, diff, $scrollPosition);
		scrollPosition.set(0);
		console.log($scrollPosition);
	}
</script>

<SlideInOut>
	<a
		href="/#{href}"
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
		on:click={scrollTo}
	>
		<slot />
	</a>
</SlideInOut>
