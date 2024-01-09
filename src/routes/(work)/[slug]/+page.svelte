<script lang="ts">
	import { Link, Mug } from '$lib/components';
	import { H2, P } from '$lib/design';
	import { userSettings } from '$lib/stores';

	export let data;
	$: ({ title, description, imgs, links } = data);
</script>

{#if $userSettings.animationsOn}
	<Mug follow={true} />
{/if}
<section class="mx-8 mt-20 flex flex-col gap-14 bg-off-black md:mt-40 md:gap-6 lg:flex-row">
	<!-- Text content -->
	<div class="flex flex-col gap-4 lg:fixed lg:w-4/12">
		<H2>
			{title}
		</H2>
		<!-- Links -->
		<div class="flex flex-col gap-2 md:flex-row">
			{#each links as l}
				<!-- TODO: This should be a button link -->
				<div class="w-full border border-pistachio font-extrabold">
					<Link href={l.href}>
						{l.label}
					</Link>
				</div>
			{/each}
		</div>
		<P>
			{description}
		</P>
		<!-- Back -->
		<div class="w-full md:w-6/12">
			<div
				class="mt-8 w-full border border-solid border-transparent transition-[border-color] duration-500 hover:border-pistachio"
			>
				<Link href="/#work" iconDirection="w" iconPos="start">
					<span class="whitespace-nowrap text-clamp-base font-bold">BACK TO HOME</span>
				</Link>
			</div>
		</div>
	</div>
	<!-- Images -->
	<div class="flex flex-col gap-8 lg:ms-auto lg:w-1/2">
		{#each imgs as i}
			<img src={i.src} alt={i.alt} class="w-full" />
		{/each}
	</div>
</section>
