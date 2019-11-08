<script>
	import { onMount } from 'svelte';
	import { hamburgerMenuClosed } from './stores.js';

	import Titlebar from './components/titlebar/Titlebar.svelte';
	import Sidebar from './components/sidebar/Sidebar.svelte';
	import MainView from './components/main_view/Mainview.svelte';

	let hamburger = null;
	let hamburgerMenu = null;

    onMount(async () => {
		hamburger = document.getElementById("hamburger");
		hamburgerMenu = document.getElementById("hamburger-menu");
	});

	function handleAppClick(e) {
		if(!$hamburgerMenuClosed && e.target != hamburger && e.target != hamburgerMenu) {
			hamburgerMenuClosed.update(state => !state);
		}
	}
</script>

<style type="text/scss">
	.app {
		width: 100vw;
		height: 100vh;
		display: grid;
		grid-template-columns: minmax(150px, 1fr) 9fr;
  		grid-template-rows: 1fr 8.2fr 0.8fr;
		grid-template-areas: 
			"titlebar titlebar"
			"sidebar main"
			"player player";
	}
</style>

<div class="app" on:click={handleAppClick}>
	<Titlebar />
	<Sidebar />
	<MainView />
</div>