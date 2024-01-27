<script>
	import NavBar from '$lib/components/NavBar.svelte';
	import '../app.css';
	import { page } from '$app/stores';
	import Strings from '$lib/strings';
</script>

<NavBar currentPage={$page.url.pathname} />
<slot />
<footer>
	<div
		class="flex h-[6rem] w-full items-center justify-center bg-black text-center font-bangala text-lg font-light text-white"
	>
		<p>{Strings.rights_reserved}</p>
	</div>
</footer>
