<script>
    import Library from './Library.svelte';
    import Playlists from './Playlists.svelte';
    import { userLoggedIn } from '../../stores.js';
</script>

<style type="text/scss">
	.sidebar {
        grid-area: sidebar;
        min-width: 150px;
        background-color: #050306;
        color: #cccccc;
        padding-left: 1em;
    }
</style>

<div class="sidebar">
    {#if $userLoggedIn}
        <Library />
        <Playlists />
    {/if}
</div>
