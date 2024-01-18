<script lang="ts">
	export let variant: 'base' | 'large' | 'small' = 'base';

	let ref: HTMLParagraphElement;

	$: base = variant === 'base';
	$: large = variant === 'large';
	$: small = variant === 'small';
</script>

<p
	bind:this={ref}
	class:text-clamp-sm={small}
	class:text-clamp-base={base}
	class:text-clamp-lg={large}
	{...$$restProps}
>
	<slot />
</p>
