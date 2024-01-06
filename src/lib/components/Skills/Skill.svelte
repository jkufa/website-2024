<script lang="ts">
	export let label: string;
</script>

<div
	class="flex border border-pistachio bg-off-black p-6

  text-lg
  
  md:p-7 md:text-2xl
  
  lg:p-9 lg:text-4xl"
>
	{label}
</div>

<style lang="postcss">
	div {
		box-sizing: border-box;
		white-space: nowrap;
	}
</style>
