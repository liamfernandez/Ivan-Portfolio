<script lang="ts">
	import Strings from '$lib/strings';
</script>

<svelte:head>
	<title>Iván Ruiz-Hernández | PhD Candidate</title>
</svelte:head>

<div
	style="background-image: url('/banners/home.png');"
	class="h-[19rem] w-full bg-cover bg-no-repeat"
/>

<section id="About Me" class="mb-6 mt-6 flex flex-col items-center font-bangala">
	<div class="max-w-[60rem]">
		<h1 class="text-center text-[2.75rem]">About Me</h1>
		<p class="mt-2 text-[1.35rem]">{Strings.about}</p>
	</div>
</section>

<img
	src="/banners/pink_wall.png"
	alt="pink wall with elaborate art"
	class=" max-h-[24rem] w-full object-cover"
/>

<section id="background" class="my-10 flex flex-col items-center font-bangala">
	<div class="flex max-w-[72rem] flex-row gap-12">
		<img class="object-cover" alt="headshot of Iván" src="/headshot.png" />
		<div class="flex flex-col text-[1.3rem]">
			<h1 class="text-[2.75rem]">Background</h1>
			<p class="mt-4">{Strings.background_one}</p>
			<p class="mt-16">{Strings.background_two}</p>
		</div>
	</div>
</section>

<div class=" flex w-full items-center justify-center">
	<span class=" mb-10 flex h-[2px] w-[96%] bg-[#1A1A1A] opacity-20" />
</div>

<section id="spotlight" class=" font-bangala">
	<h1 class="text-center text-[2.75rem] font-thin">Spotlight</h1>
</section>
