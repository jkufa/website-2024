<script lang="ts">
	import { Button, Nav, ProgressBar } from '$lib/components';
	import '../app.css';
	import { continueToSite, userSettings } from '$lib/stores';

	let loaded: boolean;
</script>

<main class="text-pistachio">
	{#if !$userSettings.devMode && !$continueToSite}
		<div class="justify-cente m-auto flex h-screen max-w-lg flex-col items-center gap-2 p-4">
			<span class="text-xl">initializing K.U.F.A. mind control protocol...</span>
			<ProgressBar bind:complete={loaded} />
			<Button disabled={!loaded} label="Continue" onClick={() => ($continueToSite = true)} />
		</div>
	{:else}
		<Nav />
		<slot />
	{/if}
</main>

<style lang="postcss">
	:global(body) {
		margin: 0;
	}
</style>
