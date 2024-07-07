<script lang="ts">
	import { page } from '$app/stores';
	export let href: string = '';
</script>

<a {href} class={href === $page.url.pathname ? 'border-b-[3px] border-pictonblue' : ''}>
	<slot />
</a>
