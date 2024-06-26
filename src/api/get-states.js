// This function will fetch a list of State Names and an array of State data from the API
// filtered by the selected country

async function getStates(countryIso2){
    var headers = new Headers();
    headers.append("X-CSCAPI-KEY", "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==");

    var requestOptions = {
    method: 'GET',
    headers: headers,
    redirect: 'follow'
    };
    const url = `https://api.countrystatecity.in/v1/countries/${countryIso2}/states`;
    const response = await fetch (url,requestOptions);

    if (!response.ok) {
        const fallbackError = "Error fetching states";
        const data= await response.json().catch(()=>{
            throw new Error(fallbackError);
        });
        const errorMessage = data?.detail ?? fallbackError;
        throw new Error(errorMessage);
    }
    const statesData = await response.json();
    const stateNames = statesData.map(state => state.name);
    return {statesData, stateNames};
}
export default getStates;