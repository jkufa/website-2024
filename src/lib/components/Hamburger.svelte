<script lang="ts">
	export let onClick: Function;
</script>

<button
	class="z-50 flex w-fit justify-end p-8 text-pistachio transition-all focus-within:outline-none"
	on:click={onClick()}
>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width="21"
		height="21"
		fill="currentColor"
		class="scale-150"
		><path d="M0 18.384 18.384 0l2.122 2.121L2.12 20.506 0 18.384Z" /><path
			d="m2.242 0 18.385 18.384-2.121 2.122L.12 2.12 2.242 0Z"
		/></svg
	>
</button>
