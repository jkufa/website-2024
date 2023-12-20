<script lang="ts">
	import Switch from './Switch.svelte';
	import NavItem from './NavItem.svelte';
	import { scale, slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';

	export let animations = true;
	export let intro = true;
	export let showMenu = false;
</script>

<nav
	class="fixed end-4 top-4 z-50 flex flex-col gap-16 border border-solid border-pistachio hover:bg-off-black hover:opacity-100 md:end-8 md:top-8"
	class:w-96={showMenu}
	class:bg-off-black={showMenu}
	class:opacity-60={!showMenu}
	transition:scale={{ duration: 300, easing: quintOut }}
>
	<div class="nav-items flex flex-col gap-4 text-end">
		<button
			class="flex w-full justify-end p-8 text-pistachio transition-all focus-within:outline-none"
			on:click={() => (showMenu = !showMenu)}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="21"
				height="21"
				viewBox="0 0 21 21"
				fill="currentColor"
				class="scale-150"
			>
				<path
					d="M-0.000226567 18.3845L18.3845 -0.000236505L20.5059 2.12108L2.12109 20.5059L-0.000226567 18.3845Z"
				/>
				<path
					d="M2.24241 -0.000226567L20.6272 18.3845L18.5059 20.5059L0.121094 2.12109L2.24241 -0.000226567Z"
					fill="currentColor"
				/>
			</svg>
		</button>
		{#if showMenu}
			<NavItem href="#">
				<span class="text-5xl font-bold">HOME</span>
			</NavItem>
			<NavItem href="#about">
				<span class="text-5xl font-bold">ABOUT</span>
			</NavItem>
		{/if}
	</div>
	{#if showMenu}
		<div
			class="settings flex flex-col gap-4 p-4"
			transition:slide={{ duration: 300, easing: quintOut, axis: 'x' }}
		>
			<div class="flex items-center justify-between text-3xl text-pistachio">
				<Switch bind:checked={animations} id="anim" label="Animations" />
			</div>
			<div class="flex items-center justify-between text-3xl text-pistachio">
				<Switch bind:checked={intro} id="intro" label="Intro" disabled={!animations} />
			</div>
		</div>
	{/if}
</nav>

<style>
	.settings > div {
		font-family: 'Clear Sans';
	}
</style>
