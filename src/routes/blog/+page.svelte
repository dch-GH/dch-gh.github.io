<!-- Blog list page -->
<script lang="ts">
	import { page } from '$app/stores';
	import * as dates from '$lib/dates';
	import NewFlag from '$lib/components/NewFlag.svelte';
	export let data;
</script>

<div
	class="flex flex-col gap-8 sm:w-100 p-0 mx-2 sm:px-5 md:px-16 sm:m-auto pt-16 font-inter items-center"
>
	{#each data.posts as blogPost}
		<a
			href="{$page.url.pathname}/{blogPost.slug}"
			class="container flex flex-col align-items-center justify-items-center md:flex-row bg-blackalpha rounded-md text-white hover:border-pictonblue hover:border-b-4"
		>
			<div class="container flex flex-col text-1xl md:text-2xl p-5">
				<p class="date mb-2 text-2xl md:text-3xl">
					{blogPost.date}
					{#if dates.isWithinDays(new Date(blogPost.date))}
						<div class="translate-x-[210px] translate-y-[-33px]">
							<NewFlag></NewFlag>
						</div>{/if}
				</p>

				<h1 class="mb-2 text-3xl md:text-5xl lg:text-6xl font-bold">
					{blogPost.title}
				</h1>
				<p class="lg:text-2xl">{blogPost.description}</p>
			</div>

			<div class="relative h-96 w-full md:h-auto md:basis-1/2">
				<img
					class="mt-5 sm:mt-0 mx-0 absolute w-full h-full object-cover sm:rounded-md"
					src={blogPost.thumbnail}
				/>
			</div>
		</a>
	{/each}
</div>
