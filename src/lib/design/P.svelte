<script lang="ts">
	export let variant: 'default' | 'large' = 'default';
</script>

{#if variant === 'default'}
	<p class="">
		<slot />
	</p>
{:else if variant === 'large'}
	<p class="large max-w-[90%] font-semibold !leading-snug">
		<slot />
	</p>
{/if}

<style lang="postcss">
	.large {
		font-size: clamp(1.25rem, 2.5vw, 3.75rem);
	}
</style>
