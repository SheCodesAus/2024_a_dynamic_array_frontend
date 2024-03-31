// This function will fetch the list of cities from the API based on the selected state and country

async function getCities(countryIso2, stateIso2){
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };
    const url = `https://api.countrystatecity.in/v1/countries/${countryIso2}/states/${stateIso2}/cities`;
    const response = await fetch (url,requestOptions);

    if (!response.ok) {
        const fallbackError = "Error fetching states";
        const data= await response.json().catch(()=>{
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const citiesData = await response.json();
    const cityNames = citiesData.map(city => city.name);
    return {citiesData, cityNames};
}
export default getCities;