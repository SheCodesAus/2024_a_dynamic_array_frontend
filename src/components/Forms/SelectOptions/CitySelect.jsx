//This function takes the state ISO2 code and fetches the list of city names and an array of city data from the API
//it uses the list of city names to populate the dropdown and when a city is selected
//it grabs the id for the selected city to be set in state and posted.

import React, { useState, useEffect } from 'react';
import getCities from '../../../api/get-cities.js';

// Custom hook created to fetch and set the list of city names and city data array from the API
function useCities(countryIso2, stateIso2, setCityNames, setCitiesData) {
    useEffect(() => {
        getCities(countryIso2, stateIso2).then(data => {
            setCityNames(data.cityNames);
            setCitiesData(data.citiesData);
        }).catch(error => {
            console.error('Error fetching cities data:', error);
        });
    }, [stateIso2]); // dependency array ensures useEffect runs when stateIso2 changes
}

function CitySelect({countryIso2, stateIso2, setSelectedCityId}) { // props passed in from LocationDropdowns component

    // State variables to hold selected city and city data
    const [selectedCityName, setSelectedCityName] = useState('');
    const [citiesData, setCitiesData] = useState([]);
    const [cityNames, setCityNames] = useState([]);

    useCities(countryIso2, stateIso2, setCityNames, setCitiesData); // custom hook from above being used inside the city select function

    // Event handler to update selected city
    const handleCityChange = (event) => {
        const value = event.target.value;
        if (value === "") {
            setSelectedCityName("");
            setSelectedCityId("");
        } else {
            setSelectedCityName(value);
        }
        //and fetch and set corresponding cityId
        const selectedCityData = citiesData.find(city => city.name === value);
        if (selectedCityData) {
            setSelectedCityId(selectedCityData.id); // set the selected id
        }
    };

    return (
            <label className="form-controller">
                City:
                <select value={selectedCityName} onChange={handleCityChange}>
                    <option value="">Not Selected</option>
                    {cityNames.map((cityName, index) => (
                        <option key={index} value={cityName}>{cityName}</option>
                    ))}
                </select>
            </label>
    );
}

export default CitySelect;

