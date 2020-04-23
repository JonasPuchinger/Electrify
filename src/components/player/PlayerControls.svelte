<script>
    import Seekbar from './Seekbar.svelte';
    import Icon from 'svelte-awesome';
    import { random, stepBackward, play, pause, stepForward, retweet } from 'svelte-awesome/icons';

    const seekbarSettings = {
        min: 0,
        max: 1000,
        step: 1,
        value: 0,
        width: '75%'
    }
</script>

<style type="text/scss">
    #player-controls {
        grid-area: playercontrols;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        .buttons {
            width: 40%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
        }

        .seekbar {
            width: 90%;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
        }
    }
</style>

<div id="player-controls">
    <div class="buttons">
        <Icon data={random} />
        <Icon data={stepBackward} />
        <Icon data={play} />
        <Icon data={stepForward} />
        <Icon data={retweet} />
    </div>
    <div class="seekbar">
        <caption>00:00</caption>
        <Seekbar {...seekbarSettings} />
        <caption>00:00</caption>
    </div>
</div>