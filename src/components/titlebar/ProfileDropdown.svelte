<script>
    import { userLoggedIn } from '../../stores.js';
</script>

<style  type="text/scss">
    #profile-dropdown {
        grid-column: profiledropdown;
        padding-right: 2em;
        display: flex;
        justify-content: flex-end;
        align-items: center;

        .profile-picture {
            border-radius: 5em;
            margin-right: 0.5em;
        }
    }
</style>

<div id="profile-dropdown">
    {#if $userLoggedIn}
        <img class="profile-picture" src="https://via.placeholder.com/20x20?text=Profile+Picture" alt="Profile Picture">
        <span>Username</span>
    {:else}
        <p>Not logged in</p>   
    {/if}
</div>