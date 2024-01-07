<script lang="ts">
	import SlideInOut from '../Animations/SlideInOut.svelte';
	import ArrowIcon from './ArrowIcon.svelte';

	export let href: string;
	/**
	 * Used to indicate links that leave the site
	 */
	export let showIcon: boolean = true;
</script>

<SlideInOut>
	<a
		{href}
		draggable="false"
		class="flex w-full items-center justify-between p-8 text-off-black focus-visible:outline-none"
	>
		<slot />
		{#if showIcon}
			<div class="icon text-pistachio transition-[transform,color]">
				<ArrowIcon direction="ne" />
			</div>
		{/if}
	</a>
</SlideInOut>

<style lang="postcss">
	a:hover > .icon,
	a:focus-visible > .icon {
		color: rgb(11 9 4 / 1);
		transform: translate(0.33rem, -0.25rem);
		transition-delay: 400ms; /* TODO: remove */
	}
</style>
