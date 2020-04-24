import { writable } from 'svelte/store';

export const hamburgerMenuClosed = writable(true);

export const userLoggedIn = writable(false);

export const userInfo = writable(false);