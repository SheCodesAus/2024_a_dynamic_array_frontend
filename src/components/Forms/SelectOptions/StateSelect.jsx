import React, { useState, useEffect } from 'react';
import getStates from '../../../api/get-states.js';

function useStates(countryIso2, setStateNames, setStatesData) {
    useEffect(() => {
        getStates(countryIso2).then(data => {
            setStateNames(data.stateNames);
            setStatesData(data.statesData);
        }).catch(error => {
            console.error('Error fetching states data:', error);
        });
    }, [countryIso2]); // dependency array ensures useEffect runs when countryIso2 changes
}

function StateSelect({countryIso2, setStateIso2}) {
    // State variables to hold selected country, state, and city values
    const [selectedStateName, setSelectedStateName] = useState('');
    const [statesData, setStatesData] = useState([]);
    const [stateNames, setStateNames] = useState([]);
    // const [iso2, setSelectedIso2] = useState('');

    useStates(countryIso2, setStateNames, setStatesData); 

    // Event handler to update selected country and fetch corresponding states
    const handleStateChange = (event) => {
        const value = event.target.value;
        setSelectedStateName(value);
        console.log('Selected state:', value);

        const selectedStateData = statesData.find(state => state.name === value);
        if (selectedStateData) {
            setStateIso2(selectedStateData.iso2); // set the selected ISO2
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
            <label>
                State:
                <select value={selectedStateName} onChange={handleStateChange}>
                    <option value="">Select State</option>
                    {stateNames.map((stateName, index) => (
                        <option key={index} value={stateName}>{stateName}</option>
                    ))}
                </select>
            </label>
    );
}

export default StateSelect;

