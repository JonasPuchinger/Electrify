<script>
    import { userLoggedIn } from '../../stores.js';
    import { login, logUserInfo } from '../../api/spotify.js';

    function loginUser() {
        login();
        userLoggedIn.set(true);
    }
    
    function logoutUser() {
        logUserInfo();
    }
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
            border-radius: 5em;
            margin-bottom: 0.5em;
        }
    }
</style>

<div class="main-view">
    <img src="./icon.png" alt="Electrify Logo">
    <h1>Electrify</h1>
    {#if $userLoggedIn}
        <img class="profile-picture" src="https://via.placeholder.com/50x50?text=Profile+Picture" alt="Profile Picture">
        <span>Welcome back, Username</span>
        <button on:click={logoutUser}>Log out</button>
    {:else}
        <button on:click={loginUser}>Log in</button>
    {/if}
</div>