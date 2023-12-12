<script lang="ts">
	import Mug from '$lib/components/Mug.svelte';
	import Background from '$lib/components/Background.svelte';

	let mugElement: HTMLDivElement;
	let title: HTMLHeadingElement;
	let follow: boolean;
	let debug = false;
</script>

<Background bind:follow />
<div class="flex h-screen flex-col items-center justify-center gap-10">
	<Mug bind:follow bind:el={mugElement} />
	<h1
		bind:this={title}
		class="leading-85 absolute bottom-4 text-center font-black tracking-tighter text-off-white md:leading-9"
	>
		HIRE JACK KUFA
	</h1>
</div>
<div class="wrapper h-screen w-screen"></div>

<div class="h-screen"></div>

<style lang="postcss">
	:global(body) {
		margin: 0;
	}
  /* wip */
  h1 {
    font-size: clamp(5rem, 3.8196rem + 5.3963vw, 9rem);
  }
</style>
