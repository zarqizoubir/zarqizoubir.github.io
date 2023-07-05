<script>
	import { PortfolioHeader, PortfolioFilter, PortfolioItem } from '$lib/Widgets/Portfolio';

	const items = [
		{ imgSrc: 'assets/img/portfolio/portfolio-1.jpg', href: '/', filter: 'app' },
		{ imgSrc: 'assets/img/portfolio/portfolio-2.jpg', href: '/', filter: 'web' },
		{ imgSrc: 'assets/img/portfolio/portfolio-3.jpg', href: '/', filter: 'app' },
		{ imgSrc: 'assets/img/portfolio/portfolio-4.jpg', href: '/', filter: 'card' },
		{ imgSrc: 'assets/img/portfolio/portfolio-5.jpg', href: '/', filter: 'web' },
		{ imgSrc: 'assets/img/portfolio/portfolio-6.jpg', href: '/', filter: 'app' },
		{ imgSrc: 'assets/img/portfolio/portfolio-7.jpg', href: '/', filter: 'card' },
		{ imgSrc: 'assets/img/portfolio/portfolio-8.jpg', href: '/', filter: 'card' },
		{ imgSrc: 'assets/img/portfolio/portfolio-9.jpg', href: '/', filter: 'web' }
	];
</script>

<section id="portfolio" class="portfolio section-bg">
	<div class="container">
		<PortfolioHeader />

		<PortfolioFilter />

		<div class="row portfolio-container" data-aos="fade-up" data-aos-delay="100">
			{#each items as item}
				<PortfolioItem {...item} />
			{/each}
		</div>
	</div>
</section>
