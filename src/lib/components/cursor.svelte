<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { cubicOut } from 'svelte/easing';

	export let follow = false;
	export let el: HTMLDivElement;

	let hasMoved = false;
	const names = ['mug0', 'mug1', 'mug2', 'mug3', 'mug4', 'mug5', 'mug6'];

	let current = 0;
	$: name = names[current];
	$: if (!follow && el) resetPos();

	onMount(() => {
		const interval = setInterval(() => {
			current = (current + 1) % names.length;
		}, 120);
    gsap.from(el, {
      opacity: 0,
      scale: 0,
      duration: 2,
      delay: 1,
      ease: cubicOut
    })
		return () => clearInterval(interval);
	});
	function handleMouse(e: MouseEvent) {
		if (follow) {
			if (!hasMoved) {
				gsap.from(el, {
					top: 0,
					duration: 1.2
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
		gsap.to(el, {
			x: 0,
			y: 0,
			scale: 1,
			duration: hasMoved ? 1.2 : 0,
			ease: 'expo.out'
		});
		hasMoved = false;
	}
</script>

<svelte:window on:mousemove={handleMouse} />
<div class="flex h-screen items-center justify-center">
	<div
		bind:this={el}
		class={follow && hasMoved ? 'fixed left-0 top-0 origin-top-left' : ''}
		data-sevenup="{name}.png"
	></div>
</div>

<style>
	/* * {
    border: 1px solid red;
  } */
	[data-sevenup] {
		background-image: url('$lib/imgs/sprites.png');
		background-size: 1536px 1536px;
		filter: grayscale();
	}
	[data-sevenup='mug0.png'] {
		width: 512px;
		height: 512px;
		background-position: 0px 0px;
	}
	[data-sevenup='mug1.png'] {
		width: 512px;
		height: 512px;
		background-position: -512px 0px;
	}
	[data-sevenup='mug2.png'] {
		width: 512px;
		height: 512px;
		background-position: 0px -512px;
	}
	[data-sevenup='mug3.png'] {
		width: 512px;
		height: 512px;
		background-position: -512px -512px;
	}
	[data-sevenup='mug4.png'] {
		width: 512px;
		height: 512px;
		background-position: -1024px 0px;
	}
	[data-sevenup='mug5.png'] {
		width: 512px;
		height: 512px;
		background-position: -1024px -512px;
	}
	[data-sevenup='mug6.png'] {
		width: 512px;
		height: 512px;
		background-position: 0px -1024px;
	}
</style>
