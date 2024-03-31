import React, { useState, useEffect } from 'react';
import getCountryStateCity from '../../../api/get-countryStateCity.js';
import getCountries from '../../../api/get-countries.js';

function CountrySelect() {
    // State variables to hold selected country, state, and city values
    const [selectedCountry, setSelectedCountry] = useState('');
    const [countries, setCountries] = useState([]);
    const [countryNames, setCountryNames] = useState([]);

    useEffect(() => {
        getCountries().then(data => {
            setCountryNames(data.countryNames);
            setCountries(data.countriesData);
        }).catch(error => {
            console.error('Error fetching countries data:', error);
        });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount

    console.log('CountryNames:', countryNames);
    console.log('Countries:', countries);

    // Event handler to update selected country and fetch corresponding states
    const handleCountryChange = (event) => {
        const countryName = event.target.value;
        console.log('CountryName:', countryName);
        setSelectedCountry(countryName);
    };
    console.log('Selected country:', selectedCountry);
    
    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission with selectedCountry, selectedState, and selectedCity values
        console.log('Submitted values:', selectedCountry);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Country:
                <select value={selectedCountry} onChange={handleCountryChange}>
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

