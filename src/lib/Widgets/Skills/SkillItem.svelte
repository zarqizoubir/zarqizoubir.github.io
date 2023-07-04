<script lang="ts">
	export let title: string;
	export let value = 100;
	export let min = 0;
	export let max = 100;
</script>

<div class="progress">
	<span class="skill">🔴 <i class="mx-1" /> {title} <i class="val">{value}%</i></span>
	<div class="progress-bar-wrap">
		<div
			class="progress-bar"
			role="progressbar"
			aria-valuenow={value}
			aria-valuemin={min}
			aria-valuemax={max}
		/>
	</div>
</div>
