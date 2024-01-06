<script lang="ts">
	import { Button, LenisContext, Mug } from '$lib/components';
	import { H2, P } from '$lib/design';
	import { userSettings } from '$lib/stores';

	export let data;
	$: ({ title, description, imgs, links } = data);
</script>

<LenisContext>
	{#if $userSettings.animationsOn}
		<Mug follow={true} />
	{/if}
	<section class="mx-8 mt-40 flex flex-col gap-14 bg-off-black md:gap-6 lg:flex-row">
		<!-- Text content -->
		<div class="flex flex-col gap-4 lg:fixed lg:w-4/12">
			<H2>
				{title}
			</H2>
			<!-- Links -->
			<div class="flex gap-2">
				{#each links as l}
					<!-- TODO: This should be a button link -->
					<Button label={l.label} />
				{/each}
			</div>
			<P>
				{description}
			</P>
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
