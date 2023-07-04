<script lang="ts">
	import Footer from './../lib/Components/Footer.svelte';
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
<Footer />

<ReturnToUp />
