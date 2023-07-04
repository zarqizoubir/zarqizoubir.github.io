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

			<!-- <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
				<div class="progress">
					<span class="skill">PHP <i class="val">80%</i></span>
					<div class="progress-bar-wrap">
						<div
							class="progress-bar"
							role="progressbar"
							aria-valuenow="80"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>

				<div class="progress">
					<span class="skill">WordPress/CMS <i class="val">90%</i></span>
					<div class="progress-bar-wrap">
						<div
							class="progress-bar"
							role="progressbar"
							aria-valuenow="90"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>

				<div class="progress">
					<span class="skill">Photoshop <i class="val">55%</i></span>
					<div class="progress-bar-wrap">
						<div
							class="progress-bar"
							role="progressbar"
							aria-valuenow="55"
							aria-valuemin="0"
							aria-valuemax="100"
						/>
					</div>
				</div>
			</div> -->
		</div>
	</div>
</section>
