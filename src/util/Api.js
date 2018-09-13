/**
 * Get a new token from API.
 * return {string} token
 */
export const getNewToken = async () => {

  let response = await fetch('https://apissl.bus4.com.br/api/dispositivo', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: 'macaddress=127.0.0.1&cidade=jpa'
  }).catch(err => {
    return err;
  });

  let {Token} = await response.json();

  return Token;
}

export const getBusList = (stopObject) => {

  let content = `latitude=${stopObject.LatLng.lat}&longitude=${stopObject.LatLng.lng}&parada=${stopObject.StopName}`;
  content += '&token=LKM9JuK8rOYCPcg8A6TJHPTcY6pa0B4sfbP3ooarpya6zvJgqOX5RBX60sjNEtHq';
  content += '&cidade=jpa'

  fetch('https://apissl.bus4.com.br/api/localizemev2', {
    method: 'POST',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: content
  })
}

