<script>
    import Hamburger from './Hamburger.svelte';
    import Search from './Search.svelte';
    import ProfileDropdown from './ProfileDropdown.svelte';
    import WindowControls from './WindowControls.svelte';
</script>

<style type="text/scss">
    .titlebar {
        grid-area: titlebar;
        background-color: #050306;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>

<div class="titlebar">
    <Hamburger />
    <Search />
    <ProfileDropdown />
    <WindowControls />
</div>