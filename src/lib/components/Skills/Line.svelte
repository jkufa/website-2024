<script lang="ts">
	import Skill from './Skill.svelte';
	export let line: string[];
</script>

<div class="flex gap-6">
	{#each line as s}
		<Skill label={s} />
	{/each}
</div>
