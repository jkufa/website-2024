<script lang="ts">
	/**
	 * extra classes appended to the end
	 */
	export let styles: string = '';
</script>

<h2 class="tracking max-w-full font-bold leading-[.9] {styles}" {...$$restProps}>
	<slot />
</h2>

<style lang="postcss">
	h2 {
		font-size: clamp(2rem, 9vw, 9rem);
	}
</style>
