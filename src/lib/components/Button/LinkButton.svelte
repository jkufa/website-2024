<script lang="ts">
	import { SlideInOut } from '../Animations';

	export let label: string = '';
	export let href: string;
</script>

<SlideInOut>
	<a
		{href}
		class="
			h-full w-full border border-solid border-pistachio-lite p-3 text-center
      font-semibold

			focus-visible:outline-none
			disabled:opacity-50
			"
	>
		{#if label}
			{label}
		{:else}
			<slot />
		{/if}
	</a>
</SlideInOut>
