async function getCountries() {
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "API_KEY");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };

    fetch("https://api.countrystatecity.in/v1/countries", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}
export default getCountries;