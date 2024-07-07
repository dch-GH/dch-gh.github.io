<script lang="ts">
	import type { PageData } from './$types';
	import InfoCard from '$lib/components/InfoCard.svelte';

	export let data: PageData;
</script>

<div class="flex flex-col w-1/2 items-center mx-auto my-16">
	<section class="w-full flex flex-col gap-10 font-inter text-shadow">
		{#each data.projects as project}
			<ul>
				<InfoCard>
					<div class="flex flex-row items-center">
						<h2 class="text-3xl font-bold mb-2">{project.title}</h2>
						{#if project.link}
							<a
								class="text-2xl mx-2 hover:scale-125 duration-200"
								href={project.link}
								target="_blank">🔗</a
							>
						{/if}
					</div>
					<p class="date mb-5 md:text-[1.5em] sm:text-3xl text-2xl">
						{new Date(project.date).toLocaleString('en-us', {
							month: 'short',
							day: 'numeric',
							year: 'numeric'
						})}
					</p>
					<p class="text-md sm:text-xl">{project.description}</p>
				</InfoCard>
			</ul>
		{/each}
	</section>
</div>
