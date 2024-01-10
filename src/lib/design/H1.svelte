<script lang="ts">
	export let ref: HTMLHeadingElement | undefined = undefined;

	export let styles: string = '';
</script>

<h1
	bind:this={ref}
	class="leading-85 text-clamp-9xl font-black tracking-tighter md:bottom-8 md:left-8 md:leading-9 {styles} uppercase"
	{...$$restProps}
>
	<slot />
</h1>

<style lang="postcss">
	h1 {
		line-height: 0.8 !important;
	}
</style>
