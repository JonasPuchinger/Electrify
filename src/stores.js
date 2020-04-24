import { writable, derived } from 'svelte/store';

export const hamburgerMenuClosed = writable(true);

export const userInfo = writable({});

export const userLoggedIn = derived(userInfo, $userInfo => $userInfo.hasOwnProperty('display_name'));