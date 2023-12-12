<script lang="ts">
	import { Canvas } from '@threlte/core';
	import Scene from './Scene.svelte';

	let wrapper: HTMLDivElement;
	export let follow: boolean;
  let w: number;
  let h: number;

</script>

<!-- Need negative z-index on both divs to avoid fps drop & jitter -->
<div class="background fixed -z-10 h-screen w-screen">
	<div
		bind:this={wrapper}
    bind:clientWidth={w}
    bind:clientHeight={h}
		class="-z-10 h-full w-full transition-opacity duration-500"
		class:opacity-30={follow}
    
	>
		<Canvas>
			<Scene bind:w bind:h />
		</Canvas>
	</div>
</div>
