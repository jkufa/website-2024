<script lang="ts">
	import { gsap } from 'gsap';
	import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { onMount } from 'svelte';

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
		gsap
			.timeline({
				scrollTrigger: {
					trigger: '#box',
					scrub: 1.5,
					markers: true,
					start: 'center-=50px bottom-=100px',
					end: 'center+=200px end'
				},
        defaults: {
          ease: "sine.out"
        }
			})
			.from('#box > div > *', {
				rotateX: '-60deg',
				opacity: 0,
				scale: 0.75,
				stagger: 0.4
			})
			.to('#box > div > *', {
				rotateX: 0,
				opacity: 1,
				scale: 1,
			})
			.to('#box > div > *', {
				rotateX: '60eg',
				opacity: 0,
				scale: 0.75,
				stagger: 0.1
			});
	});
</script>

<!-- <div class="translate-x-16"> -->

<div id="box" class="flex w-fit max-w-3xl flex-col gap-6 p-2 text-off-white">
	<div class="perspective">
		<h2 class="text-8xl font-bold tracking-tighter">DEVELOPER FIRST</h2>
	</div>
	<div class="perspective">
		<p class="text-3xl font-light leading-10">
			Classically trained, Jack Kufa graduated from Missouri S&T with a Bachelors in Computer
			Science and Computer Engineering.
		</p>
	</div>
</div>

<style>
	p {
		margin-top: 1rem;
		font-family: 'Archivo';
	}
	.perspective {
		perspective: 1200px;
	}
	/* #box > div > * {
    border: 1px solid red;
	} */
</style>
