<script lang="ts">
	import ReturnToUp from '$lib/Widgets/ReturnToUp.svelte';
	import Hero from '$lib/Sections/Hero.svelte';
	import Navbar from '$lib/Components/Navbar.svelte';
	import '../app.postcss';
</script>

<Navbar />

<Hero />
<main id="main">
	<slot />
</main>

<ReturnToUp />
