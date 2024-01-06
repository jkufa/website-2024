<script lang="ts">
	import Column from './Column.svelte';

	/**
	 * A half transition is from 0% -> -100%
	 */
	export let half = false;
	export let transitioning = false;

	const colNum = Array(8);
</script>

<div class="fixed top-0 z-50 flex h-screen w-screen">
	{#each colNum as _, i}
		{#if i < colNum.length - 1}
			<Column id={i} {half} {transitioning} />
		{:else}
			<!-- Only bind to final column -->
			<Column id={i} {half} bind:transitioning />
		{/if}
	{/each}
</div>
