<script>
    import { userLoggedIn } from '../../stores.js';
</script>

<style  type="text/scss">
    #profile-dropdown {
        grid-column: profiledropdown;
        padding-right: 2em;
        display: flex;
        justify-content: flex-end;
    }
</style>

<div id="profile-dropdown">
    {#if $userLoggedIn}
        <img src="" alt="Profile Picture">
        <span>Username</span>
    {:else}
        <p>Not logged in</p>   
    {/if}
</div>