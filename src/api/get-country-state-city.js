

async function getCountryStateCity(country, state, city) {
    const countryApiUrl = "https://api.countrystatecity.in/v1/countries";
    const stateApiUrl = `https://api.countrystatecity.in/v1/countries/${ciso}/states`;
    const cityApiUrl = `https://api.countrystatecity.in/v1/countries/${ciso}/states/${siso}/cities`;

    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };

    const country = await fetch((this.countryApiUrl,requestOptions).then(response => response.json()));
    this.country = country;

    const ciso = country.map(country => country.iso2);

    const state = await fetch((this.stateApiUrl, requestOptions).then(response => response.json()));
    this.state = state;

    const siso = state.map(state => state.iso2);

    const city = await fetch((this.cityApiUrl, requestOptions).then(response => response.json()));
    this.city = city;

    return {country, state, city};
}
export default getCountryStateCity;