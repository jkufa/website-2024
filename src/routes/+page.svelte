<script lang="ts">
	import Mug from '$lib/components/Mug.svelte';
	import Lenis from '@studio-freight/lenis';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import { setScale } from '$lib/scene';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	let lenis: Lenis;
	let follow: boolean;
	let cursor: HTMLDivElement;
	let spiral: HTMLCanvasElement;
	let createScene;
  let title: HTMLHeadingElement;
  let ogTitlePos: number;

  const exp = tweened(0, {duration: 5000, easing: cubicInOut});
  $: setScale($exp);

	onMount(async () => {
		// ensures window exists
		createScene = (await import('$lib/scene')).createScene;
		createScene(spiral);

    ogTitlePos = title.getBoundingClientRect().bottom;

		lenis = new Lenis({
			lerp: 0.075
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		lenis.on('scroll', (e: number) => {
      handleFollow();
		});
		requestAnimationFrame(raf);

    gsap.set('h1', {
      opacity: 0,
      y: 200,
    });
    gsap.set(cursor, {
      opacity: 0,
      scale: 0
    })
    exp.set(150).then(() => {
      gsap.to('h1', {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 2,
        ease: 'power4.out',
      });
      gsap.to(cursor, {
        opacity: 1,
        scale: 1,
        duration: 5,
			  delay: 1,
  			ease: 'elastic.out(.75,0.4)'
      })
    })

		return () => {
			lenis.destroy();
		};
	});

  function handleFollow() {
    const bot = title.getBoundingClientRect().bottom;
    if (follow) {
      follow = bot <= ogTitlePos / 1.5
    }
    else {
      follow = bot <= 0
    }
  }
</script>

<!-- <canvas bind:this={el} id="container" class="fixed -z-10 h-full w-full transition-opacity" /> -->
<canvas
	bind:this={spiral}
	id="container"
	class="fixed -z-10 h-full w-full transition-opacity duration-500"
	class:opacity-30={follow}
/>
<div class="flex h-screen flex-col items-center justify-center gap-10">
  <Mug bind:follow bind:el={cursor} />
  <h1 bind:this={title}
    class="leading-85 absolute bottom-12 text-center text-6xl font-black tracking-tighter text-off-white md:text-9xl md:leading-9 md:tracking-tightest lg:text-10xl"
  >
    HIRE JACK KUFA
  </h1>
</div>
<!-- <Landing /> -->
<!-- <About /> -->
<div class="h-screen"></div>
