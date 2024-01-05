<script lang="ts">
	import Button from '../Button.svelte';
	import type { Image, Link } from './models';

	export let title: string;
	export let description: string;
	export let imgs: Image[];
	export let links: Link[];
	export let showView: boolean;
</script>

<div
	class="fixed left-0 top-0 z-20 flex w-screen justify-between bg-off-black px-8 pt-40 text-pistachio"
	on:scroll|preventDefault|stopPropagation
>
	<!-- Text content -->
	<div class="sticky flex max-w-md flex-col gap-4">
		<h2 class="text-6xl font-bold">
			{title.toLocaleUpperCase()}
		</h2>
		<!-- Links -->
		<div class="flex gap-2">
			{#each links as l}
				<!-- TODO: This should be a button link -->
				<Button label={l.label} />
			{/each}
		</div>
		<p class="leading-5">
			{description}
		</p>
		<!-- Back -->
		<div class="mt-8">
			<Button label="back" onClick={() => (showView = false)} />
		</div>
	</div>
	<!-- Images -->
	<div class="flex max-w-3xl flex-col gap-4">
		{#each imgs as i}
			<img src={i.src} alt={i.alt} class="w-full" />
		{/each}
	</div>
</div>
