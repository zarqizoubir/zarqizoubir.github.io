<script lang="ts">
	export let start = 0;
	export let end = 0;
	export let duration = 1;
	export let title: string;
	export let headline: string;
</script>

<div
	class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch"
	data-aos="fade-up"
	data-aos-delay="100"
>
	<div class="count-box">
		<i class="bi bi-journal-richtext" />
		<slot />
		<span
			data-purecounter-start={start}
			data-purecounter-end={end}
			data-purecounter-duration={duration}
			class="purecounter"
		/>
		<p><strong>{title}</strong>{headline}</p>
	</div>
</div>
