<script lang="ts">
	import { ResumeHeader, Sumary, Education, ProfessionalExperience } from '$lib/Widgets/Resume';
</script>

<section id="resume" class="resume">
	<div class="container">
		<ResumeHeader />

		<div class="row">
			<div class="col-lg-6" data-aos="fade-up">
				<Sumary />

				<Education />
			</div>
			<div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
				<ProfessionalExperience />
			</div>
		</div>
	</div>
</section>
