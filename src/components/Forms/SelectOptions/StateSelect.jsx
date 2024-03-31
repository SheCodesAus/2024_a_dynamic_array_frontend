import React, { useState, useEffect } from 'react';
import getStates from '../../../api/get-states.js';

function useStates(setStateNames, setStatesData) {
    useEffect(() => {
        getStates().then(data => {
            setStateNames(data.stateNames);
            setStatesData(data.statesData);
            // console.log('CountryNames:', data.countryNames);
            // console.log('Countries:', data.countriesData);
        }).catch(error => {
            console.error('Error fetching countries data:', error);
        });
    }, []);
}

function StateSelect({setCityIso2}) {
    // State variables to hold selected country, state, and city values
    const [selectedStateName, setSelectedStateName] = useState('');
    const [statesData, setStatesData] = useState([]);
    const [stateNames, setStateNames] = useState([]);
    // const [iso2, setSelectedIso2] = useState('');

    useStates(setStateNames, setStatesData); // Empty dependency array ensures useEffect runs only once on component mount

    // Event handler to update selected country and fetch corresponding states
    const handleStateChange = (event) => {
        const value = event.target.value;
        setSelectedStateName(value);
        console.log('Selected state:', value);

        const selectedStateData = statesData.find(state => state.name === value);
        if (selectedStateData) {
            setCityIso2(selectedStateData.iso2); // set the selected ISO2
            console.log('ISO2 for selected state:', selectedStateData.iso2);
        }    
    };

    // Event handler for form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission with selectedCountry, selectedState, and selectedCity values
        console.log('Submitted values:', selectedStateName, iso2);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                State:
                <select value={selectedStateName} onChange={handleStateChange}>
                    <option value="">Select Country</option>
                    {stateNames.map((stateName, index) => (
                        <option key={index} value={stateName}>{stateName}</option>
                    ))}
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default StateSelect;

