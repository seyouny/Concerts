// import React from 'react';
// import {Helmet} from "react-helmet";
// import ScriptTag from 'react-script-tag';
// import ImportScript from './script.js';
// export default function Player() {
//     // <ScriptTag type="text/javascript" src="https://sdk.scdn.co/spotify-player.js" />
//     ImportScript("https://sdk.scdn.co/spotify-player.js");

//     window.onSpotifyWebPlaybackSDKReady = () => {
//         const token = '[My Spotify Web API access token]';
//         const player = new Spotify.Player({
//             name: 'Web Playback SDK Quick Start Player',
//             getOAuthToken: cb => { cb(token); }
//         });

//         // Error handling
//         player.addListener('initialization_error', ({ message }) => { console.error(message); });
//         player.addListener('authentication_error', ({ message }) => { console.error(message); });
//         player.addListener('account_error', ({ message }) => { console.error(message); });
//         player.addListener('playback_error', ({ message }) => { console.error(message); });

//         // Playback status updates
//         player.addListener('player_state_changed', state => { console.log(state); });

//         // Ready
//         player.addListener('ready', ({ device_id }) => {
//             console.log('Ready with Device ID', device_id);
//         });

//         // Not Ready
//         player.addListener('not_ready', ({ device_id }) => {
//             console.log('Device ID has gone offline', device_id);
//         });

//         // Connect to the player!
//         player.connect();
//     };
//     return (
//         <div>
//             <h1>Spotify Web Playback SDK Quick Start Tutorial</h1>
//             <Helmet>
//                 <script src="https://use.typekit.net/foobar.js"></script>
//                 {/* <script src="/path/to/resource.js" type="text/javascript" /> */}

//             </Helmet>

//         </div>)
// }