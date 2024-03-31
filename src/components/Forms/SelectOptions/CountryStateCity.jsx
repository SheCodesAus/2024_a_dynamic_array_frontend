import React, { useState, useEffect } from 'react';
import getCountryStateCity from '../../../../src/api/get-countryStateCity.js';
import getCountries from '../../../api/get-countries.js';

function CountryStateCitySelect() {
    // State variables to hold selected country, state, and city values
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [selectedCity, setSelectedCity] = useState('');
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [countries, setCountries] = useState([]);
    const [countriesData, setCountriesData] = useState([]);
    const [countryNames, setCountryNames] = useState([]);
    const [selectedIso2, setSelectedIso2] = useState('');


    useEffect(() => {
        getCountries(countryNames).then(data => {
            setCountriesData(data);
        }).catch(error => {
            console.error('Error fetching countries data:', error);
        });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
    
    // Event handler to update selected country and fetch corresponding states
    const handleCountryChange = (event) => {
        const countryName = event.target.value;
        console.log('CountryName:', countryName);
        setSelectedCountry(countryName);
        setSelectedState(''); // Reset selected state
        setSelectedCity(''); // Reset selected city

        const selectedCountryData = countriesData.countries.find(country => country.name === countryName);
        if (selectedCountryData) {
            setSelectedIso2(selectedCountryData.iso2); // Set the selected ISO2
        }
    

        console.log('ISO2 for selected country:', iso2);
        console.log('Selected country:', selectedCountry);

        // Fetch states based on selected ciso
        getCountryStateCity(selectedCountry.ciso).then(data => {
            const stateNames = data.map(state => state.name);
            setStates(stateNames); // Populate state dropdown
        }).catch(error => {
            console.error('Error fetching states:', error);
        });
    };

    // Event handler to update selected state and fetch corresponding cities
    const handleStateChange = (event) => {
        const state = event.target.value;
        setSelectedState(state);
        setSelectedCity(''); // Reset selected city

        // Fetch cities based on selected country and state
        getCountryStateCity(selectedCountry, state).then(data => {
            setCities(data.city); // Populate city dropdown
        }).catch(error => {
            console.error('Error fetching cities:', error);
        });
    };

    // Event handler to update selected city
    const handleCityChange = (event) => {
        const city = event.target.value;
        setSelectedCity(city);
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission with selectedCountry, selectedState, and selectedCity values
        console.log('Submitted values:', selectedCountry, selectedState, selectedCity);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Country:
                <select value={selectedCountry} onChange={handleCountryChange}>
                    <option value="">Select Country</option>
                    {countriesData.countryNames.map((countryName, index) => (
                        <option key={index} value={countryName}>{countryName}</option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                State:
                <select value={selectedState} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {states.map((state, index) => (
                        <option key={index} value={state}>{state}</option>
                    ))}
                </select>
            </label>
            <br />
            <label>
                City:
                <select value={selectedCity} onChange={handleCityChange}>
                    <option value="">Select City</option>
                    {cities.map((city, index) => (
                        <option key={index} value={city}>{city}</option>
                    ))}
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default CountryStateCitySelect;

