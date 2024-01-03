<script lang="ts">
	import { LINE_ID_PREFIX } from './constants';
	import { beforeUpdate, onMount } from 'svelte';
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
				trigger: ref,
				scrub: 1,
				markers: true,
				start: 'center-=400px center',
				end: 'bottom+=4000px top',
			},
			x: reverse ? '-100%' : '100%',
			ease: 'power4.out',
		});
	});
</script>

<div
	bind:this={ref}
	id="{LINE_ID_PREFIX}{id}"
	class="flex gap-6 {reverse ? 'reverse' : 'forwards'}"
>
	{#each line as s}
		<Skill label={s} />
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
