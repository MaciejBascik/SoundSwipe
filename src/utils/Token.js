import {Buffer} from 'buffer';

var client_id = '73b2ecedc3e1432b8a5f46e1cb9a2d35';
var client_secret = 'b869f0f0690748b4b4027a04891040aa';

export async function getToken() {
  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    body: new URLSearchParams({
      'grant_type': 'client_credentials',
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': 'Basic ' + (Buffer.from(client_id + ':' + client_secret).toString('base64')),
    },
  });

  return await response.json();
}


