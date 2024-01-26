<script lang="ts">
	const name = 'Iván Ruiz-Hernández';

	export let currentPage: string;

	const bannerMap = {
		'/': 'HOME',
		'/research': 'RESEARCH',
		'/teaching': 'TEACHING',
		'/resume': 'CV',
		'/contact': 'CONTACT'
	};
</script>

<nav class="w-full font-myanmar flex justify-between items-center flex-row pt-10 px-16">
	<a class="text-[1.45rem]" href="/">
		<span class="flex flex-row items-center">
			<span class="">IV</span>
			<span class="text-[1.4rem]">Á</span>
			<span class="">N</span>
		</span>
		<span class="flex flex-row items-center">
			<span class="">RUIZ-HERN</span>
			<span class="text-[1.4rem]">Á</span>
			<span class="">NDEZ</span>
		</span>
	</a>
	<ul class="flex flex-row gap-10 text-lg">
		<li><a href="/research">RESEARCH</a></li>
		<li><a href="/teaching">TEACHING</a></li>
		<li><a href="/resume">CV</a></li>
		<li><a href="/contact">CONTACT</a></li>
	</ul>
</nav>
