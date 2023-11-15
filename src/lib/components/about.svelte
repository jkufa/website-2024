<script lang="ts">
	import gsap from 'gsap';
	// See: https://gsap.com/community/forums/topic/32031-scrolltrigger-error-only-in-production/#comment-160393
	import ScrollTrigger from 'gsap/dist/ScrollTrigger';

	import { onMount } from 'svelte';

	let h2: HTMLElement;

	onMount(async () => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.from('.about > h2, .about > h2 ~ p', {
			scrollTrigger: {
				trigger: '.about > h2',
				toggleActions: 'restart none none none',
				scrub: 1,
				end: 'bottom-=100px top'
			},
			y: 200,
			duration: 1.25,
			ease: 'power4.out',
			opacity: 0,
			delay: 0.2,
			stagger: 0.2
		});
	});
</script>

<section class="about flex h-screen flex-col items-start justify-center pb-16">
	<h2 bind:this={h2} class="text-10xl font-bold tracking-tighter">About</h2>
	<p class="mt-8 max-w-[39.625rem] text-3xl">
		I’m a frontend software engineer currently living in the greater Philadelphia area. I build
		fast, responsive & accessible products for the web.
	</p>
	<p class="mt-8 max-w-[39.625rem] text-3xl">
		Previously at Service Management Group, Cinemacraft LLC, Yaskawa America Inc.
	</p>
</section>
