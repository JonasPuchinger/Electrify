<script>
    import Icon from 'svelte-awesome';
    import { square, times, minus } from 'svelte-awesome/icons';
</script>

<style type="text/scss">
    .controls {
        display: flex;
        flex-direction: row;
        align-items: center;
    }
</style>

<div class="controls">
    <Icon data={minus}></Icon>
    <Icon data={square}></Icon>
    <Icon data={times}></Icon>
</div>