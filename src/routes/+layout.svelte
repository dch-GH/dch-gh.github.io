<script lang="ts">
	import '../app.css';
	import '../syntax-highlight.css';
	import NavLink from '$lib/components/NavLink.svelte';
	import Background from '$lib/components/Background.svelte';
	import NewFlag from '$lib/components/NewFlag.svelte';
	import type { PageData } from './$types';
	import * as dates from '$lib/dates.ts';

	export let data: PageData;

	function hasNewBlog(): boolean {
		function datePredicate(blog: App.BlogPost): boolean {
			const blogDate = new Date(blog.date);
			console.log(blogDate);
			return dates.isWithinDays(blogDate, 15);
		}

		return data.posts.some((blog) => datePredicate(blog));
	}
</script>

<Background></Background>
<div class="container mx-auto w-full lg:w-[70%] font-inter px-2 md:px-0 mb-8">
	<nav
		class="flex justify-content-center top-0 z-50 py-2 mb-12 font-bold font-inter bg-transparent text-platinum justify-center"
	>
		<div class="flex flex-row text-1xl md:text-2xl w-full mx-auto">
			<NavLink href="/">🏡 Duston's Page</NavLink>
			<div class="mr-0 ml-auto flex flex-row gap-5">
				<div class="flex flex-row">
					<NavLink href="/blog">{'Blog'}</NavLink>
					{#if hasNewBlog()}
						<div class="translate-x-[-8px]">
							<NewFlag></NewFlag>
						</div>
					{/if}
				</div>
				<NavLink href="/projects">{'Projects'}</NavLink>
			</div>
		</div>
	</nav>
	<slot class="relative flex flex-col no-x-scroll"></slot>
</div>
