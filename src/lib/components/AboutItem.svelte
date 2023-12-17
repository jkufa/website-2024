<script lang="ts">
	import { gsap } from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	export let title: string;
	export let content: string;
	export let animate = true;

	let containerRef: HTMLDivElement;
	let titleRef: HTMLHeadingElement;
	let contentRef: HTMLParagraphElement;
	let timeline: gsap.core.Timeline;

	const { markers, scale, stagger, rotateX } = {
		markers: false,
		scale: 0.75,
		stagger: 0.5,
		rotateX: 60 // number in degrees
	};

	onMount(() => {
		if (!animate) return;

		gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
		timeline = gsap.timeline({
			scrollTrigger: {
				trigger: containerRef,
				scrub: 1.5,
				markers: markers,
				start: 'center-=50px bottom-=100px',
				end: 'center+=100px end'
			},
			defaults: {
				ease: 'sine.out'
			}
		});
		animateRefs([titleRef, contentRef]);
	});

	function animateRefs(refs: HTMLElement[]) {
		timeline
			?.from(refs, {
				rotateX: `-${rotateX}deg`,
				opacity: 0,
				scale: scale,
				stagger: stagger
			})
			.to(refs, {
				rotateX: 0,
				opacity: 1,
				scale: 1
			})
			.to(refs, {
				rotateX: `${rotateX}deg`,
				opacity: 0,
				scale: scale,
				stagger: 0.1
			});
	}
</script>

<!-- Container -->
<div
	bind:this={containerRef}
	class="flex w-fit max-w-full flex-col gap-3 p-2 text-pistachio md:max-w-3xl md:gap-6"
>
	<!-- Perspective wrapper -->
	<div class="perspective">
		<!-- Title -->
		<h2 bind:this={titleRef} class="text-5xl font-bold tracking-tighter md:text-8xl">
			{title.toLocaleUpperCase()}
		</h2>
	</div>
	<!-- Perspective wrapper -->
	<div class="perspective">
		<!-- Content -->
		<p bind:this={contentRef} class="text-lg font-light leading-6 md:text-3xl md:leading-10">
			{content}
		</p>
	</div>
</div>

<style>
	p {
		font-family: 'Clear Sans';
	}
	.perspective {
		perspective: 75rem;
	}
	/* #box > div > * {
    border: 1px solid red;
	} */
</style>
