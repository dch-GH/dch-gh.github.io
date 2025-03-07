<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import StudioMinus from '$lib/components/Icons/StudioMinus.svelte';
	import InfoCard from '$lib/components/InfoCard.svelte';
	import LinkCluster from '$lib/components/LinkCluster.svelte';
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

	<InfoCard>
		<div>
			<h1 class="mb-2 text-3xl sm:text-5xl md:text-5xl font-bold">Current Position</h1>
			<p class="text-1xl sm:text-2xl">Programmer</p>
			<p class="text-1xl sm:text-2xl">
				Project: <a
					class="text-pictonblue hover:text-prussianblue"
					target="_blank"
					href="https://studiominus.nl/madness-interactive-reloaded.html"
					>Madness Interactive Reloaded</a
				>
			</p>
		</div>
		<div class="w-[1px] hidden lg:block bg-cerulean h-full"></div>
		<div class="block lg:hidden">
			<br />
			<hr />
		</div>
		<a
			class="w-fit mx-auto lg:mx-2 xl:mx-0 lg:justify-center scale-[1.2] md:scale-[1.35] md:hover:scale-[1.55] ease-in-out duration-200"
			target="_blank"
			href="https://studiominus.nl/"
		>
			<StudioMinus scale="10rem" />
		</a>
	</InfoCard>
</div>
