<script lang="ts">
	import { assets } from '$app/paths';
	import bg from '$lib/assets/noise.png';
</script>

<div>
	<div
		class="fixed -left-10 -top-1 -z-20 w-[120%] h-[120%] brightness-[0.25] contrast-[85%]"
		style="background-image: linear-gradient(to top, skyblue 0%, black 75%);"
	></div>
	<div
		class="fixed bg-repeat w-[100%] h-[100%]"
		style="pointer-events: none;background: url({bg});"
	></div>
</div>

<!-- <div
	class="fixed -left-10 -top-1 -z-20 w-[120%] h-[120%] bg-cover bg-blackalpha blur-lg brightness-[0.25] contrast-[85%]"
	style="background-image: url({bg})"
></div> -->
