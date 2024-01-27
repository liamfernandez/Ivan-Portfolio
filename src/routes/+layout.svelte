<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	import { page } from '$app/stores';
</script>

<NavBar currentPage={$page.url.pathname} />
<slot />
