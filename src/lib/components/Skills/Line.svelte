<script lang="ts">
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { userSettings } from '$lib/stores';
	import Skill from './Skill.svelte';

	export let line: string[];
	export let id: number;

	let ref: HTMLDivElement;
	let timeline: gsap.core.Timeline;
	let reverse = !!(id % 2);

	const animationsOn = derived(userSettings, (settings) => settings.animationsOn);

	$: animationsOn ? animate() : disableAnimations();

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		timeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#skillz',
				scrub: 1,
				start: `top+=${id * 40}px bottom`,
				end: 'bottom+=4000px top',
			},
			defaults: {
				ease: 'power4.out',
			},
		});

		animationsOn.subscribe((on) => {
			on ? animate() : disableAnimations();
		});
	});

	function animate() {
		if (!timeline || !ref) return;

		timeline.set(ref, { x: reverse ? '100%' : '-100%' }).to(ref, { x: reverse ? '-100%' : '100%' });
	}

	function disableAnimations() {
		if (!timeline || !ref) return;

		timeline.set(ref, { x: 0 });
		timeline.clear();
	}
</script>

<div bind:this={ref} class="flex justify-center gap-6" class:animations-off={!animationsOn}>
	{#each line as s}
		<!-- Skip empty strings. This lets us have some control over the number of skills in each row -->
		{#if s}
			<Skill label={s} />
		{/if}
	{/each}
</div>

<style lang="postcss">
	.animations-off {
		justify-content: start;
		flex-wrap: wrap;
		margin: 0 1rem;
		transform: translateX(0) !important;
	}
</style>
