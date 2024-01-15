<script lang="ts">
	import { directions } from './directions';

	export let direction: (typeof directions)[number] = 'n';
	$: rotation = directions.indexOf(direction) * 45;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	viewBox="0 0 16 24"
	fill="none"
	style="transform: rotate({rotation}deg);"
>
	<path
		d="M6.18 5.583V24h3.428V5.583L16 10.99V7.326L8 0 0 7.326v3.664l6.18-5.407Z"
		fill="currentColor"
	/>
</svg>

<style>
	svg {
		max-width: 100%; /* Ensures the SVG doesn't exceed its container */
		height: auto; /* Allows the SVG to scale proportionally */
	}
</style>
