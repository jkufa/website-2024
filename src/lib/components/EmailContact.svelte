<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { Expo } from 'gsap';

	export let href: string;
	export let hoverText: string;

	$: cleanedText = hoverText.replace(/'/g, "\\'").toLocaleUpperCase();

	const slide = tweened(1, { duration: 1000, delay: 100, easing: Expo.easeOut });

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

<a
	{href}
	class="
  relative flex w-full
  items-center
  justify-center
  gap-4
  overflow-hidden
  border
  border-pistachio
  bg-off-black
  py-4

  text-clamp-lg
  font-semibold

  transition-[box-shadow,transform]
  delay-100
  after:absolute
  after:bottom-0
  after:left-0
  after:right-0
  after:top-0
  after:flex
  after:items-center
  after:justify-center
  after:bg-pistachio
  after:text-clamp-lg
  after:font-bold
  after:text-off-black

  after:content-empty
  focus-visible:shadow-outline
  focus-visible:outline-none
  active:scale-95
  md:w-8/12
  "
	style="--ec-content: '{cleanedText}'; --bg-pos: {$slide * 100}%;"
	on:mouseenter={slideIn}
	on:mouseleave={slideOut}
	on:focusin={slideIn}
	on:focusout={slideOut}
>
	<slot />
</a>

<style lang="postcss">
	a::after {
		content: var(--ec-content);
		transform: translateY(var(--bg-pos));
	}
</style>
