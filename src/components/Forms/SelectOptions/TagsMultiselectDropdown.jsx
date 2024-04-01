import Multiselect from 'multiselect-react-dropdown';
import getTags from '../../../api/get-tags.js';
import React, { useState, useEffect } from 'react';

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

function TagSelect() { // props passed in

    const [tagOptions, setTagOptions] = useState([]);
    const [selectedTags, setSelectedTags] = useState([]);
    
    useTags(setTagOptions); // custom hook from above being used inside the country select function


    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        const updatedTags = checked
          ? [...selectedTags, value]
          : selectedTags.filter((item) => item !== value);
        setSelectedTags(updatedTags);
        onChange(updatedTags);
      };
    
    //   const handleRemove = (event) => {
    //     const { value, checked } = event.target;
    //     const updatedTags = checked
    //       ? [...selectedTags, value]
    //       : selectedTags.filter((item) => item !== value);
    //     setSelectedTags(updatedTags);
    //     onChange(updatedTags);
    //   };

return (
<Multiselect
    options={tagOptions} // Options to display in the dropdown
    selectedValues={selectedTags} // Preselected value to persist in dropdown
    onSelect={handleCheckboxChange} // Function will trigger on select event
    // onRemove={this.onRemove} // Function will trigger on remove event
    displayValue="name" // Property name to display in the dropdown options
/>
)
}
export default TagSelect;
