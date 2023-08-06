<script lang="ts">
	export let playAudio: (note: string) => void;
	export let octave: number;
</script>

<div class="keys">
	<button data-key="65" class="key" on:click={() => playAudio(`C${octave}`)} />
	<button data-key="87" class="key sharp" on:click={() => playAudio(`Cs${octave}`)} />
	<button data-key="83" class="key" on:click={() => playAudio(`D${octave}`)} />
	<button data-key="69" class="key sharp" on:click={() => playAudio(`Ds${octave}`)} />
	<button data-key="68" class="key" on:click={() => playAudio(`E${octave}`)} />
	<button data-key="70" class="key" on:click={() => playAudio(`F${octave}`)} />
	<button data-key="84" class="key sharp" on:click={() => playAudio(`Fs${octave}`)} />
	<button data-key="71" class="key" on:click={() => playAudio(`G${octave}`)} />
	<button data-key="89" class="key sharp" on:click={() => playAudio(`Gs${octave}`)} />
	<button data-key="72" class="key" on:click={() => playAudio(`A${octave}`)} />
	<button data-key="85" class="key sharp" on:click={() => playAudio(`As${octave}`)} />
	<button data-key="74" class="key" on:click={() => playAudio(`B${octave}`)} />
</div>

<style>
	.keys {
		display: block;
		width: 100%;
		height: 350px;
		max-width: 500px;
		position: relative;
		margin: 0;
		cursor: none;
	}

	.key {
		position: relative;
		border: 4px solid black;
		border-radius: 0.5rem;
		transition: all 0.07s ease;
		display: block;
		box-sizing: border-box;
		z-index: 2;
	}

	.key:not(.sharp) {
		float: left;
		width: 14.28%;
		height: 100%;
		background: rgba(255, 255, 255, 0.8);
	}

	.key.sharp {
		position: absolute;
		width: 8.5%;
		height: 60%;
		background: #000;
		color: #eee;
		top: 0;
		z-index: 3;
	}

	.key[data-key='87'] {
		left: 10%;
	}

	.key[data-key='69'] {
		left: 24.5%;
	}

	.key[data-key='84'] {
		left: 53%;
	}

	.key[data-key='89'] {
		left: 67%;
	}

	.key[data-key='85'] {
		left: 81.5%;
	}
</style>
