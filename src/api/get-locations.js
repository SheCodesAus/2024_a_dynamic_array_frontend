async function getLocations() {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };

    fetch("https://api.countrystatecity.in/v1/countries/[ciso]/states/[siso]/cities", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
export default getLocations;