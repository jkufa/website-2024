<script lang="ts">
	import Line from './Line.svelte';

	/**
	 * The number of skills per row.
	 */
	export let range: number;
	export let skills: string[];

	const split: string[][] = [];

	$: copy = [...skills];
	$: range, splitSkills();

	function splitSkills() {
		if (!range) return;

		while (range && copy.length > 0) {
			split.push(copy.splice(0, range));
		}
	}
</script>

<div id="skillz" class="translate-x-100 flex transform flex-col gap-8">
	{#each split as line, id}
		<Line {line} {id} />
	{/each}
</div>
