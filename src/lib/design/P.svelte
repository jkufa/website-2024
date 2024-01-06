<script lang="ts">
	export let variant: 'default' | 'large' = 'default';
</script>

{#if variant === 'default'}
	<p class="">
		<slot />
	</p>
{:else if variant === 'large'}
	<p class="text-5xl font-semibold leading-snug">
		<slot />
	</p>
{/if}
