<script>
    import { onMount } from 'svelte';
    import { hamburgerMenuClosed } from '../../stores.js';

    let menu = null;

    onMount(async () => {
		menu = document.getElementById("hamburger-menu");
	});

    function handleHamburgerClick() {
        hamburgerMenuClosed.update(state => !state);
    }
</script>

<style type="text/scss">
	#hamburger {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: row;
        padding: 1em 0;
    }

    #hamburger:hover .dot {
        background-color: #ffffff;
    }

    .dot {
        width: 0.3rem;
        height: 0.3rem;
        background-color: #cccccc;
        display: block;
        border-radius: 50%;
        margin: 0.2em;
    }

    #hamburger-menu {
        position: absolute;
        width: 4em;
        height: auto;
        background-color: #181A1B;
        display: flex;
        flex-direction: column;
        padding: 1em;
        z-index: 10;
        border: 1px solid #cccccc;
    }

    .menu-entry {
        width: 100%;
    }

    #hamburger-menu .menu-entry:hover {
        color: #ffffff;
        cursor: default;
    }

    .white-bg {
        background-color: #ffffff;
    }

    .menu-closed {
        display: none !important;
    }
</style>

<div id="hamburger" on:click={handleHamburgerClick}>
    <div class="dot {!$hamburgerMenuClosed ? 'white-bg' : ''}"></div>
    <div class="dot {!$hamburgerMenuClosed ? 'white-bg' : ''}"></div>
    <div class="dot {!$hamburgerMenuClosed ? 'white-bg' : ''}"></div>
</div>
<div id="hamburger-menu" class="{$hamburgerMenuClosed ? 'menu-closed' : ''}">
    <div class="menu-entry">File</div>
    <div class="menu-entry">Edit</div>
    <div class="menu-entry">Playback</div>
</div>
