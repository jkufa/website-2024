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

	function setX() {
		if (iconDirection.includes('e')) return 0.33;

		if (iconDirection.includes('w')) return -0.33;

		return 0;
	}

	function setY() {
		if (iconDirection.includes('n')) return -0.25;

		if (iconDirection.includes('s')) return 0.25;

		return 0;
	}
</script>

<SlideInOut>
	<a
		{href}
		draggable="false"
		class="flex w-full items-center justify-between p-8 text-off-black focus-visible:outline-none"
		class:flex-row-reverse={iconPos === 'start'}
		style="--tx: {translateX}rem; --ty: {translateY}rem;"
	>
		<slot />
		{#if showIcon}
			<div class="icon text-pistachio transition-[transform,color]">
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
		transition-delay: 400ms; /* TODO: remove */
	}
</style>
