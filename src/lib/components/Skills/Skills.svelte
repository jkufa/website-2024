<script lang="ts">
	import Line from './Line.svelte';
	export let skills: string[];
	export let range: number;

	const splitSkills: string[][] = [];
	while (skills.length > 0) {
		splitSkills.push(skills.splice(0, range));
	}
</script>

<div class="flex flex-col gap-8">
	{#each splitSkills as line}
		<Line {line} />
	{/each}
</div>
