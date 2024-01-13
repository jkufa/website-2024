<!-- Load components async
<script lang="ts">
	import { onMount } from "svelte";

  let Bg: typeof Background;
  let follow = false;
  export const TOTAL_COMPONENTS = 1;

  onMount(async () => {
    const { Background } = (await import('$lib/components'));
    Bg = Background;
    loadedComponents.set($loadedComponents + 1);
    console.log($loadedComponents);
  });
</script>

<svelte:component this={Bg} bind:follow/> -->