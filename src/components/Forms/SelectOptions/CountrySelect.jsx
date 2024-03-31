import React, { useState, useEffect } from 'react';
import getCountryStateCity from '../../../api/get-countryStateCity.js';
import getCountries from '../../../api/get-countries.js';

function useCountries(setCountryNames, setCountriesData) {
    useEffect(() => {
        getCountries().then(data => {
            setCountryNames(data.countryNames);
            setCountriesData(data.countriesData);
            // console.log('CountryNames:', data.countryNames);
            // console.log('Countries:', data.countriesData);
        }).catch(error => {
            console.error('Error fetching countries data:', error);
        });
    }, []);
}

function CountrySelect({setCountryIso2}) {
    // State variables to hold selected country, state, and city values
    const [selectedCountryName, setSelectedCountryName] = useState('');
    const [countriesData, setCountriesData] = useState([]);
    const [countryNames, setCountryNames] = useState([]);
    // const [iso2, setSelectedIso2] = useState('');

    useCountries(setCountryNames, setCountriesData); // Empty dependency array ensures useEffect runs only once on component mount

    // Event handler to update selected country and fetch corresponding states
    const handleCountryChange = (event) => {
        const value = event.target.value;
        setSelectedCountryName(value);
        console.log('Selected country:', value);

        const selectedCountryData = countriesData.find(country => country.name === value);
        if (selectedCountryData) {
            setCountryIso2(selectedCountryData.iso2); // set the selected ISO2
            console.log('ISO2 for selected country:', selectedCountryData.iso2);
        }    
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission with selectedCountry, selectedState, and selectedCity values
        console.log('Submitted values:', selectedCountryName, iso2);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Country:
                <select value={selectedCountryName} onChange={handleCountryChange}>
                    <option value="">Select Country</option>
                    {countryNames.map((countryName, index) => (
                        <option key={index} value={countryName}>{countryName}</option>
                    ))}
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CountrySelect;

