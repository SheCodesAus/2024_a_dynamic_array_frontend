// This function will fetch the list of countries from the API

async function getCountries(){
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };
    const url = "https://api.countrystatecity.in/v1/countries";
    const response = await fetch (url,requestOptions);

    if (!response.ok) {
        const fallbackError = "Error fetching countries";
        const data= await response.json().catch(()=>{
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const countriesData = await response.json();
    const countryNames = countriesData.map(country => country.name);
    return {countryNames, countriesData};

}
export default getCountries;