export async function getPlaylist(access_token, id) {
    const randomOffset = Math.floor(Math.random() * 581);

    const response = await fetch(`https://api.spotify.com/v1/playlists/${id}/tracks?offset=${randomOffset}&market=PL`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }

