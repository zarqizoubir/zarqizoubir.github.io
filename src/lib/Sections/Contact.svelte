<script>
	import ContactForm from '$lib/Widgets/Contact/ContactForm.svelte';
	import ContactInfo from '$lib/Widgets/Contact/ContactInfo.svelte';
</script>

<section id="contact" class="contact">
	<div class="container">
		<div class="section-title">
			<h2>Contact</h2>
			<p>
				Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
				Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit
				alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
			</p>
		</div>

		<div class="row" data-aos="fade-in">
			<ContactInfo />

			<ContactForm />
		</div>
	</div>
</section>
