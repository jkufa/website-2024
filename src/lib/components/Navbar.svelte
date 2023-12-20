<script lang="ts">
	import Switch from './Switch.svelte';
	import NavItem from './NavItem.svelte';
	import { crossfade, scale, slide, type ScaleParams } from 'svelte/transition';
	import { cubicInOut, quintInOut } from 'svelte/easing';

	export let animations = true;
	export let intro = true;
	export let showMenu = false;

  function slideIn(node, { duration }) {
    return {
      duration,
      css: (t) => {
        const ease = cubicInOut(t);
        console.log('t', t)
        return `
          min-width: 87px;
          min-height: 87px;
          width: ${ease * 100}%;
          height: ${ease * 100}%;
        `;
      }
    };
  }
</script>


{#if showMenu}
  <nav
    class="fixed end-4 top-4 z-[999] flex flex-col h-[30rem] items-end gap-16  hover:opacity-100 md:end-8 md:top-8"
    class:w-96={showMenu}
    class:opacity-60={!showMenu}  
  >
  <div class="container border border-solid border-pistachio overflow-hidden flex flex-col justify-between h-full bg-off-black"
  transition:slideIn={{duration: 5000}}
  >
    <div class="nav-items flex flex-col gap-4 text-end">
      <button
        class="flex w-full justify-end p-8 text-pistachio transition-all focus-within:outline-none bg-off-black"
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
        <NavItem href="#">
          <span class="text-5xl font-bold">HOME</span>
        </NavItem>
        <NavItem href="#about">
          <span class="text-5xl font-bold">ABOUT</span>
        </NavItem>
    </div>
    <div
        class="settings flex flex-col gap-4 p-4"
      >
        <div class="flex items-center justify-between text-3xl text-pistachio">
          <Switch bind:checked={animations} id="anim" label="Animations" />
        </div>
        <div class="flex items-center justify-between text-3xl text-pistachio">
          <Switch bind:checked={intro} id="intro" label="Intro" disabled={!animations} />
        </div>
    </div>
  </div>
  </nav>
{/if}
<nav
	class="z-50 fixed end-4 top-4 flex flex-col gap-16 border border-solid border-pistachio hover:opacity-100 md:end-8 md:top-8 bg-off-black border-e border-t"
>
<button class="flex w-full justify-end p-8 text-pistachio transition-all focus-within:outline-none bg-opacity-20" on:click={() => (showMenu = !showMenu)}>
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
</nav>

<style>
	.settings > div {
		font-family: 'Clear Sans';
	}
</style>
