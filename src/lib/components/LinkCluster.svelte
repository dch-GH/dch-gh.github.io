<script lang="ts">
	import Github from './Icons/Github.svelte';
	import Mail from './Icons/Mail.svelte';

	let scale = '0.6em';
</script>

<div class="flex gap-3 ml-0 mb-2 text-pictonblue">
	<a class="" href="https://github.com/dch-GH" target="_blank">
		<Github {scale} />
	</a>

	<a href="mailto:codesnax@yahoo.com">
		<Mail {scale} />
	</a>
</div>

<style>
	a {
		color: var(--pictonblue);
		transition: all ease-in-out 200ms;
	}

	a:hover {
		color: var(--prussianblue) !important;
	}
</style>
