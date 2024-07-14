<script>
	import '../app.css';
	import '../syntax-highlight.css';
	import NavLink from '$lib/components/NavLink.svelte';
	import Background from '$lib/components/Background.svelte';
</script>

<Background></Background>
<nav
	class="flex justify-content-center sticky top-0 z-50 px-[10%] w-full py-3 font-bold font-inter bg-blackalpha text-platinum justify-center"
>
	<div class="flex flex-row text-1xl md:text-2xl w-full mx-auto">
		<NavLink href="/">🏡 Duston's Page</NavLink>
		<!-- <a class="active:text-black border-b-[3px] border-pictonblue" href="/">🏡 Duston's Page</a> -->
		<div class="mr-0 ml-auto flex flex-row gap-5">
			<NavLink href="/blog">{'Blog'}</NavLink>
			<NavLink href="/projects">{'Projects'}</NavLink>
		</div>
	</div>
</nav>
<slot class="relative flex flex-col no-x-scroll"></slot>
