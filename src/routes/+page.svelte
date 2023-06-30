<script lang="ts">
	import HireUs from '$lib/Sections/HireUs.svelte';
	import Contact from '$lib/Sections/Contact.svelte';
	import About from '$lib/Sections/About.svelte';
	import Works from '$lib/Sections/Works.svelte';
	import Home from '$lib/Sections/Home.svelte';
</script>

<svelte:head>
  <title>
     Ezzoubair | Portfolio Site
  </title>
</svelte:head>



<ul class="l-main-content main-content">
  <Home/>
  <Works/>
  <About/>
  <Contact/>
  <HireUs/>
</ul>