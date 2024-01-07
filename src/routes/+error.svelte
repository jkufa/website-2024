<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Link from '$lib/components/Link/Link.svelte';
	import Mug from '$lib/components/Mug.svelte';
	import { H1, P } from '$lib/design';
</script>

<div
	class="mx-4 mt-1/4 flex flex-col items-center justify-center gap-24 md:mx-8 md:flex-row md:gap-32"
>
	<div class="flex flex-col gap-6">
		<H1 styles="flex items-center gap-6">404</H1>
		<P variant="large">Page not found</P>
		<Link href="/" iconDirection="w" iconPos="start">
			<span class="text-2xl font-bold">Back to home</span>
		</Link>
	</div>
	<Mug follow={false} hideUntilFollow={false}></Mug>
</div>
