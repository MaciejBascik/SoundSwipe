export async function getPlaylist(access_token, id) {
    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }