<script>
    const { remote } = require('electron');
    import Icon from 'svelte-awesome';
    import { windowMinimize, windowMaximize, times } from 'svelte-awesome/icons';

    function onMinimize() {
        remote.BrowserWindow.getFocusedWindow().minimize();
    }
    
    function onMaximize() {
        remote.BrowserWindow.getFocusedWindow().maximize();
    }
    
    function onClose() {
        remote.BrowserWindow.getFocusedWindow().close();
    }
</script>

<style type="text/scss">
    #controls {
        grid-column: windowcontrols;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;

        .control {
            padding: 0.5em;

            &:hover {
                background: #181A1B;
            }
        }
    }
</style>

<div id="controls">
    <div class="control" on:click={onMinimize}><Icon data={windowMinimize} /></div>
    <div class="control" on:click={onMaximize}><Icon data={windowMaximize} /></div>
    <div class="control" on:click={onClose}><Icon data={times} /></div>
</div>