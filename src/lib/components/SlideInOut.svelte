<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

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

<div
	role="presentation"
	class="
  relative flex w-full
  bg-gradient-to-r from-off-black from-50% to-pistachio to-50% bg-double bg-clip-text
  text-off-black

  transition-[box-shadow,opacity,transform]
  delay-100
  ease-circular-in-out

  after:absolute
  after:bottom-0
  after:left-0
  after:right-0
  after:top-0
  after:z-[-1] after:bg-gradient-to-r after:from-pistachio after:from-50% after:to-transparent
  after:to-50%
  after:bg-double
  after:content-empty

  focus-within:shadow-outline
  focus-within:outline-none

  active:scale-95
  "
	style="--bg-pos: {$slide * 100}%"
	on:mouseenter={slideIn}
	on:mouseleave={slideOut}
	on:focusin={slideIn}
	on:focusout={slideOut}
>
	<slot />
</div>

<style lang="postcss">
	div {
		-webkit-text-fill-color: transparent;
	}
	div,
	div::after {
		background-position: var(--bg-pos);
	}
</style>
