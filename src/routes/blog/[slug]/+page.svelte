<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<!-- <div class="w-fullbg-fixed fixed h-full" style="z-index: -1">
	{#if data.blogPost.thumbnail}
		<img
			class="absolute h-screen w-screen bg-fixed object-cover"
			src={data.blogPost.thumbnail}
			alt="background"
		/>
	{/if}
	<div class="h-screen w-screen bg-pixel-dark mix-blend-multiply" />
	<div class="background-fade absolute top-0 flex h-screen w-screen justify-center" />

</div> -->

<main class="md:px-10 container mx-auto h-full">
	<div class="md:px-18 container mx-auto flex flex-col pt-12 pb-12 font-inter">
		<p class="title mb-5 text-7xl font-bold sm:px-0">{data.blogPost.title}</p>
		<p class="date mb-5 text-3xl">
			{new Date(data.blogPost.date).toLocaleString('en-us', {
				month: 'short',
				day: 'numeric',
				year: 'numeric'
			})}
		</p>

		<hr />
		<article class="prose rounded-t p-5 font-inter text-white">
			<svelte:component this={data.content} />
		</article>
	</div>
</main>
