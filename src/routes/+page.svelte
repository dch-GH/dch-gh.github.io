<script lang="ts">
	import Background from '$lib/components/Background.svelte';
	import StudioMinus from '$lib/components/Icons/StudioMinus.svelte';
	import InfoCard from '$lib/components/InfoCard.svelte';
	import LinkCluster from '$lib/components/LinkCluster.svelte';
</script>

<div
	class="container flex flex-col justify-center mx-auto mb-2 mt-10 align-center font-inter font-bold"
>
	<div class="font-inter container w-[75%] self-center">
		<div class="container flex flex-row align-middle mb-5 items-center">
			<!-- svelte-ignore a11y-img-redundant-alt -->
			<a
				class="self-center hover:scale-110 ease-in-out duration-200"
				target="_blank"
				href="https://windows96.bandcamp.com/album/dated-new-aesthetic"
			>
				<img
					class="rounded-lg"
					src="https://cdn.discordapp.com/avatars/703715865178407102/d04529657c173706f2ea2105033e8783.png?size=128"
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
			<a
				class="self-center hover:scale-[1.25] ease-in-out duration-200"
				target="_blank"
				href="https://studiominus.nl/"
			>
				<StudioMinus scale="10rem" />
			</a>
			<h1 class="mb-2 text-5xl sm:text-5xl md:text-6xl font-bold">Current Position</h1>
			<p class="text-2xl">Programmer</p>
			<p class="text-2xl">
				Project: <a
					class="text-silverlakeblue hover:text-prussianblue"
					target="_blank"
					href="https://studiominus.nl/madness-interactive-reloaded.html"
					>Madness Interactive Reloaded</a
				>
			</p>
		</InfoCard>
	</div>
</div>
