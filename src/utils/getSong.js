export async function getTrack(access_token,id) {
    const response = await fetch(`https://api.spotify.com/v1/tracks/${id}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }