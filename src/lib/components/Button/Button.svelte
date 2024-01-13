<script lang="ts">
	import { SlideInOut } from '../Animations';
	import LinkButton from './LinkButton.svelte';

	export let onClick: () => void = () => {};
	export let label: string = '';
	export let disabled = false;
	export let href: string = '';
</script>

{#if href}
	<LinkButton {href} {label}>
		<slot />
	</LinkButton>
{:else}
	<SlideInOut {disabled}>
		<button
			class="
        w-full
        border border-solid border-pistachio
        p-4
        font-medium
        text-off-black

        focus-visible:outline-none
        disabled:opacity-50
        "
			{disabled}
			on:click={onClick}
		>
			{#if label}
				{label.toLocaleUpperCase()}
			{:else}
				<slot />
			{/if}
		</button>
	</SlideInOut>
{/if}
