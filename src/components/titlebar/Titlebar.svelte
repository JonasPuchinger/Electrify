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
        display: grid;
        grid-template-columns: [hamburger] minmax(150px, 10%) [search] minmax(200px, 40%) [profiledropdown] minmax(350px, 45%) [windowcontrols]  minmax(100px, 5%);
        align-items: center;
        
        > * {
            box-sizing: content-box !important;
        }
    }
</style>

<div class="titlebar">
    <Hamburger />
    <Search />
    <ProfileDropdown />
    <WindowControls />
</div>