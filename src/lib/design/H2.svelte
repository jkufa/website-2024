<script lang="ts">
	/**
	 * extra classes appended to the end
	 */
	export let styles: string = '';
	export let variant: 'default' | 'large' = 'default';
</script>

{#if variant === 'default'}
	<h2 class="tracking max-w-full text-clamp-xl font-extrabold uppercase {styles}" {...$$restProps}>
		<slot />
	</h2>
{:else if variant === 'large'}
	<h2 class="tracking max-w-full text-clamp-2xl font-extrabold uppercase {styles}" {...$$restProps}>
		<slot />
	</h2>
{/if}

<style lang="postcss">
	h2 {
		line-height: 1 !important;
	}
</style>
