<script>
    import { userLoggedIn } from '../../stores.js';
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
    }
</style>

<div class="main-view">
    <h1>Electrify</h1>
    {#if $userLoggedIn}
        <img src="" alt="Profile Picture">
        <span>Welcome back, Username</span>
    {:else}
        <button>Log in</button>
    {/if}
</div>