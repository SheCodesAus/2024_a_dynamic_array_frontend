//This function takes the country ISO2 code and fetches the list of state names and state data from the API 
//it uses the list of state names to populate the dropdown and when a state is selected
//it grabs the iso2 code for the selected state to be used in the city API and dropdown component.

import React, { useState, useEffect } from 'react';
import getStates from '../../../api/get-states.js';

// Custom hook created to fetch and set the list of state names and state data array from the API
function useStates(countryIso2, setStateNames, setStatesData) {
    useEffect(() => {
        getStates(countryIso2).then(data => {
            setStateNames(data.stateNames);
            setStatesData(data.statesData);
        }).catch(error => {
            console.error('Error fetching states data:', error);
        });
    }, [countryIso2]); // dependency array ensures useEffect runs only when countryIso2 changes
}

function StateSelect({countryIso2, setStateIso2}) { // props passed in from LocationDropdowns component

    // State variables to hold selected state and state data
    const [selectedStateName, setSelectedStateName] = useState('');
    const [statesData, setStatesData] = useState([]);
    const [stateNames, setStateNames] = useState([]);

    useStates(countryIso2, setStateNames, setStatesData); // custom hook from above being used inside the state select function

    // Event handler to update selected state 
    const handleStateChange = (event) => {
        const value = event.target.value;
        setSelectedStateName(value);
        
        //and fetch and set corresponding stateIso2
        const selectedStateData = statesData.find(state => state.name === value);
        if (selectedStateData) {
            setStateIso2(selectedStateData.iso2); // set the selected ISO2
        }    
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

