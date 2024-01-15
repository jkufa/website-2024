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
	draggable="false"
	class="
    flex
    w-full items-center justify-between
    ps-4
    outline
    outline-1
    outline-transparent

    transition-[outline,box-shadow]
    delay-100
    duration-200
    ease-circular-in-out

    focus-within:shadow-outline
    focus-within:outline-none
    hover:cursor-pointer
    hover:outline-pistachio
    
    md:ps-8
    xl:ps-[2%]
    "
	on:mouseenter={transitionIn}
	on:mouseleave={transitionOut}
	on:focusin={transitionIn}
	on:focusout={transitionOut}
>
	<span
		class="
      text-clamp-md
      font-medium
      transition-transform duration-500
      ease-out
    "
		class:translate-x-8={showImg}
	>
		{title}
	</span>
	<img
		{src}
		{alt}
		class="
      max-h-20
      transition-[opacity,transform]
      delay-100
      duration-300
      ease-circular-in-out
      md:max-h-32
      lg:max-h-[6vw]

    "
		class:scale-100={showImg}
		class:opacity-100={showImg}
		class:opacity-0={!showImg}
		class:scale-0={!showImg}
	/>
</a>

<style lang="postcss">
</style>
