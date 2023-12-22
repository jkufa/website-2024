<script lang="ts">
	import Switch from './Switch.svelte';
	import NavItem from './NavItem.svelte';
	import { crossfade, scale, slide, type ScaleParams } from 'svelte/transition';
	import { cubicInOut, linear, quintInOut } from 'svelte/easing';
	import Hamburger from './Hamburger.svelte';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { userSettings } from '$lib/stores/userSettings';

	export let animations = true;
	export let intro = true;
	export let showMenu = false;

	const init = {
		w: 0,
		h: 0,
	};
	let wh = tweened(init);

	function expand() {
		showMenu = true;
		wh.set({ w: $wh.w * 4.5, h: $wh.h * 5.5 });
	}
	function shrink() {
		wh.set(init).then(() => (showMenu = false));
	}

	onMount(() => {
    animations = $userSettings.animationsOn;
    intro = $userSettings.introOn;

		wh = tweened(init, { duration: 600, easing: cubicInOut });
	});
</script>

<nav
	class="
    fixed end-4 top-4 z-40 flex flex-col items-end
    border border-solid border-pistachio bg-off-black
    transition-opacity
    focus-within:opacity-100 hover:opacity-100 md:end-8
    md:top-8
    "
	class:opacity-60={!showMenu}
	style="width: {$wh.w}px; height: {$wh.h}px;"
>
	<Hamburger
		bind:height={init.h}
		bind:width={init.w}
		bind:toX={showMenu}
		onClick={() => (showMenu ? shrink() : expand())}
	/>
	{#if showMenu}
		<div
			class="container flex h-full flex-col justify-between overflow-hidden border-solid bg-off-black"
		>
			<div class="nav-items flex flex-col text-end">
				<NavItem href="#">
					<span class="text-3xl font-bold md:text-5xl">HOME</span>
				</NavItem>
				<NavItem href="#about">
					<span class="text-3xl font-bold md:text-5xl">ABOUT</span>
				</NavItem>
			</div>
			<div class="settings flex flex-col gap-4 p-4">
				<div class="flex items-center justify-between text-2xl text-pistachio md:text-3xl">
					<Switch
						bind:checked={animations}
						onToggle={() => ($userSettings.animationsOn = !$userSettings.animationsOn)}
						id="anim"
						label="Animations"
					/>
				</div>
				<div class="flex items-center justify-between text-2xl text-pistachio md:text-3xl">
					<Switch
						bind:checked={intro}
						id="intro"
						label="Intro"
						onToggle={() => ($userSettings.introOn = !$userSettings.introOn)}
						disabled={!animations}
					/>
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
