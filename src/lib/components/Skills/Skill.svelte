<script lang="ts">
	export let label: string;
</script>

<div
	class="flex border border-pistachio bg-off-black p-[1em]
  text-clamp-md
  font-semibold"
>
	{label}
</div>

<style lang="postcss">
	div {
		box-sizing: border-box;
		white-space: nowrap;
	}
</style>
