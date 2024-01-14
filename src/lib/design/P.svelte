<script lang="ts">
	export let variant: 'base' | 'large' = 'base';

	let ref: HTMLParagraphElement;

	$: base = variant === 'base';
	$: large = variant === 'large';
</script>

<p bind:this={ref} class:text-vw-base={base} class:text-vw-lg={large} {...$$restProps}>
	<slot />
</p>
