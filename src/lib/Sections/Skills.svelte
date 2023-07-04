<script>
	import SkillItem from './../Widgets/Skills/SkillItem.svelte';
	import SkillsHeader from './../Widgets/Skills/SkillsHeader.svelte';

	const skillsFeed = [
		[
			{ title: 'HTML', value: 100 },
			{ title: 'CSS', value: 80 },
			{ title: 'JAVASCRIPT', value: 80 },
			{ title: 'Svelte / SvelteKit', value: 70 }
		],
		[
			{ title: 'Python', value: 80 },
			{ title: 'Django / DjangoRestFramework', value: 70 },
			{ title: 'Github', value: 60 }
		]
	];
</script>

<section id="skills" class="skills section-bg">
	<div class="container">
		<SkillsHeader />

		<div class="row skills-content">
			{#each skillsFeed as Sfeed}
				<div class="col-lg-6" data-aos="fade-up">
					{#each Sfeed as feed}
						<SkillItem {...feed} />
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>
