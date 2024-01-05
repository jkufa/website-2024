<script lang="ts">
	import SlideInOut from './SlideInOut.svelte';

	export let onClick: () => void = () => {};
	export let label: string = '';
	export let disabled = false;
</script>

<SlideInOut {disabled}>
	<button
		class="
      w-full
      border border-solid border-pistachio
      p-3
      font-semibold
      text-off-black

      focus-visible:outline-none
      disabled:opacity-50
      "
		{disabled}
		on:click={onClick}
	>
		{#if label}
			{label}
		{:else}
			<slot />
		{/if}
	</button>
</SlideInOut>
