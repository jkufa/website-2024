<script lang="ts">
	export let title: string;
	export let alt: string;
	export let src: string;
	export let href: string;

	let showImg = false;

	function transitionIn() {
		showImg = true;
	}
	function transitionOut() {
		showImg = false;
	}
</script>

<a
	{href}
	role="row"
	tabindex="0"
	class="
    flex items-center justify-between border-t border-solid border-pistachio
    transition-[box-shadow,background-color]
    delay-100

    duration-200
    ease-circular-in-out

    focus-within:shadow-outline
    focus-within:outline-none hover:cursor-pointer
    "
	class:bg-off-black={showImg}
	on:mouseenter={transitionIn}
	on:mouseleave={transitionOut}
	on:focusin={transitionIn}
	on:focusout={transitionOut}
>
	<span
		class="
      font-bold transition-transform
      delay-100
      duration-300
      ease-out
      md:text-3xl
    "
		class:translate-x-8={showImg}
	>
		{title}
	</span>
	<img
		{src}
		{alt}
		class="
      max-h-16
      transition-[opacity,transform]
      delay-100
      duration-300
      ease-circular-in-out
      md:max-h-32
      lg:max-h-64

    "
		class:scale-100={showImg}
		class:opacity-100={showImg}
		class:opacity-0={!showImg}
		class:scale-0={!showImg}
	/>
</a>
