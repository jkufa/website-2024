<script lang="ts">
	import { quartInOut } from 'svelte/easing';
	import { tweened } from 'svelte/motion';

	export let id: string;
	export let label: string;
	export let checked: boolean = false;
	export let disabled = false;
	export let tabIndex = 0;
	export let onToggle: Function;

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

	let handleRef: HTMLDivElement;
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
	aria-label={label}
	tabindex={!disabled ? tabIndex : null}
	aria-checked={checked}
	class="
  track float-right flex h-[1em] min-h-[1.875rem] w-[2em] min-w-[3.25rem] cursor-pointer border border-solid
  border-pistachio p-1

  transition-[opacity,box-shadow]
  ease-circular-in-out

  focus-visible:shadow-outline
  focus-visible:outline-none

  aria-disabled:cursor-not-allowed
  "
	class:opacity-50={disabled}
	aria-disabled={disabled}
	class:disabled
	on:click={toggle}
	on:keydown={handleKeydown}
>
	<div
		bind:this={handleRef}
		class="handle h-full w-[calc(50%-0.25rem)] bg-pistachio transition-opacity ease-circular-in-out"
		style="
    transform: translateX(calc({$tweens.x}% + {$tweens.offset}rem));
    opacity: {$tweens.opacity};
    "
	></div>
</div>
