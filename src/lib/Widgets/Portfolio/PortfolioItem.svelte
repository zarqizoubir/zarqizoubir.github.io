<script lang="ts">
	export let imgSrc: string;
	export let href: string;
	export let filter: string;
</script>

<div class="col-lg-4 col-md-6 portfolio-item filter-{filter}">
	<div class="portfolio-wrap">
		<img src={imgSrc} class="img-fluid" alt="" />
		<div class="portfolio-links">
			<a href={imgSrc} data-gallery="portfolioGallery" class="portfolio-lightbox" title="App 1"
				><i class="bx bx-plus" /></a
			>
			<a {href} title="More Details"><i class="bx bx-link" /></a>
		</div>
	</div>
</div>
