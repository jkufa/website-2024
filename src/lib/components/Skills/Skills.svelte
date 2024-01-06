<script lang="ts">
	import Line from './Line.svelte';

	/**
	 * The number of skills per row.
	 */
	export let range: number;
	export let skills: string[];

	let split: string[][] = [];

	$: copy = [...skills];
	$: range, splitSkills();

	function splitSkills() {
		if (!range) return;

		split = []; // Need to reset the split
		while (range && copy.length > 0) {
			split.push(copy.splice(0, range));
		}
	}
</script>

<div class="relative -mx-4 w-screen overflow-x-clip">
	<div id="skillz" class="translate-x-100 flex h-full transform flex-col gap-8">
		{#each split as line, id}
			<Line {line} {id} />
		{/each}
	</div>
</div>
