<script lang="ts">
	import {
		Mug,
		Background,
		Nav,
		AboutItem,
		LenisContext,
		ProgressBar,
		Button,
		Skills,
		ProjectItem,
	} from '$lib/components';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { scrollPosition, userSettings } from '$lib/stores';
	import { gsap } from 'gsap';
	import { ABOUT, SKILLS } from '$lib';

	let mug: HTMLDivElement;
	let title: HTMLHeadingElement;
	let range: number;
	let follow: boolean;
	let complete = false;
	let continueToSite = false;

	const scale = tweened(0, {
		duration: $userSettings.animationsOn && $userSettings.introOn ? 5000 : 0,
		easing: cubicInOut,
	});

	$: if (continueToSite) runIntro();

	onMount(() => {
		range = Math.min(Math.floor(window.innerWidth / 100), 7);

		if ($userSettings.devMode) {
			continueToSite = true;
		}
		if (!$userSettings.introOn) {
			scale.set(150);
			return;
		}
	});

	function runIntro() {
		gsap.set(title, {
			opacity: 0,
			y: 200,
		});
		gsap.set(mug, {
			opacity: 0,
			scale: 0,
		});
		scale.set(150).then(() => {
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
		// Set mug to follow cursor
		const bot = title.getBoundingClientRect().bottom;
		follow ? (follow = bot < $scrollPosition) : (follow = bot <= 120);
	}
</script>

<LenisContext onScroll={scroll}>
	{#if !continueToSite}
		<div
			class="m-auto flex h-screen max-w-lg flex-col items-center justify-center gap-2 p-4 text-pistachio"
		>
			<span class="text-xl">initializing K.U.F.A. mind control protocol...</span>
			<ProgressBar bind:complete />
			<Button disabled={!complete} label="Continue" onClick={() => (continueToSite = true)} />
		</div>
	{/if}
	<div class:opacity-0={!continueToSite}>
		<Nav />
	</div>
	<!-- Landing -->
	<Background bind:follow bind:scale={$scale} />
	<div
		class="flex h-screen flex-col items-center justify-center gap-10"
		class:hidden={!continueToSite}
	>
		<Mug bind:follow bind:el={mug} />
		<h1
			bind:this={title}
			class="leading-85 absolute bottom-4 left-4 font-black tracking-tighter text-pistachio md:leading-9"
		>
			<span class="block">HIRE</span> JACK KUFA
		</h1>
	</div>
	<!-- About -->
	{#if continueToSite}
		<section id="about" class="mx-4 mt-half-screen flex h-screen flex-col gap-28">
			<AboutItem title={ABOUT.title} content={ABOUT.content} />
		</section>
		<!-- Skills -->
		<section id="skills" class="flex flex-col gap-12">
			<h2
				class="mx-4 max-w-full text-5xl font-bold tracking-tighter text-pistachio md:max-w-3xl md:text-8xl"
			>
				USED IN PRODUCTION
			</h2>
			<div class="relative w-full overflow-x-clip">
				<Skills skills={SKILLS} {range}></Skills>
			</div>
		</section>
		<!-- Work -->
		<section id="work" class="mx-4 mt-80 flex h-screen flex-col justify-center gap-12">
			<h2
				class="mx-4 max-w-full text-5xl font-bold tracking-tighter text-pistachio md:max-w-3xl md:text-8xl"
			>
				WORK
			</h2>
			<ProjectItem
				title="JourneyTodo"
				src="https://placehold.co/600x400/EEE/31343C"
				alt="UI for a todo management app"
			/>
		</section>
		<!-- Contact -->
		<section id="contact" class="mx-4 mt-half-screen flex h-screen flex-col gap-28">
			<Button>
				<span class="block py-8 text-5xl font-extrabold"> JACK@KUFA.IO </span>
			</Button>
		</section>
		<footer class="mx-6 mb-4 mt-40 flex justify-between border-t border-pistachio pt-4">
			<p class="text-pistachio">
				Designed in Figma. Developed with SvelteKit, GSAP, Lenis, and Tailwind. Hosted on Vercel.
			</p>
			<div class="mb-1">
				<a
					href="https://github.com/jkufa/website-2024"
					class="
          border-pistachio pb-1 text-pistachio transition-shadow
          ease-circular-in-out
          focus-within:shadow-outline
          focus-within:outline-none hover:border-b
          ">View on GitHub</a
				>
			</div>
		</footer>
	{/if}
</LenisContext>

<style>
	h1 {
		font-size: clamp(4rem, 13vw, 13rem);
	}
	footer {
		font-family: 'system-ui';
	}
</style>
