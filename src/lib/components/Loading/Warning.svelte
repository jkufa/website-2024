<script lang="ts">
	import { P } from '$lib/design';
	import { userSettings } from '$lib/stores';
	import Switch from '../Nav/Switch.svelte';
	$: ({ animationsOn } = $userSettings);
</script>

<div
	class="bottom-4 mt-4 flex max-w-2xl flex-col gap-2 border border-pistachio p-6 !font-normal transition-opacity focus-within:opacity-100 hover:opacity-100 md:absolute md:opacity-60"
>
	<strong class="w-fit text-base md:text-lg lg:text-xl">NOTICE</strong>
	<aside class="" role="note" aria-label="Important information">
		<p class="text-sm opacity-80 md:text-base lg:text-lg">
			This website contains animations that may cause discomfort in sensitive individuals.
			Animations can be disabled at any time in the navigation menu.
		</p>
	</aside>
	<div class="mt-6 flex items-center justify-between pe-6 md:text-xl lg:text-2xl">
		<Switch
			bind:checked={animationsOn}
			onToggle={() => ($userSettings.animationsOn = !$userSettings.animationsOn)}
			id="anim"
			label="Animations"
		/>
	</div>
</div>
