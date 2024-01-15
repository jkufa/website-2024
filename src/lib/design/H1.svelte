<script lang="ts">
	export let ref: HTMLHeadingElement | undefined = undefined;

	export let styles: string = '';
</script>

<h1
	bind:this={ref}
	class="leading-85 text-clamp-9xl font-extrabold tracking-tighter md:bottom-8 md:left-8 md:leading-9 xl:bottom-[4%] xl:left-[4%] {styles} uppercase"
	{...$$restProps}
>
	<slot />
</h1>
