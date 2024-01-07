<script lang="ts">
	export let id: string;
	/**
	 * extra classes appended to the end
	 */
	export let styles: string = '';
</script>

<section
	{id}
	class="mx-4 flex min-h-screen flex-col gap-12 md:mx-8 lg:mx-16 {styles}"
	{...$$restProps}
>
	<slot />
</section>
