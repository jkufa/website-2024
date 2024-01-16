<script lang="ts">
	export let onClick: Function;
	export let height: number;
	export let width: number;
	export let toX: boolean;

	let topBun: SVGPathElement;
	let botBun: SVGPathElement;
	let patty: SVGPathElement;
</script>

<button
	aria-label="navigation menu button"
	bind:clientWidth={width}
	bind:clientHeight={height}
	class="
  flex w-fit justify-end p-5 transition-all focus-within:outline-none
  active:scale-95
  md:p-8
  "
	on:click={() => {
		onClick();
	}}
>
	<svg
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="h-4 w-4 scale-150 md:h-6 md:w-6"
	>
		<path
			bind:this={topBun}
			id="t-bun"
			d="M0 2.5L24 2.5L24 5.5L-1.31134e-07 5.5L0 2.5Z"
			fill="currentColor"
			class:x={toX}
		/>
		<path
			bind:this={patty}
			id="patty"
			d="M0 10.5L24 10.5L24 13.5L-1.31134e-07 13.5L0 10.5Z"
			fill="currentColor"
			class:x={toX}
		/>
		<path
			bind:this={botBun}
			id="b-bun"
			d="M0 18.5L24 18.5L24 21.5L-1.31134e-07 21.5L0 18.5Z"
			fill="currentColor"
			class:x={toX}
		/>
	</svg>
</button>

<style lang="scss">
	button:focus-visible {
		box-shadow: 0px 0px 0px 0.25rem rgba(178, 185, 159, 0.4);
		outline: none;
	}
	svg {
		transition: transform 300ms 100ms ease;
	}
	path {
		transform-origin: center;
		transition: transform 300ms ease;
	}
	button:hover svg {
		transform: scale(1.75) !important;
	}
	#t-bun.x {
		transform: rotateZ(-45deg) translate(0px, 8px);
	}
	#b-bun.x {
		transform: rotateZ(45deg) translate(0px, -8px);
	}
	#patty.x {
		transform: rotateZ(45deg);
	}
</style>
