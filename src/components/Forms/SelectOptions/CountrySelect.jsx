//This function fetches the list of country names and an array of country data from the API
//it uses the list of country names to populate the dropdown and when a country is selected
//it grabs the iso2 code for the selected country to be used in the state API and dropdown component.

import React, { useState, useEffect } from 'react';
import getCountries from '../../../api/get-countries.js';

// Custom hook created to fetch and set the list of country names and country data array from the API
function useCountries(setCountryNames, setCountriesData) {
    useEffect(() => {
        getCountries().then(data => {
            setCountryNames(data.countryNames);
            setCountriesData(data.countriesData);
        }).catch(error => {
            console.error('Error fetching countries data:', error);
        });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
}

function CountrySelect({setCountryIso2}) { // props passed in from LocationDropdowns component

    // State variables to hold selected country, state, and city values
    const [selectedCountryName, setSelectedCountryName] = useState('');
    const [countriesData, setCountriesData] = useState([]);
    const [countryNames, setCountryNames] = useState([]);

    useCountries(setCountryNames, setCountriesData); // custom hook from above being used inside the country select function

    // Event handler to update selected country
    const handleCountryChange = (event) => {
        const value = event.target.value;
        if (value === "") {
            setSelectedCountryName("");
            setCountryIso2("");
        } else {
        setSelectedCountryName(value);
        }

        // and fetch and set corresponding states
        const selectedCountryData = countriesData.find(country => country.name === value);
        if (selectedCountryData) {
            setCountryIso2(selectedCountryData.iso2); // set the selected ISO2
        }
    };

    return (
            <label className="select-label">
                Country
                <select value={selectedCountryName} onChange={handleCountryChange}>
                    <option value="">Not Selected</option>
                    {countryNames.map((countryName, index) => (
                        <option key={index} value={countryName}>{countryName}</option>
                    ))}
                </select>
            </label>
    );
}

export default CountrySelect;

