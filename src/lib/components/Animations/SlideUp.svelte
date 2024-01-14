<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { userSettings } from '$lib/stores';

	let triggerRef: HTMLDivElement;
	let slideUpRef: HTMLDivElement;
	let timeline: gsap.core.Timeline;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		timeline = gsap.timeline({
			scrollTrigger: {
				trigger: triggerRef,
				toggleActions: 'restart',
			},
			defaults: {
				duration: 2,
				delay: 0.5,
				ease: 'expo.out',
				stagger: 0.5,
			},
		});
		userSettings.subscribe((settings) => {
			settings.animationsOn ? animate() : clear();
		});
	});

	function animate() {
		timeline.from(slideUpRef, {
			y: '100%',
		});
	}

	function clear() {
		timeline.set(slideUpRef, {
			y: 0,
		});
		timeline.clear();
	}
</script>

<div bind:this={triggerRef} class="relative h-full w-full overflow-hidden">
	<div bind:this={slideUpRef}>
		<slot />
	</div>
</div>
