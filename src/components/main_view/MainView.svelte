<script>
    import { userLoggedIn, userInfo } from '../../stores.js';
    import { login } from '../../api/spotify.js';
</script>

<style type="text/scss">
	.main-view {
        grid-area: main;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        button {
            color: #ffffff;
            background-color: #A91145;
            outline: none;
            border: hidden;
            border-radius: 1em;
            padding: 1em;

            &:hover {
                transform: scale(1.1);
            }
        }

        .profile-picture {
            width: 100px;
            height: 100px;
            border-radius: 5em;
            margin-bottom: 0.5em;
        }
    }
</style>

<div class="main-view">
    {#if $userLoggedIn}
        <img class="profile-picture" src={$userInfo.images[0].url} alt="Profile Picture">
        <span>Welcome back, {$userInfo.display_name}!</span>
    {:else}
        <img src="./icon.png" alt="Electrify Logo">
        <h1>Electrify</h1>
        <button on:click={login}>Log in</button>
    {/if}
</div>