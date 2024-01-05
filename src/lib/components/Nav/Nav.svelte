<script lang="ts">
	import { cubicInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';
	import { onMount } from 'svelte';
	import { userSettings } from '$lib/stores';
	import Switch from './Switch.svelte';
	import NavItem from './NavItem.svelte';
	import Hamburger from './Hamburger.svelte';

	export let showMenu = false;
	let introOn: boolean;
	let animationsOn: boolean;

	const init = {
		w: 0,
		h: 0,
	};
	let wh = tweened(init);

	$: ({ introOn, animationsOn } = $userSettings);

	function expand() {
		showMenu = true;
		wh.set({ w: $wh.w * 4.5, h: $wh.h * 5.5 });
	}

	function shrink() {
		wh.set(init).then(() => (showMenu = false));
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

	onMount(() => {
		wh = tweened(init, { duration: 600, easing: cubicInOut });
	});
</script>

<svelte:window on:keydown|stopPropagation={escape} on:click={clickOut} />
<nav
	id="navigation"
	class="
    fixed end-2 top-2 z-40 flex flex-col items-end
    border border-solid border-pistachio bg-off-black
    transition-opacity
    focus-within:opacity-100 hover:opacity-100 md:end-4
    md:top-4
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
		<div class="container flex h-full flex-col justify-between overflow-hidden border-solid">
			<div class="nav-items flex flex-col text-end">
				<NavItem href="">
					<span class="text-3xl font-bold md:text-5xl">HOME</span>
				</NavItem>
				<NavItem href="about">
					<span class="text-3xl font-bold md:text-5xl">ABOUT</span>
				</NavItem>
				<NavItem href="work">
					<span class="text-3xl font-bold md:text-5xl">WORK</span>
				</NavItem>
			</div>
			<div class="settings flex flex-col gap-4 p-4">
				<div class="flex items-center justify-between text-2xl text-pistachio md:text-3xl">
					<Switch
						bind:checked={animationsOn}
						onToggle={() => ($userSettings.animationsOn = !$userSettings.animationsOn)}
						id="anim"
						label="Animations"
					/>
				</div>
				<div class="flex items-center justify-between text-2xl text-pistachio md:text-3xl">
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

<style>
	.settings > div {
		font-family: 'system-ui';
	}
</style>
