<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { userSettings } from '$lib/stores';
	import { Expo } from 'gsap';
	import Switch from './Switch.svelte';
	import NavItem from './NavItem.svelte';
	import Hamburger from './Hamburger.svelte';

	type Dimensions = {
		width: number;
		height: number;
	};

	export let showMenu = false;

	let introOn: boolean;
	let animationsOn: boolean;

	const initDimensions: Dimensions = {
		width: 0,
		height: 0,
	};
	const hamburgerDimensions: Dimensions = initDimensions;
	const wh = tweened(initDimensions, { duration: 800, easing: Expo.easeInOut });

	$: ({ introOn, animationsOn } = $userSettings);
	$: expandedDimensions = {
		height: hamburgerDimensions.height * 8,
		width: hamburgerDimensions.width * 5,
	} as Dimensions;
	$: wh.set(showMenu ? expandedDimensions : hamburgerDimensions);

	function expand() {
		showMenu = true;
		wh.set(expandedDimensions);
	}

	function shrink() {
		wh.set(hamburgerDimensions).then(() => (showMenu = false));
	}

	function escape(e: KeyboardEvent) {
		if (e.key !== 'Escape') return;
		if (!showMenu) return;

		shrink();
	}

	function clickOut(e: MouseEvent) {
		if (!showMenu) return;
		if ((e.target as HTMLElement).closest('#navigation')) return;

		shrink();
	}
</script>

<svelte:window on:keydown|stopPropagation={escape} on:click={clickOut} />
<nav
	id="navigation"
	class="
    fixed end-2 top-2 z-10 flex flex-col items-end
    border border-solid border-pistachio-lite bg-off-black
    transition-opacity
    focus-within:opacity-100 hover:opacity-100 md:end-4
    md:top-4
    "
	class:opacity-60={!showMenu}
	style="width: {$wh.width}px; height: {$wh.height}px;"
>
	<Hamburger
		bind:height={hamburgerDimensions.height}
		bind:width={hamburgerDimensions.width}
		bind:toX={showMenu}
		onClick={() => (showMenu ? shrink() : expand())}
	/>
	{#if showMenu}
		<div class="container flex h-full flex-col justify-between overflow-hidden border-solid">
			<div class="nav-items flex flex-col text-end font-heading">
				<NavItem href="">
					<span class="text-3xl font-extrabold md:text-5xl">HOME</span>
				</NavItem>
				<NavItem href="about">
					<span class="text-3xl font-extrabold md:text-5xl">ABOUT</span>
				</NavItem>
				<NavItem href="work">
					<span class="text-3xl font-extrabold md:text-5xl">WORK</span>
				</NavItem>
				<NavItem href="contact">
					<span class="text-3xl font-extrabold md:text-5xl">CONTACT</span>
				</NavItem>
			</div>
			<div class="settings flex flex-col gap-4 p-4 font-sans">
				<div class="flex items-center justify-between text-2xl md:text-3xl">
					<Switch
						bind:checked={animationsOn}
						onToggle={() => ($userSettings.animationsOn = !$userSettings.animationsOn)}
						id="anim"
						label="Animations"
					/>
				</div>
				<div class="flex items-center justify-between text-2xl md:text-3xl">
					<Switch
						bind:checked={introOn}
						id="intro"
						label="Intro"
						onToggle={() => ($userSettings.introOn = !$userSettings.introOn)}
						disabled={!animationsOn}
					/>
				</div>
			</div>
		</div>
	{/if}
</nav>
