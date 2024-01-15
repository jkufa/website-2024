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
	let progress: number;

	$: iconDirection, (translateX = setX()), (translateY = setY());
	$: animate = checkProgress(progress);

	// In rem
	const x = 0.33;
	const y = 0.25;

	function checkProgress(progress: number) {
		if (iconPos === 'start') {
			return progress > -0.1 && progress < 0.9;
		} else if (iconPos === 'end') {
			return progress > -0.9 && progress < 0.1;
		}
		return false;
	}

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

<SlideInOut bind:progress>
	<a
		{href}
		draggable="false"
		class="flex w-full items-center justify-between gap-8 px-[1.25em] py-[1em] text-clamp-base font-medium text-off-black focus-visible:outline-none
    "
		class:flex-row-reverse={iconPos === 'start'}
		style="--tx: {translateX}rem; --ty: {translateY}rem;"
	>
		<slot />
		{#if showIcon}
			<div class="icon w-arrow text-pistachio transition-[transform,color]" class:animate>
				<ArrowIcon direction={iconDirection} />
			</div>
		{/if}
	</a>
</SlideInOut>

<style lang="postcss">
	.animate {
		color: theme(colors.off-black);
		transform: translate(var(--tx), var(--ty));
	}
</style>
