<script lang="ts">
	import { Footer, Navbar } from '$lib/Components';
	import { Hero } from '$lib/Sections';
	import ReturnToUp from '$lib/Widgets/ReturnToUp.svelte';
	import '../../app.postcss';
</script>

<Navbar />

<Hero />

<main id="main">
	<slot />
</main>
<Footer />

<ReturnToUp />
