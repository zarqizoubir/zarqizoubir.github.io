<script>
	import ContactHeader from '$lib/Widgets/Contact/ContactHeader.svelte';
	import ContactForm from '$lib/Widgets/Contact/ContactForm.svelte';
	import ContactInfo from '$lib/Widgets/Contact/ContactInfo.svelte';
</script>

<section id="contact" class="contact">
	<div class="container">
		<ContactHeader />

		<div class="row" data-aos="fade-in">
			<ContactInfo />

			<ContactForm />
		</div>
	</div>
</section>
