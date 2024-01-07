<script lang="ts">
	export let variant: 'default' | 'large' = 'default';
</script>

{#if variant === 'default'}
	<p class="default font-semibold leading-normal">
		<slot />
	</p>
{:else if variant === 'large'}
	<p class="large font-semibold !leading-snug">
		<slot />
	</p>
{/if}

<style lang="postcss">
	.large {
		font-size: clamp(1.25rem, 2.5vw, 3.75rem);
	}
	.default {
		font-size: clamp(0.875rem, 1vw, 1.5rem);
	}
</style>
