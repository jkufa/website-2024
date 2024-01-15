<script lang="ts">
	import { userSettings } from '$lib/stores';
	import Line from './Line.svelte';

	/**
	 * The number of skills per row.
	 */
	export let range: number;
	export let skills: string[];

	let split: string[][] = [];

	$: copy = [...skills];
	$: range, splitSkills();
	$: ({ animationsOn } = $userSettings);

	function splitSkills() {
		if (!range) return;

		split = []; // Need to reset the split
		while (range && copy.length > 0) {
			split.push(copy.splice(0, range));
		}
	}
</script>

<div class="container">
	<div
		class="left-0 w-screen overflow-x-clip"
		class:!mx-0={!animationsOn}
		class:absolute={animationsOn}
	>
		<div id="skillz" class="translate-x-100 flex h-full transform flex-col gap-8">
			{#each split as line, id}
				<Line {line} {id} />
			{/each}
		</div>
	</div>
</div>
