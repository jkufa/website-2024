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
		stagger: 0.4,
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
				end: 'center+=200px end'
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
<div bind:this={containerRef} class="flex w-fit max-w-3xl flex-col gap-6 p-2 text-tea-green">
	<!-- Perspective wrapper -->
	<div class="perspective">
		<!-- Title -->
		<h2 bind:this={titleRef} class="text-8xl font-bold tracking-tighter">
			{title.toLocaleUpperCase()}
		</h2>
	</div>
	<!-- Perspective wrapper -->
	<div class="perspective">
		<!-- Content -->
		<p bind:this={contentRef} class="text-3xl font-light leading-10">
			{content}
		</p>
	</div>
</div>

<style>
	p {
		margin-top: 1rem;
		font-family: 'Clear Sans';
	}
	.perspective {
		perspective: 1200px;
	}
	/* #box > div > * {
    border: 1px solid red;
	} */
</style>
