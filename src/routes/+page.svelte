<script lang="ts">
	import { onMount } from 'svelte';
	import Lenis from '@studio-freight/lenis';
	import { Canvas } from '@threlte/core';
	import Scene from '$lib/components/Scene.svelte';
	import Mug from '$lib/components/Mug.svelte';

	let wrapper: HTMLDivElement;
	let follow: boolean;
</script>

<div class="wrapper h-screen w-screen">
  <div
    bind:this={wrapper}
    class="fixed -z-10 h-full w-full transition-opacity duration-500"
    class:opacity-30={follow}
  >
    <Canvas>
      <Scene w={wrapper.clientWidth} h={wrapper.clientHeight} />
    </Canvas>
    <!-- <Mug/> -->
  </div>
</div>

<div class="h-screen"></div>

<style lang="postcss">
	:global(body) {
		margin: 0;
	}
</style>
