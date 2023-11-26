<script lang="ts">
	import { onMount } from 'svelte';
	import gsap from 'gsap';

  export let pos = { x: 0, y: 0 };
  export let follow = false;
	export let el: HTMLDivElement;

	let hasMoved = true;
	const names = [
    'mug0',
    'mug1',
    'mug2',
    'mug3',
    'mug4',
    'mug5',
    'mug6'
  ];
	
	let current = 0;
	$: name = names[current];
	
	onMount(() => {
		const interval = setInterval(() => {
			current = (current + 1) % names.length;
		}, 120);
		
		return () => clearInterval(interval);
	});
	function handleMouse(e: MouseEvent) {
		gsap.to(el, {
			x: e.clientX - 200,
			y: e.clientY - 200,
			duration: hasMoved ? 1.2 : 0,
			ease: 'expo.out'
		});
	}
</script>

<svelte:window on:mousemove={() => {if (follow) handleMouse(event)}} />
  <div class="flex h-screen items-center justify-center">
    <div 
    bind:this={el}
    class="{follow ? 'fixed shrink' : ''}"
    data-sevenup="{name}.png" style="transform: translate({pos.x}px,{pos.y}px);">
    </div>
  </div>

<style>
  * {
    border: 1px solid red;
  }
  .shrink {
    scale: .25 !important;
    transition: scale 100ms ease-in-out;
  }
  .landing-spot {
    position: absolute;
    top: 25%;
    left: 25%;
    transform: translate(-50%, -50%);
  }
	[data-sevenup] { background-image: url('./sprites.png'); background-size: 1536px 1536px;}
  [data-sevenup="mug0.png"] { width: 512px; height: 512px; background-position: 0px 0px }
  [data-sevenup="mug1.png"] { width: 512px; height: 512px; background-position: -512px 0px }
  [data-sevenup="mug2.png"] { width: 512px; height: 512px; background-position: 0px -512px }
  [data-sevenup="mug3.png"] { width: 512px; height: 512px; background-position: -512px -512px }
  [data-sevenup="mug4.png"] { width: 512px; height: 512px; background-position: -1024px 0px }
  [data-sevenup="mug5.png"] { width: 512px; height: 512px; background-position: -1024px -512px }
  [data-sevenup="mug6.png"] { width: 512px; height: 512px; background-position: 0px -1024px }
</style>
