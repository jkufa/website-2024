<script lang="ts">
	import { userSettings } from '$lib/stores';
	import gsap from 'gsap';

	export let follow: boolean | undefined = undefined;
	/**
	 * Workaround for loading Mug on pages other than main page
	 */
	export let hideUntilFollow: boolean = true;
	export let ref: HTMLDivElement | undefined = undefined;

	let hasMoved = false;
	let current = 0;
	let interval: number;
	let spinning = false;

	const names = ['mug0', 'mug1', 'mug2', 'mug3', 'mug4', 'mug5', 'mug6'];

	$: name = names[current];
	$: if (ref && follow === false) resetPos();
	$: ({ animationsOn } = $userSettings);
	$: animationsOn ? spin() : pause();

	function pause() {
		clearInterval(interval);
		resetPos();
		spinning = false;
	}

	function spin() {
		if (spinning) return;

		spinning = true;
		interval = setInterval(() => {
			current = (current + 1) % names.length;
		}, 120);
		return () => clearInterval(interval);
	}

	function handleMouse(e: PointerEvent) {
		if (!$userSettings.animationsOn || e.pointerType !== 'mouse') return;

		if (follow) {
			if (!hasMoved) {
				gsap.set(ref!, {
					top: 0,
					left: window.innerWidth / 2,
				});
				hasMoved = true;
			}
			gsap.to(ref!, {
				x: e.clientX,
				y: e.clientY,
				left: 0,
				scale: 0.33,
				duration: 1.2,
				ease: 'expo.out',
			});
		}
	}
	function resetPos() {
		if (!ref) return;

		gsap.to(ref, {
			x: 0,
			y: 0,
			scale: 1,
			duration: 2,
			ease: 'elastic.out(0.75,0.5)',
		});
		hasMoved = false;
	}
</script>

<svelte:window on:pointermove={handleMouse} />
<div
	bind:this={ref}
	class="{follow && hasMoved && $userSettings.animationsOn
		? 'fixed left-0 top-0 z-20 origin-top-left'
		: 'relative'} md:mug-md lg:mug-lg 4xl:mug-2xl pointer-events-none
    "
	class:hidden={hideUntilFollow && !hasMoved}
	data-sevenup="{name}.png"
></div>

<style lang="postcss">
	/* * {
    border: 1px solid red;
  } */
	[data-sevenup] {
		--scale: 3;
		--x: 0;
		--y: 0;

		background-image: url('$lib/imgs/sprites.webp');
		background-size: calc(192px * var(--scale));
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
