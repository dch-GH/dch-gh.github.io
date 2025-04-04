<script lang="ts">
	import LinkCluster from '$lib/components/LinkCluster.svelte';
	import { page } from '$app/stores';
	import * as dates from '$lib/dates';
	import NewFlag from '$lib/components/NewFlag.svelte';
	export let data;
</script>

<div class="font-inter font-bold container flex flex-col justify-center">
	<div class="container flex flex-row align-middle mb-5 items-center">
		<!-- svelte-ignore a11y-img-redundant-alt -->
		<a
			class="self-center hover:scale-110 ease-in-out duration-200"
			target="_blank"
			href="https://windows96.bandcamp.com/album/dated-new-aesthetic"
		>
			<img
				class="rounded-lg"
				src="https://cdn.discordapp.com/avatars/703715865178407102/bce2264682377eb2f41077559222bbc7.webp?size=128"
				alt="An image of a 3D rendered woman's face."
			/>
		</a>

		<div class="text-5xl sm:text-7xl font-bold text-white pl-5">
			<LinkCluster></LinkCluster>
			<h1 class="text-5xl md:text-7xl">Duston</h1>
		</div>
	</div>

	<hr />
	<br />

	<div class="flex flex-col gap-8 md:w-100 p-0 font-inter items-center">
		{#each data.posts as blogPost}
			<a
				href="{$page.url}{blogPost.slug}"
				class="container flex flex-col align-items-center justify-items-center md:flex-row bg-transparent border-[2px] border-prussianblue rounded-md text-white hover:border-pictonblue hover:border-l-8"
			>
				<div class="container flex flex-col text-1xl md:text-2xl p-5">
					<div class="flex flex-row">
						<h1 class="mb-2 text-3xl md:text-4xl lg:text-5xl font-bold whitespace-nowrap">
							{blogPost.title}
						</h1>

						{#if dates.isWithinDays(new Date(blogPost.date), 15)}
							<div class="scale-[1.25] ml-1">
								<NewFlag></NewFlag>
							</div>{/if}
					</div>
					<p class="date mb-2 text-xl md:text-2xl">
						{blogPost.date}
					</p>
					<p class="lg:text-xl">{blogPost.description}</p>
				</div>

				<div class="relative h-96 w-full md:h-auto md:basis-1/2">
					<img class="absolute w-full h-full object-cover" src={blogPost.thumbnail} />
				</div>
			</a>
		{/each}
	</div>
</div>
