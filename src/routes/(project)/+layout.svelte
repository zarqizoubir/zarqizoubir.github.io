<script lang="ts">
	import { Footer, Navbar } from '$lib/Components';
	import ReturnToUp from '$lib/Widgets/ReturnToUp.svelte';
	import '../../app.postcss';
</script>

<Navbar />

<main id="main">
	<slot />
</main>
<Footer />

<ReturnToUp />
