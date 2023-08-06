<script lang="ts">
	import Piano from '$lib/piano.svelte';
	import * as Tone from 'tone';
	let init = false;
</script>

<h1>Tonality - Para Dani</h1>
{#if !init}
	<button
		on:click={async () => {
			await Tone.start();
			init = true;
		}}>Start</button
	>
{/if}

{#if init}
	<Piano />
{/if}
