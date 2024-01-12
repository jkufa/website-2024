<script lang="ts">
	import { ABOUT, SKILLS, WORK_DATA } from '$lib';
	import {
		Mug,
		type Background,
		Skills,
		WorkItem,
		lenisFunctionStore,
		EmailContact,
		Link,
    AsyncLoader
	} from '$lib/components';
	import { H1, H2, P, Section } from '$lib/design';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { scrollPosition, userSettings } from '$lib/stores';
	import { gsap } from 'gsap';

	let mug: HTMLDivElement;
	let title: HTMLHeadingElement;
	let range: number;
	let follow: boolean;

	const scale = tweened(0, {
		duration: $userSettings.animationsOn && $userSettings.introOn ? 5000 : 0,
		easing: cubicInOut,
	});
	lenisFunctionStore.set(scroll);

	onMount(async () => {
		range = Math.min(Math.floor(window.innerWidth / 100), 7);
	});

	function runIntro() {
    console.log('intro')
		gsap.set(title, {
			opacity: 0,
			y: 200,
		});
		gsap.set(mug, {
			opacity: 0,
			scale: 0,
		});
		scale.set(150).then(() => {
      console.log('scale set to 150')
			// these should run in components when mounted
			gsap.to(title, {
				opacity: 1,
				y: 0,
				delay: 0.5,
				duration: 2,
				ease: 'power4.out',
			});
			gsap.to(mug, {
				opacity: 1,
				scale: 1,
				duration: 5,
				delay: 1,
				ease: 'elastic.out(0.75,0.4)',
			});
			$userSettings.introOn = false;
		});
	}

	function scroll() {
		if (!title) return;
		// Set mug to follow cursor
		const bot = title.getBoundingClientRect().bottom;
		follow ? (follow = bot < $scrollPosition) : (follow = bot <= 120);
	}
</script>

<!-- Landing -->  

<div class="flex h-screen flex-col items-center justify-center gap-10">
  <!-- <AsyncLoader></AsyncLoader> -->
	<!-- <Mug bind:follow bind:ref={mug} hideUntilFollow={false} /> -->
	<!-- <H1 bind:ref={title} styles="absolute bottom-4 left-4"> -->
		<!-- <span class="block">HIRE</span> JACK KUFA -->
	<!-- </H1> -->
</div>

<!-- About -->
<Section id="about" styles="mt-1/4 justify-center">
	<div class="max-w-[90%]">
		<P variant="large">
			Jack Kufa is a Software Engineer that
			<span class="ivory-highlight text-ivory">
				builds fast, accessible and responsive experiences</span
			>
			for web. His experience with multiple frontend frameworks and setting up project infrastructure
			from scratch makes him a great asset for
			<span class="ivory-highlight text-ivory"
				>building and maintaining amazing user experiences.</span
			>
		</P>
	</div>

	<!-- <AboutItem title={ABOUT.title} content={ABOUT.content} /> -->
</Section>

<!-- Skills -->
<Section id="skills">
	<H2 variant="large">
		JACK KUFA KNOWS<br />
		A THING OR TWO
	</H2>
	<Skills skills={SKILLS} {range}></Skills>
</Section>

<!-- Work -->
<Section id="work" styles="mt-1/4 justify-center">
	<H2 variant="large">JACK KUFA<br />HAS WORKED ON</H2>
	<div class="z-0 border border-solid border-pistachio bg-off-black">
		{#each WORK_DATA as wd}
			<WorkItem href={wd.slug} title={wd.title} alt={wd.imgs[0].alt} src={wd.imgs[0].src} />
			<WorkItem href={wd.slug} title={wd.title} alt={wd.imgs[0].alt} src={wd.imgs[0].src} />
			<WorkItem href={wd.slug} title={wd.title} alt={wd.imgs[0].alt} src={wd.imgs[0].src} />
		{/each}
	</div>
</Section>

<!-- Contact -->
<Section id="contact" styles="mt-1/4 justify-center lg:mx-16">
	<H2 variant="large">
		GET IN TOUCH<br />
		WITH JACK KUFA
	</H2>
	<div class="flex w-full flex-col gap-4 md:flex-row md:gap-8">
		<EmailContact href="mailto:jack@kufa.io" hoverText="Get in touch">JACK@KUFA.IO</EmailContact>
		<div class="z-0 flex w-full flex-col border border-pistachio bg-off-black md:w-4/12">
			<Link href="https://linkedin.com/in/jackkufa">LINKEDIN</Link>
			<Link href="https://github.com/jkufa">GITHUB</Link>
		</div>
	</div>
</Section>

<!-- Footer -->
<footer
	class="mx-4 mb-4 flex flex-col gap-8 border-t border-pistachio pt-4 md:mx-8 md:mb-8 md:flex-row md:justify-between md:pt-8"
>
	<P>Designed in Figma. Developed with SvelteKit, GSAP, Lenis, and Tailwind. Hosted on Vercel.</P>
	<a
		data-sveltekit-preload-data="hover"
		href="https://github.com/jkufa/website-2024"
		class="
          w-fit
          border-pistachio
          text-clamp-base
          font-semibold
          leading-normal
          transition-shadow ease-circular-in-out
          focus-within:shadow-outline
          focus-within:outline-none
          hover:border-b
          ">View on GitHub</a
	>
</footer>

<style lang="postcss">
	footer {
		font-family: 'system-ui';
	}
</style>
