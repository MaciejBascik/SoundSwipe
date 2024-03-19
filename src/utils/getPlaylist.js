export async function getPlaylist(access_token) {
    const response = await fetch("https://api.spotify.com/v1/playlists/37i9dQZF1DWXJnyndhASBe/tracks", {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }