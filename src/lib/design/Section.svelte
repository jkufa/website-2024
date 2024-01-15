<script lang="ts">
	export let id: string;
	/**
	 * extra classes appended to the end
	 */
	export let styles: string = '';
</script>

<section
	{id}
	class="mx-4 flex min-h-screen flex-col justify-center gap-6 md:mx-8 md:gap-12 lg:mx-16 xl:mx-4% 4xl:mx-auto 4xl:max-w-[2450px] {styles}"
	{...$$restProps}
>
	<slot />
</section>
