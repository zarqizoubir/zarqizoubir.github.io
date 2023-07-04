<script>
	import FactsItem from './../Widgets/Facts/FactsItem.svelte';
	import FactsHeader from './../Widgets/Facts/FactsHeader.svelte';

	const factsFeed = [
		{
			title: 'Happy Clients',
			headline: ' consequuntur quae',
			start: 0,
			end: 232,
			icon: 'bi bi-emoji-smile'
		},
		{
			title: 'Projects',
			headline: ' adipisci atque cum quia aut',
			start: 0,
			end: 521,
			icon: 'bi bi-journal-richtext'
		},
		{
			title: 'Hours of Support',
			headline: ' aut commodi quaerat',
			start: 0,
			end: 1453,
			icon: 'bi bi-headset'
		},
		{
			title: 'Hard Workers',
			headline: ' rerum asperiores dolor',
			start: 0,
			end: 32,
			icon: 'bi bi-people'
		}
	];
</script>

<section id="facts" class="facts">
	<div class="container">
		<FactsHeader />

		<div class="row no-gutters">
			{#each factsFeed as feed}
				<FactsItem {...feed}>
					<i class={feed.icon} />
				</FactsItem>
			{/each}
		</div>
	</div>
</section>
