<script lang="ts">
	import gsap from 'gsap';

	let hasMoved = true;
	let el: HTMLDivElement;

	function handleMouse(e: MouseEvent) {
		gsap.to(el, {
			x: e.clientX - 56,
			y: e.clientY - 56 / 3,
			duration: hasMoved ? 0.6 : 0,
			ease: 'expo.out'
		});
	}
</script>

<svelte:window on:mousemove={handleMouse} />
<div
	bind:this={el}
	role="presentation"
	class="absolute h-14 w-14 rounded-full border border-off-black"
></div>
