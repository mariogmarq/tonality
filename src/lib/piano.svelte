<script lang="ts">
	import Scale from '$lib/piano/scale.svelte';

	import * as Tone from 'tone';
	import { onMount } from 'svelte';
	import { pickRandomNote, pickDominantFromNote } from '$lib/piano/dominants';

	let note = pickRandomNote();
	let showSolution = false;
	let canShowSolution = false;
	let synth: Tone.PolySynth | null = null;
	let notes: string[] = [];
	$: {
		notes = pickDominantFromNote(note).map((note, i) => {
			if (note === 'C' && i !== 0) return note + '5';
			return note + '4';
		});

		showSolution = false;
		canShowSolution = false;
	}

	onMount(() => {
		synth = new Tone.PolySynth(Tone.Synth).toDestination();
	});

	function playNotes() {
		const now = Tone.now();
		notes.forEach((note, i) => {
			playAudio(note, now + i * 0.5);
		});

		canShowSolution = true;
	}

	function playAudio(note: string, time = Tone.now()) {
		if (synth === null) return;
		if (note.includes('s')) return;

		synth.triggerAttackRelease(note, '0.5', time);
	}
</script>

<div>
	{#if showSolution}
		<div class="note">
			{notes.reduce((acc, note) => {
				return acc + ' ' + note;
			}, '')}
		</div>
	{/if}

	<div class="buttons">
		<button on:click={() => (showSolution = true)} disabled={!canShowSolution}>Show solution</button
		>

		<button on:click={() => playNotes()}>Play Notes</button>
		<button on:click={() => (note = pickRandomNote())}>New</button>
	</div>
	<div class="piano">
		<Scale {playAudio} octave={3} />
		<Scale {playAudio} octave={4} />
		<Scale {playAudio} octave={5} />
	</div>
</div>

<style>
	.note {
		font-size: 2rem;
		text-align: center;
		margin: 1rem;
		height: 3rem;
		display: block;
	}
	.piano {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 0;
	}

	.buttons {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}

	button {
		margin: 0.5rem;
	}
</style>
