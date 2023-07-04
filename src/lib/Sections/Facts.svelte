<script>
	import FactsItem from './../Widgets/Facts/FactsItem.svelte';
	import FactsHeader from './../Widgets/Facts/FactsHeader.svelte';

	const factsFeed = [
		{ title: 'Happy Clients', headline: ' consequuntur quae', start: 0, end: 232 },
		{ title: 'Projects', headline: ' adipisci atque cum quia aut', start: 0, end: 521 },
		{ title: 'Hours of Support', headline: ' aut commodi quaerat', start: 0, end: 1453 },
		{ title: 'Hard Workers', headline: ' rerum asperiores dolor', start: 0, end: 32 }
	];
</script>

<section id="facts" class="facts">
	<div class="container">
		<FactsHeader />

		<div class="row no-gutters">
			{#each factsFeed as feed}
				<FactsItem {...feed} />
			{/each}
		</div>
	</div>
</section>
