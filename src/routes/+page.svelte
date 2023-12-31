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
		<section class="mx-4 mt-half-screen flex h-screen flex-col gap-28">
			<AboutItem title={ABOUT.title} content={ABOUT.content} />
		</section>
		<!-- Skills -->
		<section class="flex h-screen flex-col gap-12">
			<h2
				class="mx-4 max-w-full text-5xl font-bold tracking-tighter text-pistachio md:max-w-3xl md:text-8xl"
			>
				USED IN PRODUCTION
			</h2>
			<div class="relative w-full overflow-x-clip">
				<Skills skills={SKILLS} {range}></Skills>
			</div>
		</section>
		<section class="mx-4 flex h-screen flex-col gap-12"></section>
	{/if}
</LenisContext>

<style>
	h1 {
		font-size: clamp(4rem, 13vw, 13rem);
	}
</style>
