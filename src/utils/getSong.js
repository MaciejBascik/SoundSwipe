export async function getTrack(access_token,item) {
    const response = await fetch(`https://api.spotify.com/v1/tracks/${item}`, {
      method: 'GET',
      headers: { 'Authorization': 'Bearer ' + access_token },
    });
  
    return await response.json();
  }