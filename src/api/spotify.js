import SpotifyWebApi from 'spotify-web-api-js';
import { creds } from './credentials';
import { loginScopes } from './scopes'; 
import { userInfo } from '../stores';
import { get } from 'svelte/store';

const spotifyApi = new SpotifyWebApi();

export function login() {
    let loginURL = `https://accounts.spotify.com/authorize?client_id=${creds.clientId}&redirect_uri=${encodeURIComponent(creds.redirectURI)}&scope=${encodeURIComponent(loginScopes.join(' '))}&response_type=token`;
    let width = 450,
        height = 730,
        left = (screen.width / 2) - (width / 2),
        top = (screen.height / 2) - (height / 2);
    
    window.addEventListener('message', function(event) {
        let hash = JSON.parse(event.data);
        if (hash.type == 'access_token') {
            setAccessToken(hash.access_token);
        }
    }, false);
        
    window.open(loginURL,
        'Spotify',
        `menubar=no,location=no,resizable=no,scrollbars=no,status=no, width=${width}, height=${height}, top=${top}, left=${left}`
    );
}

function setAccessToken(token) {
    spotifyApi.setAccessToken(token);
    getUserInfo();
}

function getUserInfo() {
    spotifyApi.getMe((err, data) => {
        if (err) {
            console.error(err);
        }
        if (data) {
            userInfo.set(data);
        }
    });
}