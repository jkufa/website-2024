<script lang="ts">
	import '../app.css';
	import {
		Button,
		EaseText,
		Lenis,
		Nav,
		PageTransition,
		ProgressBar,
		WordStack,
		Warning,
	} from '$lib/components';
	import { userSettings } from '$lib/stores';
	import { onNavigate } from '$app/navigation';
	import { onMount } from 'svelte';

	let loaded: boolean;
	let continueToSite: boolean;
	let transition = true;
	let half = true;

	$: ({ introOn, animationsOn, devMode } = $userSettings);

	onMount(() => {
		continueToSite = !introOn;
		transition = animationsOn;
	});

	onNavigate(async (navigation) => {
		if (!animationsOn) return;
		transition = true;
		half = false;

		// TODO: await PageTransition to be halfway done instead of a hardcoded 1s delay
		return new Promise((res) => setTimeout(res, 1000));
	});
</script>

<svelte:head>
	<title>HIRE JACK KUFA</title>
	<meta name="description" content="ENTER NOW TO EXPERIENCE K.U.F.A MIND CONTROL" />
</svelte:head>

<Lenis>
	<main class="text-pistachio">
		<!-- Render unique transition for start & stop -->
		{#if transition}
			<PageTransition bind:transitioning={transition} half={!half} />
		{/if}
		{#if !devMode && !continueToSite}
			<div
				class="m-auto box-content flex h-[100dvh] max-w-2xl flex-col justify-end gap-2 px-4 md:justify-center"
			>
				<div class="-mx-4 flex items-end justify-center gap-2 text-lg md:text-xl lg:text-3xl">
					<EaseText showEnd={loaded} start="Loading" end="Loaded"></EaseText>
					<WordStack animateOff={loaded} /> mind control protocol
				</div>
				<ProgressBar bind:complete={loaded} />
				<Button
					disabled={!loaded}
					label="Begin programming"
					onClick={() => (continueToSite = true)}
				/>
				<Warning />
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
