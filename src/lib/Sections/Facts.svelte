<script>
	import FactsItem from './../Widgets/Facts/FactsItem.svelte';
	import FactsHeader from './../Widgets/Facts/FactsHeader.svelte';

	const factsFeed = [
		{
			title: 'Happy Clients',
			headline: ' Just For now',
			start: 0,
			end: 1,
			icon: 'bi bi-emoji-smile'
		},
		{
			title: 'Projects',
			headline: ' I done a lot ',
			start: 0,
			end: 12,
			icon: 'bi bi-journal-richtext'
		},
		{
			title: 'Hours of Support',
			headline: ' aut commodi quaerat',
			start: 0,
			end: 0,
			icon: 'bi bi-headset'
		},
		{
			title: 'Hard Work',
			headline: ' rerum asperiores dolor',
			start: 0,
			end: 20,
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
