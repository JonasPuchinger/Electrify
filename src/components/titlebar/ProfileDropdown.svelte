<script>
    import { userLoggedIn, userInfo } from '../../stores.js';
</script>

<style  type="text/scss">
    #profile-dropdown {
        grid-column: profiledropdown;
        padding-right: 2em;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .profile-picture {
            width: 30px;
            height: 30px;
            border-radius: 5em;
            margin-right: 0.5em;
        }
    }
</style>

<div id="profile-dropdown">
    {#if $userLoggedIn}
        <img class="profile-picture" src={$userInfo.images[0].url} alt="Profile Picture">
        <span>{$userInfo.display_name}</span>
    {:else}
        <p>Not logged in</p>   
    {/if}
</div>