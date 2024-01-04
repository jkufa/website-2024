<script lang="ts">
	import Line from './Line.svelte';

	export let skills: string[];
	/**
	 * The number of skills per row.
	 */
	export let range: number;

	const split: string[][] = [];

	$: copy = [...skills];
	$: while (copy.length > 0) {
		split.push(copy.splice(0, range));
	}
</script>

<div id="skillz" class="translate-x-100 flex transform flex-col gap-8">
	{#each split as line, id}
		<Line {line} {id} />
	{/each}
</div>
