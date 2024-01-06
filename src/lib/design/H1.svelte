<script lang="ts">
	export let ref: HTMLHeadingElement | undefined = undefined;
</script>

<h1
	bind:this={ref}
	class="leading-85 absolute bottom-4 left-4 font-black tracking-tighter text-pistachio md:leading-9"
	{...$$restProps}
>
	<slot />
</h1>

<style lang="postcss">
	h1 {
		font-size: clamp(4rem, 13vw, 13rem);
	}
</style>
