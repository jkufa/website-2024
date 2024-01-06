<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Mug from '$lib/components/Mug.svelte';
	import { H1, P } from '$lib/design';
</script>

<div class="mt-1/4 flex flex-col items-center">
	<H1 styles="flex items-center gap-6 !leading-3">
		404
		<div class="scale-[65%]">
			<Mug follow={false} hideUntilFollow={false}></Mug>
		</div>
	</H1>
	<div class="flex w-fit flex-col gap-6 text-center">
		<P variant="large">Page not found</P>
		<Button href="/">Back to home</Button>
	</div>
</div>
