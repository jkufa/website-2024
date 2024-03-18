<script lang="ts">
	import { Link, Mug } from '$lib/components';
	import { H2, P, Section } from '$lib/design';
	import { userSettings } from '$lib/stores';

	export let data;
	$: ({ title, description, imgs, links, meta } = data);
</script>

<svelte:head>
	<title>HIRE JACK KUFA – {title.toLocaleUpperCase()}</title>
	<meta name="description" content={meta} />
</svelte:head>
{#if $userSettings.animationsOn}
	<Mug follow={true} />
{/if}
<Section id={title.toLocaleLowerCase()} styles="lg:flex-row mt-20 md:mt-40 gap-14 !justify-start">
	<!-- Text content -->
	<div class="text flex flex-col gap-4 lg:fixed lg:w-4/12">
		<H2>
			{title}
		</H2>
		<!-- Links -->
		<div class="flex flex-col gap-2 md:flex-row">
			{#each links as l}
				<div class="w-full border border-pistachio-lite">
					<Link href={l.href}>
						{l.label}
					</Link>
				</div>
			{/each}
		</div>
		<P variant="small" class="content mt-8">
			{@html description}
		</P>
		<!-- Back -->
		<div class="mt-12 w-full border border-solid border-pistachio-lite md:w-[calc(50%-0.5rem)]">
			<Link href="/#work" iconDirection="w" iconPos="start">Back to home</Link>
		</div>
	</div>
	<!-- Images -->
	<div class="flex flex-col gap-8 lg:ms-auto lg:w-1/2 lg:gap-16 4xl:w-2/5">
		{#each imgs as i}
			<img src="/images/{title.toLocaleLowerCase()}/{i.src}" alt={i.alt} class="w-full" />
		{/each}
	</div>
</Section>

<style lang="postcss">
	:global(.content > h2) {
		text-transform: uppercase;
		margin-bottom: -0.75em;
		font-size: theme(fontSize.clamp-md);
	}
	:global(.content > *:not(:first-child)) {
		margin-top: 1.5em;
	}
	:global(.content > h2:not(:first-child)) {
		margin-top: 1em;
	}
</style>
