<script lang="ts">
	import { userSettings } from '$lib/stores/userSettings';
	import { PerspectiveInOut } from '../Animations';

	export let title: string;
	export let content: string[];

	$: ({ animationsOn } = $userSettings);
</script>

<!-- Container -->
<div class="flex w-fit max-w-full flex-col gap-3 md:max-w-4xl md:gap-6">
	<!-- Perspective wrapper -->
	<PerspectiveInOut disabled={!animationsOn}>
		<!-- Title -->
		<h2 class="text-5xl font-bold tracking-tighter md:text-8xl">
			{title.toLocaleUpperCase()}
		</h2>
	</PerspectiveInOut>
	{#each content as paragraph}
		<PerspectiveInOut disabled={!animationsOn}>
			<p class="mb-3 text-lg font-light leading-6 md:text-3xl md:leading-10">
				{paragraph}
			</p>
		</PerspectiveInOut>
	{/each}
</div>

<style>
	p {
		font-family: 'system-ui';
		font-weight: 500;
	}
</style>
