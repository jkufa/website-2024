<script lang="ts">
	import { Button, LenisContext } from '$lib/components';
	import Mug from '$lib/components/Mug.svelte';

	export let data;
	$: ({ title, description, imgs, links } = data);
</script>

<LenisContext>
	<Mug follow={true} />
	<section
		class="lg :flex-row mx-8 mt-40 flex flex-col gap-14 bg-off-black text-pistachio md:gap-6"
	>
		<!-- Text content -->
		<div class="flex flex-col gap-4 lg:fixed lg:w-1/3 lg:max-w-2xl">
			<h2 class="text-6xl font-bold">
				{title}
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
				<a href="/#work">Back</a>
			</div>
		</div>
		<!-- Images -->
		<div class="flex flex-col gap-8 lg:ms-auto lg:w-1/2">
			{#each imgs as i}
				<img src={i.src} alt={i.alt} class="w-full" />
			{/each}
		</div>
	</section>
</LenisContext>
