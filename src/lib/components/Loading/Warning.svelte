<script lang="ts">
	import { P } from '$lib/design';
	import Button from '../Button/Button.svelte';
</script>

<dialog class="flex">
	<P>
		This website contains flashing that may cause discomfort or seizures in sensitive individuals.
	</P>
	<Button label="I understand, continue"></Button>
	<Button label="Disable animations & continue"></Button>
</dialog>
