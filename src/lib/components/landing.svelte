<script lang="ts">
	import gsap from 'gsap';
	import { onMount } from 'svelte';

	let loading = true;
	let h1: HTMLElement;
	let h2: HTMLElement;

	onMount(async () => {
		loading = false;

		let tl = gsap.timeline();
		tl.from('.name', {
			y: 200,
			duration: 1.25,
			ease: 'power4.out',
			opacity: 0,
			delay: 0.2
		}).from('.title, .t2, .arrow-down-xl', {
			y: 200,
			duration: 1.25,
			delay: '-.25',
			ease: 'power4.out',
			opacity: 0,
			stagger: 0.2
		});
	});
</script>

<div class="flex h-screen items-end justify-between pb-16">
	<div class="title md:text-10xl w-fit text-6xl font-bold tracking-tighter">
		<h1 bind:this={h1} class="name w-[110%] sm:w-full">Jack Kufa</h1>
		<h2 bind:this={h2} class="title w-[110%] sm:w-full">
			Frontend <div class="t2 text-end">Engineer</div>
		</h2>
	</div>
	<i class="arrow-down-xl -translate-y-2">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="75"
			height="116"
			viewBox="0 0 75 116"
			fill="none"
		>
			<path
				d="M48 83.3512L48 0H28V83.3512L0 59V83.0078L37.5 116L75 83.0078V59L48 83.3512Z"
				class="fill-off-black"
			/>
		</svg>
	</i>
</div>
