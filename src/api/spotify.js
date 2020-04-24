import SpotifyWebApi from 'spotify-web-api-js';
import { client_id, client_secret } from './credentials';
import loginScopes from './scopes'; 
import { userLoggedIn } from '../stores.js';

const spotifyApi = new SpotifyWebApi();

function login() {
    setAccessToken()
    userLoggedIn.update(state => true);
}

function setAccessToken(token) {
    spotifyApi.setAccessToken(token);
}