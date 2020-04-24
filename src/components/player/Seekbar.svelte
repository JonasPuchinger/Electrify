<script>
    import { onMount } from 'svelte';

    export let min;
    export let max;
    export let step;
    export let value;
    export let width;

    let inputEl;

    onMount(async () => {
        inputEl.style.width = width;
		setProgress(value);
	});

    function setProgress(newValue) {
        let val = (inputEl.value - inputEl.min) / (inputEl.max - inputEl.min);
        let percent = val * 100;

        inputEl.style.backgroundImage = 
            '-webkit-gradient(linear, left top, right top, ' +
            'color-stop(' + percent + '%, #a91145), ' +
            'color-stop(' + percent + '%, #d3d3d3)' +
            ')';
    }
</script>

<style type="text/scss">
    input {
        -webkit-appearance: none;
        appearance: none;
        height: 3px;
        background-image: -webkit-gradient(linear,
            left top, 
            right top, 
            color-stop(15%, #a91145),
            color-stop(15%, #d3d3d3));
        outline: none;
        opacity: 0.7;
        -webkit-transition: .2s;
        transition: opacity .2s;

        &:hover, &:active {
            opacity: 1;
        }
    }

    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        border-radius: 5em;
        width: 10px;
        height: 10px;
        background: #d3d3d3;
    }
</style>

<input type="range" 
    bind:this={inputEl}
    min={min}
    max={max}
    step={step}
    bind:value={value}
    on:mousemove={setProgress}
    on:input={setProgress}
>