<script lang="ts">
	import '../app.css';
	import { Button, Lenis, Nav, PageTransition, ProgressBar } from '$lib/components';
	import { continueToSite, userSettings } from '$lib/stores';
	import { onNavigate } from '$app/navigation';

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
			<div class="m-auto flex h-screen max-w-lg flex-col items-center justify-center gap-2 p-4">
				<span class="text-xl">initializing K.U.F.A. mind control protocol...</span>
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
