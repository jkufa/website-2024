<script lang="ts">
	export let variant: 'base' | 'large' = 'base';

	let ref: HTMLParagraphElement;

	$: base = variant === 'base';
	$: large = variant === 'large';
</script>

<p bind:this={ref} class:text-clamp-base={base} class:text-clamp-lg={large} {...$$restProps}>
	<slot />
</p>
