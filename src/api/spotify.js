import SpotifyWebApi from 'spotify-web-api-js';
import { creds } from './credentials';
import { loginScopes } from './scopes'; 

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
        `menubar=yes,location=yes,resizable=yes,scrollbars=no,status=yes, width=${width}, height=${height}, top=${top}, left=${left}`
    );
}

function setAccessToken(token) {
    spotifyApi.setAccessToken(token);
    getUserInfo();
}

function getUserInfo() {
    spotifyApi.getMe((error, data) => {
        if(error) {
            return
        }
        if (data) {
            logUserInfo(data);
        }
    });
}

export function logUserInfo(data) {
    console.log(spotifyApi.getAccessToken());
    console.log(data);
}