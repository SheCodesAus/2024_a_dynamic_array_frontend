import Multiselect from 'multiselect-react-dropdown';
import getTags from '../../../api/get-tags.js';
import React, { useState, useEffect, useRef } from 'react';

// Custom hook created to fetch and set the list of tags from the API
function useTags(setTagOptions) {
    useEffect(() => {
        getTags().then(data => {
            setTagOptions(data.tagOptions);
            console.log(data.tagOptions);
        }).catch(error => {
            console.error('Error fetching tags:', error);
        });
    }, []); // Empty dependency array ensures useEffect runs only once on component mount
}

function TagSelect({setSelectedTags}) { // props passed in

    const [tagOptions, setTagOptions] = useState([]); // creating the state for the drop down labels
    
    useTags(setTagOptions);

    const multiSelectRef = useRef(null); // creating a reference to the multiselect component

    const handleCheckboxChange = () => {
        setSelectedTags(multiSelectRef.current.getSelectedItems().map((tag) => tag.name)) // setting the selected tags to the state
    }

    return (
        <Multiselect
            options={tagOptions} // Options to display in the dropdown
            onSelect={handleCheckboxChange} // Function will trigger on select event
            onRemove={handleCheckboxChange} // Function will trigger on remove event
            displayValue="name" // Property name to display in the dropdown options
            ref={multiSelectRef} // Reference to the multiselect component
        />
    )
}
export default TagSelect;
