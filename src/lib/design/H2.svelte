<script lang="ts">
	/**
	 * extra classes appended to the end
	 */
	export let styles: string = '';
	export let variant: 'default' | 'large' = 'default';
</script>

{#if variant === 'default'}
	<h2 class="default tracking max-w-full font-extrabold {styles}" {...$$restProps}>
		<slot />
	</h2>
{:else if variant === 'large'}
	<h2 class="large tracking max-w-full font-extrabold leading-[.9] {styles}" {...$$restProps}>
		<slot />
	</h2>
{/if}

<style lang="postcss">
	.large {
		font-size: clamp(2rem, 7.25vw, 9rem);
	}
	.default {
		font-size: clamp(2rem, 5.5vw, 6rem);
	}
	h2 {
		font-family: 'Archivo Expanded';
		line-height: 0.9 !important;
	}
</style>
