<script lang="ts">
	import { page } from '$app/stores';
</script>

<div
	class="flex h-screen flex-col items-center justify-center text-4xl font-bold font-inter text-platinum"
>
	{#if $page.status == 404}
		<p class="text-9xl my-5 text-red backdrop-invert rounded-lg">404</p>
		<div class="flex flex-col items-center bg-blackalpha rounded-lg">
			<p class="text-9xl my-5">😔</p>
			<p class="text-xl my-5">it's over</p>
		</div>
	{:else}
		<p class="">Error {$page.status}</p>
		<p class="uppercase">{$page.error?.message}</p>
	{/if}
</div>
