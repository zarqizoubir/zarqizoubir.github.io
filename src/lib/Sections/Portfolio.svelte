<script>
	import { PortfolioHeader, PortfolioFilter, PortfolioItem } from '$lib/Widgets/Portfolio';

	const items = [
		{
			imgSrc: 'projects_assets/django-docme.png',
			href: 'https://zarqizoubir.github.io/django-docme',
			filter: 'package'
		},
		{
			imgSrc: 'projects_assets/pink-svelte.png',
			href: 'https://zarqizoubir.github.io/pink-svelte',
			filter: 'package'
		}
	];

	const filters = [{ name: 'Packages', filter: 'package' }];
</script>

<section id="portfolio" class="portfolio section-bg">
	<div class="container">
		<PortfolioHeader />

		<PortfolioFilter {filters} />

		<div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
			{#each items as item}
				<PortfolioItem {...item} />
			{/each}
		</div>
	</div>
</section>
