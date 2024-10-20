<script lang="ts">
	import { page } from '$app/stores';
	export let href: string = '';
</script>

<a {href} class={href === $page.url.pathname ? 'text-pictonblue' : 'text-platinum'}>
	<slot />
</a>
