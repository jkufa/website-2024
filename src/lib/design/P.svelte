<script lang="ts">
	export let variant: 'default' | 'large' = 'default';
</script>

{#if variant === 'default'}
	<p class="text-vw-base leading-normal">
		<slot />
	</p>
{:else if variant === 'large'}
	<p class="text-vw-lg">
		<slot />
	</p>
{/if}

<style lang="postcss">
</style>
