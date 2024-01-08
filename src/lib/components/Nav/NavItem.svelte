<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { SlideInOut } from '../Animations';
	import { lenisInstance } from '..';

	/**
	 * Must be an id, must be unique
	 */
	export let href: string;

	const slide = tweened(1, { duration: 400, delay: 100, easing: cubicIn });

	// Doesn't work
	function scrollTo() {
		const target = href ? `#${href}` : 'top';
		$lenisInstance.scrollTo(target);
	}
</script>

<SlideInOut>
	<a
		href="/#{href}"
		draggable="false"
		class="
    ms-auto
    p-3
    font-semibold
    text-off-black
  
    focus-visible:outline-none
    md:my-1
    md:p-4
    "
		on:click|preventDefault={scrollTo}
	>
		<slot />
	</a>
</SlideInOut>
