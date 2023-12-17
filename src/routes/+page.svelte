<script lang="ts">
	import Mug from '$lib/components/Mug.svelte';
	import Background from '$lib/components/Background.svelte';
	import LenisContext from '$lib/components/LenisContext.svelte';
	import gsap from 'gsap';
	import { scrollPosition } from '$lib/stores/scrollPosition';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import AboutItem from '$lib/components/AboutItem.svelte';

	let mug: HTMLDivElement;
	let title: HTMLHeadingElement;
	let follow: boolean;
	let loaded: boolean;

	const scale = tweened(0, { duration: 5000, easing: cubicInOut });

	onMount(() => {
		scale.set(150).then(() => {
			loaded = true;
			console.log(title, mug);
			gsap.from(title, {
				opacity: 0,
				y: 200,
				delay: 0.5,
				duration: 2,
				ease: 'power4.out'
			});
			gsap.from(mug, {
				opacity: 0,
				scale: 0,
				duration: 5,
				delay: 1,
				ease: 'elastic.out(0.75,0.4)'
			});
		});
	});

	function scroll() {
		// Set mug to follow cursor
		const bot = title.getBoundingClientRect().bottom;
		follow ? (follow = bot < $scrollPosition) : (follow = bot <= 120);
	}
</script>

<LenisContext {scroll}>
	<!-- Landing -->
	<Background bind:follow bind:scale={$scale} />
	<div class="flex h-screen flex-col items-center justify-center gap-10" class:opacity-0={!loaded}>
		<Mug bind:follow bind:el={mug} />
		<h1
			bind:this={title}
			class="leading-85 absolute bottom-4 left-4 font-black tracking-tighter text-tea-green md:leading-9"
		>
			<span class="block">HIRE</span> JACK KUFA
		</h1>
	</div>
	<!-- About -->
	<section class="mx-4 mt-half-screen flex h-screen flex-col gap-28">
		<AboutItem
			title="Developer First"
			content="Classically trained, Jack Kufa graduated from Missouri S&T with a Bachelors in Computer
    Science and Computer Engineering."
		/>
	</section>
	<section class="mx-4 flex h-screen flex-col gap-12"></section>
</LenisContext>

<style>
	h1 {
		font-size: clamp(4rem, 12vw, 13rem);
	}
</style>
