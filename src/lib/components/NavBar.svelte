<script lang="ts">
	const name = 'Iván Ruiz-Hernández';

	export let currentPage: string;

	const bannerMap = new Map<string, string>([
		['/', 'home.png'],
		['/research', 'research.png'],
		['/teaching', 'teaching.png'],
		['/resume', 'cv.png'],
		['/contact', 'contact.png']
	]);

	const imageSource = `/banners/${bannerMap.get(currentPage)}`;
</script>

<!-- <img class=" -z-10 w-full absolute" alt="scenic view of a city in mexico" src={imageSource} /> -->
<div class="relative">
	<nav
		class=" z-10 w-full absolute text-white font-myanmar flex justify-between items-center flex-row pt-10 px-16"
	>
		<a class="text-[1.65rem] tracking-widest font-light" href="/">
			<span class="flex flex-row items-center">
				<span class="">IV</span>
				<span class="text-[1.6rem]">Á</span>
				<span class="">N</span>
			</span>
			<span class="flex flex-row items-center">
				<span class="">RUIZ-HERN</span>
				<span class="text-[1.6rem]">Á</span>
				<span class="">NDEZ</span>
			</span>
		</a>
		<ul class="flex flex-row gap-20 text-[1.3rem]">
			<li><a href="/research">RESEARCH</a></li>
			<li><a href="/teaching">TEACHING</a></li>
			<li><a href="/resume">CV</a></li>
			<li><a href="/contact">CONTACT</a></li>
		</ul>
	</nav>
</div>
