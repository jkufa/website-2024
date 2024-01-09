<script lang="ts">
	import SlideInOut from '../Animations/SlideInOut.svelte';
	import ArrowIcon from './ArrowIcon.svelte';
	import { directions } from './directions';

	export let href: string;
	/**
	 * Used to indicate links that leave the site
	 */
	export let showIcon: boolean = true;
	export let iconPos: 'start' | 'end' = 'end';
	export let iconDirection: (typeof directions)[number] = 'ne';

	let translateX: number;
	let translateY: number;

	$: iconDirection, (translateX = setX()), (translateY = setY());

	// In rem
	const x = 0.33;
	const y = 0.25;

	function setX() {
		if (iconDirection.includes('e')) return x;

		if (iconDirection.includes('w')) return -x;

		return 0;
	}

	function setY() {
		if (iconDirection.includes('n')) return -y;

		if (iconDirection.includes('s')) return y;

		return 0;
	}
</script>

<SlideInOut>
	<a
		{href}
		draggable="false"
		class="flex w-full items-center justify-between gap-8 px-[2em] py-[1.25em] text-clamp-base font-extrabold uppercase text-off-black focus-visible:outline-none"
		class:flex-row-reverse={iconPos === 'start'}
		style="--tx: {translateX}rem; --ty: {translateY}rem;"
	>
		<slot />
		{#if showIcon}
			<div
				class="icon text-pistachio transition-[transform,color]"
				style="transition-delay: {iconPos === 'start' ? '200ms' : '400ms'}"
			>
				<ArrowIcon direction={iconDirection} />
			</div>
		{/if}
	</a>
</SlideInOut>

<style lang="postcss">
	a:hover > .icon,
	a:focus-visible > .icon {
		color: rgb(11 9 4 / 1);
		transform: translate(var(--tx), var(--ty));
	}
</style>
