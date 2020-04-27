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
        grid-template-columns: [hamburger] minmax(150px, 1fr) [search] minmax(200px, 4fr) [profiledropdown] minmax(350px, 4.5fr) [windowcontrols]  minmax(100px, 0.5fr);
        align-items: center;

        .drag-handler {
            width: 100%;
            height: 2em;
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10;
            -webkit-app-region: drag;
        }
        
        > * {
            box-sizing: content-box !important;
        }
    }
</style>

<div class="titlebar">
    <div class="drag-handler"></div>
    <Hamburger />
    <Search />
    <ProfileDropdown />
    <WindowControls />
</div>