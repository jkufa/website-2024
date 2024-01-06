<script lang="ts">
	export let id: string;
	/**
	 * extra classes appended to the end
	 */
	export let styles: string = '';
</script>

<section {id} class="mx-4 flex h-screen flex-col gap-12 {styles}" {...$$restProps}>
	<slot />
</section>
