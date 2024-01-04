<script lang="ts">
	import { onMount } from 'svelte';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import gsap from 'gsap';
	import Skill from './Skill.svelte';

	export let line: string[];
	export let id: number;

	let ref: HTMLDivElement;
	let reverse = !!(id % 2);

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to(ref, {
			scrollTrigger: {
				trigger: '#skillz',
				scrub: 1,
				start: `top+=${id * 80} bottom`,
				end: 'bottom+=4000px top',
			},
			x: reverse ? '-100%' : '100%',
			ease: 'power4.out',
		});
	});
</script>

<div bind:this={ref} class="flex justify-center gap-6 {reverse ? 'reverse' : 'forwards'}">
	{#each line as s}
		<!-- Skip empty strings. This lets us have some control over the number of skills in each row -->
		{#if s}
			<Skill label={s} />
		{/if}
	{/each}
</div>

<style lang="postcss">
	.forwards {
		transform: translateX(-100%);
	}
	.reverse {
		transform: translateX(100%);
	}
</style>
