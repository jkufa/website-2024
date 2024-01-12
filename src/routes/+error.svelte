<script lang="ts">
	import { Link, Mug } from '$lib/components';
	import { H1, P } from '$lib/design';
</script>

<div
	class="mx-4 mt-1/4 flex flex-col items-center justify-center gap-24 md:mx-8 md:flex-row md:gap-32"
>
	<div class="flex flex-col gap-6">
		<H1 styles="flex items-center gap-6">404</H1>
		<P variant="large">Page not found</P>
		<div
			class="mt-8 w-full border border-solid border-transparent transition-[border-color] duration-500 hover:border-pistachio"
		>
			<Link href="/" iconDirection="w" iconPos="start">
				<span class="text-2xl font-bold">Back to home</span>
			</Link>
		</div>
	</div>
	<Mug follow={false} hideUntilFollow={false}></Mug>
</div>
