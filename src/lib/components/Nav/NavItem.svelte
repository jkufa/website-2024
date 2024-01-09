<script lang="ts">
	import { SlideInOut } from '../Animations';
	import { lenisInstance } from '..';
  import { page } from '$app/stores';

	/**
	 * Must be an id, must be unique
	 */
	export let href: string;

	function scrollTo(e: Event) {
    if ($page.url.pathname !== '/') return;

		e.preventDefault();
    const target = href ? `#${href}` : 'top';
		$lenisInstance.scrollTo(target);
	}
</script>

<SlideInOut>
	<a
		href="/#{href}"
		draggable="false"
		class="
    ms-auto
    p-3
    font-semibold
    text-off-black
  
    focus-visible:outline-none
    md:my-1
    md:p-4
    "
		on:click={scrollTo}
	>
		<slot />
	</a>
</SlideInOut>
