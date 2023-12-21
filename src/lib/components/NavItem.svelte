<script lang="ts">
	import { quintOut } from 'svelte/easing';
	import { slide } from 'svelte/transition';

	export let active = false;
	export let href: string;
</script>

<a
	{href}
	draggable="false"
	class="mx-4 my-1 p-4
  text-pistachio
  transition-all
  focus-within:bg-pistachio focus-within:text-off-black focus-within:outline-none hover:bg-pistachio
  hover:text-off-black active:bg-pistachio active:text-off-black
  "
>
	<slot />
</a>
