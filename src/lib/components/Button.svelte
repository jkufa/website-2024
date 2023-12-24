<script lang="ts">
	import { cubicIn } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let onClick: Function = () => {};
	export let label: string;

	let ref: HTMLButtonElement;
	let exit: boolean;

	$: console.log(exit);

	const slide = tweened(1, { duration: 300, delay: 100, easing: cubicIn });

	function slideIn() {
		// 100% to 0
		if ($slide <= 0) {
			slide.set(1, { duration: 0 });
		}

		slide.set(0);
	}

	function slideOut() {
		if ($slide <= 0.4) {
			slide.set(-1);
			return;
		}
		slide.set(1);
	}

	// go from 100% -> 0 -> -100% back to -> 100%
</script>

<button
	bind:this={ref}
	class="
  relative flex w-full justify-center border border-solid border-pistachio bg-gradient-to-r from-off-black
  from-50% to-pistachio to-50% bg-double bg-clip-text
  p-3
  font-semibold
  text-off-black

  transition-transform
  after:absolute
  after:bottom-0
  after:left-0
  after:right-0
  after:top-0
  after:z-[-1] after:bg-gradient-to-r after:from-pistachio after:from-50% after:to-transparent
  after:to-50%
  after:bg-double
  after:content-empty

  focus-within:outline-none
  active:scale-95
  "
	style="--bg-pos: {$slide * 100}%"
	on:click={() => {
		onClick();
	}}
	on:mouseenter={slideIn}
	on:mouseleave={slideOut}
	on:focusin={slideIn}
	on:focusout={slideOut}
>
	{label}
</button>

<style lang="postcss">
	button {
		-webkit-text-fill-color: transparent;
	}
	button,
	button:after {
		background-position: var(--bg-pos);
	}
</style>
