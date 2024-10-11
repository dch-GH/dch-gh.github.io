<!-- Blogpost page -->

<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<base target="_blank" />

<!-- Outer container -->
<div class="md:px-18 flex flex-col font-inter lg:px-32 xl:px-64">
	<!-- Blogpost inner -->
	<div class="mb-10 text-white text-shadow pt-0 px-2 sm:px-5 md:px-10 flex flex-col">
		<p class="text-pictonblue mb-5 text-5xl md:text-7xl sm:text-5xl font-bold sm:px-0">
			{data.blogPost.title}
		</p>
		<p class="date mb-5 md:text-4xl sm:text-3xl text-2xl">
			{new Date(data.blogPost.date).toLocaleString('en-us', {
				month: 'short',
				day: 'numeric',
				year: 'numeric'
			})}
		</p>

		<hr />
		<article
			class="prose prose-maincolors w-full rounded-md p-5 font-inter bg-transparent border border-platinum text-platinum max-w-full"
		>
			{#if data.blogPost.editDate}
				<div class="flex flex-row justify-items-center">
					<p class="text-pictonblue italic font-inter font-bold mr-1">Last edited on:</p>
					<p class="date my-auto italic">
						{new Date(data.blogPost.editDate).toLocaleString('en-us', {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</p>
				</div>
			{/if}
			<svelte:component this={data.content} />
		</article>
	</div>
</div>
