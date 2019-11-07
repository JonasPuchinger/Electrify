<script>
    import Icon from 'svelte-awesome';
    import { square, times, minus } from 'svelte-awesome/icons';
</script>

<style type="text/scss">
    #controls {
        grid-column: windowcontrols;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
</style>

<div id="controls">
    <Icon data={minus}></Icon>
    <Icon data={square}></Icon>
    <Icon data={times}></Icon>
</div>