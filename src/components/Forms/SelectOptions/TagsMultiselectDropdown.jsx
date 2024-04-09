import Multiselect from 'multiselect-react-dropdown';
import getTags from '../../../api/get-tags.js';
import React, { useState, useEffect, useRef } from 'react';

function useTags(setTagOptions) {
    useEffect(() => {
        getTags().then(data => {
            setTagOptions(data.tagOptions);
        }).catch(error => {
            console.error('Error fetching tags:', error);
        });
    }, []);
}

function TagSelect({ setSelectedTags, margin }) {
    const [tagOptions, setTagOptions] = useState([]);

    useTags(setTagOptions);

    const multiSelectRef = useRef(null);

    const handleCheckboxChange = () => {
        setSelectedTags(multiSelectRef.current.getSelectedItems().map((tag) => tag.name))
    }

    const style = margin ? { margin } : {};

    return (
        <div style={style}>
            <Multiselect
                options={tagOptions}
                onSelect={handleCheckboxChange}
                onRemove={handleCheckboxChange}
                displayValue="name"
                ref={multiSelectRef}
            />
        </div>
    )
}
export default TagSelect;
