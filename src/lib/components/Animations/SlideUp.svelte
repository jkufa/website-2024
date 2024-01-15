<script lang="ts">
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { userSettings } from '$lib/stores';
	import { derived } from 'svelte/store';

	let triggerRef: HTMLDivElement;
	let slideUpRef: HTMLDivElement;
	let timeline: gsap.core.Timeline;

	const animationsOn = derived(userSettings, (settings) => settings.animationsOn);

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
		animationsOn.subscribe((on) => {
			on ? animate() : clear();
		});
	});

	function animate() {
		if (!slideUpRef) return;

		timeline.from(slideUpRef, {
			y: '100%',
		});
	}

	function clear() {
		if (!slideUpRef) return;

		timeline.set(slideUpRef!, {
			y: 0,
		});
	}
</script>

<div bind:this={triggerRef} class="relative h-full w-full overflow-hidden">
	<div bind:this={slideUpRef}>
		<slot />
	</div>
</div>
