<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { elasticOut } from 'svelte/easing';

	export let follow = false;
	export let el: HTMLDivElement;

	let hasMoved = false;
	// const names = ['mug0'];
	const names = ['mug0', 'mug1', 'mug2', 'mug3', 'mug4', 'mug5', 'mug6'];

	let current = 0;
	$: name = names[current];
	$: if (el && !follow) resetPos();

	onMount(() => {
		const interval = setInterval(() => {
			current = (current + 1) % names.length;
		}, 120);
		gsap.from(el, {
			opacity: 0,
			// TODO: figure out how to fix this. The issue is reset() is also running on render in parallel
			// so the animation is messed up
			// scale: 0,
			duration: 5,
			delay: 1,
			ease: 'elastic.out(1,0.2)'
		});
		return () => clearInterval(interval);
	});
	function handleMouse(e: MouseEvent) {
		if (follow) {
			if (!hasMoved) {
				gsap.set(el, {
					top: 0
				});
				hasMoved = true;
			}
			gsap.to(el, {
				x: e.clientX,
				y: e.clientY,
				scale: 0.25,
				duration: 1.2,
				ease: 'expo.out'
			});
		}
	}
	function resetPos() {
		console.log('resetPos');
		gsap.to(el, {
			x: 0,
			y: 0,
			scale: 1,
			duration: 2,
			ease: 'elastic.out(.75,0.75)'
		});
		hasMoved = false;
	}
</script>

<svelte:window on:mousemove={handleMouse} />
<div
	bind:this={el}
	class="{follow && hasMoved ? 'fixed left-0 top-0 origin-top-left' : ''} md:mug-md lg:mug-lg"
	data-sevenup="{name}.png"
></div>

<style>
	/* * {
    border: 1px solid red;
  } */
	[data-sevenup] {
		--scale: 3;
		--x: 0;
		--y: 0;

		background-image: url('$lib/imgs/sprites.png');
		background-size: calc(192px * var(--scale));
		filter: grayscale();
		width: calc(64px * var(--scale));
		height: calc(64px * var(--scale));
		background-position: var(--x) var(--y);
	}
	/* 'mug0.png starts at' (0, 0) */

	[data-sevenup='mug1.png'] {
		--x: calc(-64px * var(--scale));
	}
	[data-sevenup='mug2.png'] {
		--y: calc(-64px * var(--scale));
	}
	[data-sevenup='mug3.png'] {
		--x: calc(-64px * var(--scale));
		--y: calc(-64px * var(--scale));
	}
	[data-sevenup='mug4.png'] {
		--x: calc(-128px * var(--scale));
	}
	[data-sevenup='mug5.png'] {
		--x: calc(-128px * var(--scale));
		--y: calc(-64px * var(--scale));
	}
	[data-sevenup='mug6.png'] {
		--y: calc(-128px * var(--scale));
	}
</style>
