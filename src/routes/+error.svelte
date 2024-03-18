<script lang="ts">
	import Button from '$lib/components/Button/Button.svelte';
	import Link from '$lib/components/Link/Link.svelte';
	import Mug from '$lib/components/Mug.svelte';
	import { H1, P } from '$lib/design';
</script>

<div
	class="mx-4 mt-1/4 flex flex-col-reverse items-center justify-center gap-24 md:mx-8 md:flex-row md:gap-32"
>
	<div class="flex flex-col items-center gap-4">
		<H1>404</H1>
		<P variant="large">Page not found</P>
		<div class="mt-2 w-fit border border-solid border-pistachio-lite md:mt-4 lg:mt-8">
			<Link href="/" iconDirection="w" iconPos="start">Back to home</Link>
		</div>
	</div>
	<Mug follow={false} hideUntilFollow={false}></Mug>
</div>
