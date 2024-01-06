<script lang="ts">
	export let ref: HTMLHeadingElement | undefined = undefined;

	export let styles: string = '';
</script>

<h1
	bind:this={ref}
	class="leading-85 font-black tracking-tighter md:bottom-8 md:left-8 md:leading-9 {styles}"
	{...$$restProps}
>
	<slot />
</h1>

<style lang="postcss">
	h1 {
		font-size: clamp(4rem, 13vw, 20rem);
		line-height: 0.8 !important;
		font-family: 'Archivo Expanded';
	}
</style>
