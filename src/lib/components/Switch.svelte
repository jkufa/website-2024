<script lang="ts">
	import { onMount } from 'svelte';
	import { quartInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let id: string;
	export let label: string;
	export let checked: boolean = false;
	export let disabled = false;
	export let tabIndex = 0;
	export let onToggle: Function;

	let handleRef: HTMLDivElement;
	const off = {
		x: 0,
		offset: 0,
		opacity: 0.6,
	};
	const on = {
		x: 100,
		offset: 0.5,
		opacity: 1,
	};

	let tweens = tweened(checked && !disabled ? on : off, { duration: 300, easing: quartInOut }); // in %

	$: if (disabled) {
		$tweens = off;
	} else if (checked) {
		$tweens = on;
	}

	function toggle() {
		if (disabled) return;

		if (checked) {
			tweens.set({
				x: 0,
				offset: 0,
				opacity: 0.6,
			});
			checked = false;
		} else {
			tweens.set({
				x: 100,
				offset: 0.5,
				opacity: 1,
			});
			checked = true;
		}
		onToggle();
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key !== 'Enter' && e.key !== ' ') return;
		toggle();
	}
</script>

<label for={id} class:opacity-60={disabled} class="transition-opacity"
	>{label} {checked && !disabled ? 'on' : 'off'}</label
>
<div
	{id}
	role="checkbox"
	tabindex={!disabled ? tabIndex : null}
	aria-checked="false"
	on:click={toggle}
	on:keydown={handleKeydown}
	class="track float-right flex h-[1em] w-[2em] cursor-pointer border border-solid border-pistachio p-1 transition-opacity aria-disabled:cursor-not-allowed"
	class:opacity-50={disabled}
	aria-disabled={disabled}
	class:disabled
>
	<div
		bind:this={handleRef}
		class="handle h-full w-[calc(50%-0.25rem)] bg-pistachio"
		style="
    transform: translateX(calc({$tweens.x}% + {$tweens.offset}rem));
    opacity: {$tweens.opacity};
    "
	></div>
</div>

<style lang="scss">
	.track {
		transition: box-shadow 300ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
		transition-property: box-shadow, opacity;
	}
	.handle {
		// transition: width 200ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
		transition-property: opacity;
	}
	.track:focus-visible {
		box-shadow: 0px 0px 0px 0.25rem rgba(178, 185, 159, 0.4);
		outline: none;
	}
	/*
  TODO: learn to handle this right
  .track:hover {
    .handle {
      width: 60%;
    }
  }
  */
</style>
