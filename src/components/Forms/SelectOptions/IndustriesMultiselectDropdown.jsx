import Multiselect from 'multiselect-react-dropdown';
import getIndustries from '../../../api/get-industries.js';
import React, { useState, useEffect, useRef } from 'react';

// Custom hook created to fetch and set the list of industy from the API
function useIndusty(setIndustryOptions) {
    useEffect(() => {
        getIndustries().then(data => {
            setIndustryOptions(data.industryOptions);
        }).catch(error => {
            console.error('Error fetching industy:', error);
        });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
}

function IndustySelect({setSelectedIndustries}) { // props passed in

    const [industryOptions, setIndustryOptions] = useState([]); // creating the state for the drop down labels
    
    useIndusty(setIndustryOptions);

    const multiSelectRef = useRef(null); // creating a reference to the multiselect component

    const handleCheckboxChange = () => {
        setSelectedIndustries(multiSelectRef.current.getSelectedItems().map((industry) => industry.name)) // setting the selected industy to the state
    }

    return (
        <Multiselect
            options={industryOptions} // Options to display in the dropdown
            onSelect={handleCheckboxChange} // Function will trigger on select event
            onRemove={handleCheckboxChange} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            ref={multiSelectRef} // Reference to the multiselect component
        />
    )
}
export default IndustySelect;
