import React, { useState, useEffect } from 'react';
import getCities from '../../../api/get-cities.js';

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

function CitySelect({countryIso2, stateIso2, setCityIso2}) {
    // State variables to hold selected country, state, and city values
    const [selectedCityName, setSelectedCityName] = useState('');
    const [citiesData, setCitiesData] = useState([]);
    const [cityNames, setCityNames] = useState([]);

    useCities(countryIso2, stateIso2, setCityNames, setCitiesData); 

    // Event handler to update selected city and provide location data
    const handleCityChange = (event) => {
        const value = event.target.value;
        setSelectedCityName(value);
        console.log('Selected state:', value);

        const selectedCityData = citiesData.find(city => city.name === value);
        if (selectedCityData) {
            setCityIso2(selectedCityData.iso2); // set the selected ISO2
        }    
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission with selectedCountry, selectedState, and selectedCity values
        console.log('Submitted values:', selectedStateName, iso2);
    };

    return (
            <label>
                City:
                <select value={selectedCityName} onChange={handleCityChange}>
                    <option value="">Select City</option>
                    {cityNames.map((cityName, index) => (
                        <option key={index} value={cityName}>{cityName}</option>
                    ))}
                </select>
            </label>
    );
}

export default CitySelect;

