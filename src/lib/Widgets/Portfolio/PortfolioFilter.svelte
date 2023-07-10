<script lang="ts">
	export let filters: any;
</script>

<div class="row" data-aos="fade-up">
	<div class="col-lg-12 d-flex justify-content-center">
		<ul id="portfolio-flters">
			<li data-filter="*" class="filter-active">All</li>
			{#each filters as filter}
				<li data-filter=".filter-{filter.filter}">{filter.name}</li>
			{/each}
		</ul>
	</div>
</div>
