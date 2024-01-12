<script lang="ts">
	import { Canvas } from '@threlte/core';
	import { userSettings } from '$lib/stores/userSettings';
	import Scene from './Scene.svelte';
	import { onMount } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';

	export let follow: boolean;
	let wrapper: HTMLDivElement;
	let w: number;
	let h: number;

  $: ({animationsOn, introOn} = $userSettings);

  // const scale = tweened(0, {
	// 	duration: animationsOn && introOn ? 5000 : 0,
	// 	easing: cubicInOut,
	// });

  // onMount(() => {
  //   console.log($scale)
  //   scale.set(150).then(() => console.log($scale));
  // })
</script>

<!-- Need negative z-index on both divs to avoid fps drop & jitter -->
<div class="background fixed -z-10 h-screen w-screen">
	<div
		bind:this={wrapper}
		bind:clientWidth={w}
		bind:clientHeight={h}
		class="-z-10 h-full w-full transition-opacity duration-500"
		class:opacity-30={follow || !$userSettings.animationsOn}
	>
		<Canvas>
			<Scene bind:w bind:h />
		</Canvas>
	</div>
</div>
