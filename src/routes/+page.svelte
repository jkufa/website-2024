<script lang="ts">
	import Mug from '$lib/components/Mug.svelte';
	import Background from '$lib/components/Background.svelte';
	import LenisContext from '$lib/components/LenisContext.svelte';
	import gsap from 'gsap';
	import { scrollPosition } from '$lib/stores/scrollPosition';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import MotionPath from '$lib/components/MotionPath.svelte';

	let mug: HTMLDivElement;
	let title: HTMLHeadingElement;
	let follow: boolean;

	const scale = tweened(0, { duration: 5000, easing: cubicInOut });

	onMount(() => {
		gsap.set(title, {
			opacity: 0,
			y: 200
		});
		gsap.set(mug, {
			opacity: 0,
			scale: 0
		});
		scale.set(150).then(() => {
			gsap.to(title, {
				opacity: 1,
				y: 0,
				delay: 0.5,
				duration: 2,
				ease: 'power4.out'
			});
			gsap.to(mug, {
				opacity: 1,
				scale: 1,
				duration: 5,
				delay: 1,
				ease: 'elastic.out(.75,0.4)'
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
	<Background bind:follow bind:scale={$scale} />
	<div class="flex h-screen flex-col items-center justify-center gap-10">
		<Mug bind:follow bind:el={mug} />
		<h1
			bind:this={title}
			class="leading-85 absolute bottom-4 left-4 text-8xl font-black tracking-tighter text-tea-green md:text-8xl md:leading-9 lg:text-huge"
		>
			<span class="block">HIRE</span> JACK KUFA
		</h1>
	</div>
	<section class="mx-4 flex h-screen flex-col justify-end gap-12">
		<MotionPath />
	</section>
	<section class="mx-4 flex h-screen flex-col gap-12"></section>
</LenisContext>
