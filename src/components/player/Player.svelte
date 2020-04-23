<script>
    import CurrentSong from './CurrentSong.svelte';
    import PlayerControls from './PlayerControls.svelte';
    import DeviceControls from './DeviceControls.svelte';
    import { userLoggedIn } from '../../stores.js';
</script>

<style type="text/scss">
	.player {
        grid-area: player;
        background-color: #282828;
        color: #cccccc;
        display: grid;
        grid-template-columns: [currentsong] 1fr [playercontrols] 3fr [devicecontrols] 1fr;
        align-items: center;
    }
</style>

<div class="player">
    {#if $userLoggedIn}
        <CurrentSong />
        <PlayerControls />
        <DeviceControls />
    {/if}
</div>