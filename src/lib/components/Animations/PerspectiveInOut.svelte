<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	export let disabled = false;
	let ref: HTMLDivElement;
	let timeline: gsap.core.Timeline;

	const { markers, scale, stagger, rotateX } = {
		markers: false,
		scale: 0.75,
		stagger: 0.5,
		rotateX: 60, // number in degrees
	};

	$: disabled ? disableAnimations() : animate();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		timeline = gsap.timeline({
			scrollTrigger: {
				trigger: ref,
				scrub: 1.5,
				markers: markers,
				start: 'center bottom',
				// end: 'center+=400px end',
				end: 'center end',
			},
			defaults: {
				ease: 'sine.out',
			},
		});

		if (disabled) return;

		animate();
	});

	function disableAnimations() {
		gsap.set(ref, {
			rotateX: 0,
			opacity: 1,
			scale: 1,
		});
		timeline.clear();
	}

	// TODO: fix perspective on this
	function animate() {
		timeline
			?.from(ref, {
				rotateX: `-${rotateX}deg`,
				opacity: 0,
				scale: scale,
				stagger: stagger,
			})
			.to(ref, {
				rotateX: 0,
				opacity: 1,
				scale: 1,
			})
			.to(ref, {
				rotateX: `${rotateX}deg`,
				opacity: 0,
				scale: scale,
				stagger: 0.1,
			});
	}
</script>

<div class="perspective">
	<div bind:this={ref} class="wrapper">
		<slot />
	</div>
</div>

<style>
	.perspective {
		perspective: 75rem;
	}
</style>
