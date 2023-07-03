<script lang="ts">
	import HireUsOptionB from '$lib/widgets/HireUsOptionB.svelte';
	import HireUsOptionA from '$lib/widgets/HireUsOptionA.svelte';

	let knewledge_A = ['Svelte JS', 'Django', 'Web Development'];
	let knewledge_B = ['Linux', 'Github', 'Javascript'];
</script>

<li class="l-section section">
	<div class="hire">
		<h2>What are you interessted about ?</h2>
		<form class="work-request">
			<div class="work-request--options">
				<HireUsOptionA options={knewledge_A} />
				<HireUsOptionB options={knewledge_B} />
			</div>
			<div class="work-request--information">
				<div class="information-name">
					<input style="font-size: 20px;" id="name" type="text" spellcheck="false" />
					<label for="name">Name</label>
				</div>
				<div class="information-email">
					<input style="font-size: 20px;" id="email" type="email" spellcheck="false" />
					<label for="email">Email</label>
				</div>
			</div>
			<input type="submit" value="Send Request" />
		</form>
	</div>
</li>
