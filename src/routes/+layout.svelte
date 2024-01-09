<script lang="ts">
	import '../app.css';
	import { Button, Lenis, Nav, PageTransition, ProgressBar } from '$lib/components';
	import { continueToSite, userSettings } from '$lib/stores';
	import { onNavigate } from '$app/navigation';
	import WordStack from '$lib/components/Loading/WordStack.svelte';

	let loaded: boolean;
	let transition = true;
	let half = true;

	onNavigate(async (navigation) => {
		transition = true;
		half = false;

		// TODO: await PageTransition to be halfway done instead of a hardcoded 1s delay
		return new Promise((res) => setTimeout(res, 1000));
	});
</script>

<Lenis>
	<main class="text-pistachio">
		<!-- Render unique transition for start & stop -->
		{#if transition}
			<PageTransition bind:transitioning={transition} half={!half} />
		{/if}
		{#if !$userSettings.devMode && !$continueToSite}
			<div class="m-auto flex h-screen max-w-2xl flex-col justify-center gap-2 p-4">
				<div class="flex items-end justify-center gap-2 text-lg md:text-xl lg:text-3xl">
					{#if loaded}
						Loaded
					{:else}
						Initializing
					{/if}
					<WordStack animateOff={loaded} /> mind control protocol
				</div>
				<ProgressBar bind:complete={loaded} />
				<Button disabled={!loaded} label="Continue" onClick={() => ($continueToSite = true)} />
			</div>
		{:else}
			<Nav />
			<slot />
		{/if}
	</main>
</Lenis>

<style lang="postcss">
	:global(body) {
		margin: 0;
	}
</style>
