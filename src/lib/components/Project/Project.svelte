<script lang="ts">
	import Item from './Item.svelte';
	import View from './View.svelte';
	import type { Image, Link } from './models';

	export let title: string;
	export let description: string;
	export let imgs: Image[];
	export let links: Link[];
	export let showingProject: boolean;
	let showView: boolean;

	$: showView = showingProject;
</script>

{#if showView}
	<View bind:showView {title} {description} {imgs} {links} />
{/if}
<Item bind:showView {title} src={imgs[0].src} alt={imgs[0].alt} />
