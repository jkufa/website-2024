<script lang="ts">
	import Line from './Line.svelte';

	export let skills: string[];
	export let range: number;

	const split: string[][] = [];

	$: copy = [...skills];
	$: while (copy.length > 0) {
		split.push(copy.splice(0, range));
	}
</script>

<div class="translate-x-100 flex transform flex-col gap-8">
	{#each split as line, i}
		<Line {line} id={i} />
	{/each}
</div>
