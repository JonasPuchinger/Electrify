<script>
    import Seekbar from './Seekbar.svelte';
    import Icon from 'svelte-awesome';
    import { list, music, desktop, volumeUp } from 'svelte-awesome/icons';

    const volumeSettings = {
        min: 0,
        max: 100,
        step: 1,
        value: 100,
        width: null
    }
</script>

<style type="text/scss">
    #device-controls {
        grid-area: devicecontrols;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
</style>

<div id="device-controls">
    <Icon data={list} />
    <Icon data={music} />
    <Icon data={desktop} />
    <Icon data={volumeUp} />
    <Seekbar {...volumeSettings} />
</div>