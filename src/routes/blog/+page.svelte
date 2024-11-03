<!-- Blog list page -->
<script lang="ts">
	import { page } from '$app/stores';
	import * as dates from '$lib/dates';
	import NewFlag from '$lib/components/NewFlag.svelte';
	export let data;
</script>

<div class="flex flex-col gap-8 sm:w-100 p-0 mx-2 sm:m-auto font-inter items-center">
	{#each data.posts as blogPost}
		<a
			href="{$page.url.pathname}/{blogPost.slug}"
			class="container flex flex-col align-items-center justify-items-center md:flex-row bg-transparent border border-platinum rounded-md text-white hover:border-pictonblue hover:border-l-8"
		>
			<div class="container flex flex-col text-1xl md:text-2xl p-5">
				<p class="date mb-2 text-2xl md:text-3xl">
					{blogPost.date}
				</p>

				<div class="flex flex-row">
					<h1 class="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
						{blogPost.title}
					</h1>
					{#if dates.isWithinDays(new Date(blogPost.date))}
						<div class="scale-[1.25]">
							<NewFlag></NewFlag>
						</div>{/if}
				</div>
				<p class="lg:text-2xl">{blogPost.description}</p>
			</div>

			<div class="relative h-96 w-full md:h-auto md:basis-1/2">
				<img class="absolute w-full h-full object-cover sm:rounded-md" src={blogPost.thumbnail} />
			</div>
		</a>
	{/each}
</div>
