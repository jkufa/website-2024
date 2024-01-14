<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Link from '$lib/components/Link/Link.svelte';
	import Mug from '$lib/components/Mug.svelte';
	import { H1, P } from '$lib/design';
</script>

<div
	class="mx-4 mt-1/4 flex flex-col-reverse items-center justify-center gap-24 md:mx-8 md:flex-row md:gap-32"
>
	<div class="flex flex-col">
		<H1 styles="flex items-center">404</H1>
		<P variant="large">Page not found</P>
		<div class="mt-2 w-full border border-solid border-pistachio md:mt-8 lg:mt-16">
			<Link href="/" iconDirection="w" iconPos="start">Back to home</Link>
		</div>
	</div>
	<Mug follow={false} hideUntilFollow={false}></Mug>
</div>
