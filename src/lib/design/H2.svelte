<script lang="ts">
	/**
	 * extra classes appended to the end
	 */
	export let styles: string = '';
</script>

<h2
	class="max-w-full text-5xl font-bold tracking-tighter text-pistachio md:max-w-3xl md:text-8xl {styles}"
	{...$$restProps}
>
	<slot />
</h2>
