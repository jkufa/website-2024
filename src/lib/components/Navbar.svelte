<script lang="ts">
	import Switch from './Switch.svelte';
	import NavItem from './NavItem.svelte';
	import { crossfade, scale, slide, type ScaleParams } from 'svelte/transition';
	import { cubicInOut, linear, quintInOut } from 'svelte/easing';
	import Hamburger from './Hamburger.svelte';
	import { tweened } from 'svelte/motion';

	export let animations = true;
	export let intro = true;
	export let showMenu = false;

	const init = {
		w: 85,
		h: 85
	};
	let wh = tweened(init, { duration: 600, easing: cubicInOut });

	// function slideIn(node, { duration }) {
	// 	return {
	// 		duration,
	// 		css: (t) => {
	// 			const ease = cubicInOut(t);
	// 			console.log('t', t);
	// 			return `
	//         min-width: 87px;
	//         min-height: 87px;
	//         width: ${ease * 100}%;
	//         height: ${ease * 100}%;
	//       `;
	// 		}
	// 	};
	// }

	function expand() {
		console.log('here');
		showMenu = true;
		wh.set({ w: 384, h: 480 });
	}
	function shrink() {
		wh.set(init).then(() => (showMenu = false));
	}
</script>

<nav
	class="
    fixed end-4 top-4 z-40 flex flex-col items-end
    border border-solid border-pistachio
    hover:opacity-100 md:end-8 md:top-8
    "
	class:opacity-60={!showMenu}
	style="width: {$wh.w}px; height: {$wh.h}px;"
>
	<Hamburger onClick={() => (showMenu ? shrink() : expand())} />
	{#if showMenu}
		<div
			class="container flex h-full flex-col justify-between overflow-hidden border-solid bg-off-black"
		>
			<div class="nav-items flex flex-col gap-4 text-end">
				<NavItem href="#">
					<span class="text-5xl font-bold">HOME</span>
				</NavItem>
				<NavItem href="#about">
					<span class="text-5xl font-bold">ABOUT</span>
				</NavItem>
			</div>
			<div class="settings flex flex-col gap-4 p-4">
				<div class="flex items-center justify-between text-3xl text-pistachio">
					<Switch bind:checked={animations} id="anim" label="Animations" />
				</div>
				<div class="flex items-center justify-between text-3xl text-pistachio">
					<Switch bind:checked={intro} id="intro" label="Intro" disabled={!animations} />
				</div>
			</div>
		</div>
	{/if}
</nav>

<style>
	.settings > div {
		font-family: 'Clear Sans';
	}
</style>
