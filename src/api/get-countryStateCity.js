function getCountryStateCity(country, state) {
    return new Promise(async (resolve, reject) => {
        try {
            let result = {};

            // Fetch countries
            const countryResponse = await fetch("https://api.countrystatecity.in/v1/countries", {
                headers: {
                    "X-CSCAPI-KEY": "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==",
                }
            });
            const countries = await countryResponse.json();
            console.log(countries);
            // Fetch states if a country is selected
            if (country) {
                const selectedCountry = countries.find(c => c.name === country);
                if (selectedCountry) {
                    const stateResponse = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry.iso2}/states`, {
                        headers: {
                            "X-CSCAPI-KEY": "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==",
                        }
                    });
                    const states = await stateResponse.json();
                    result = { country, state, city: states.map(s => s.name) };

                    // Fetch cities if a state is selected
                    if (state) {
                        const selectedState = states.find(s => s.name === state);
                        if (selectedState) {
                            const cityResponse = await fetch(`https://api.countrystatecity.in/v1/countries/${selectedCountry.iso2}/states/${selectedState.iso2}/cities`, {
                                headers: {
                                    "X-CSCAPI-KEY": "akNCcDdWUndIVWk3SEZITG1lMWhvNkU4UWc0U1RsQmk0T3luQllseA==",
                                }
                            });
                            const cities = await cityResponse.json();
                            result.city = cities.map(c => c.name);
                        }
                    }
                }
            }

            // Resolve the promise with the result
            resolve(result);
        } catch (error) {
            // Reject the promise with the error
            reject(error);
        }
    });
}
export default getCountryStateCity;