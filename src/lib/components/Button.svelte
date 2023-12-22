<script lang="ts">
	export let onClick: Function = () => {};
	export let label: string;
</script>

<button
	class="
  flex flex w-full justify-end justify-center border border-solid border-pistachio p-4 text-pistachio transition-all
  focus-within:outline-none
  "
	on:click={() => {
		onClick();
	}}
>
	{label}
</button>
