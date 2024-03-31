// this component is used to render the country, state and city dropdowns
// it uses the country, state and city select components to render the dropdowns
// state dropdowns are dependent on the country dropdowns
// and city dropdowns are dependent on the state dropdowns
// the selected values are stored in state variables and passed as props between the components
// the selected values are then used to update the profile object on the create profile form

import CountrySelect from "./CountrySelect.jsx";
import StateSelect from "./StateSelect.jsx";
import CitySelect from "./CitySelect.jsx";
import React, {useState} from "react";

function LocationDropdowns({setCountryIso2, setStateIso2, setSelectedCityId, countryIso2, stateIso2, selectedCityId}) {
    
    return (
        <div>
            <div>
                <CountrySelect setCountryIso2={setCountryIso2} />
            </div>
            <div>
                { countryIso2 
                    && <StateSelect countryIso2={countryIso2} setStateIso2={setStateIso2}/>}
            </div>
            <div>
                { stateIso2 
                    && <CitySelect countryIso2={countryIso2} stateIso2={stateIso2} setSelectedCityId={setSelectedCityId}/>}
            </div>
        </div>
    );
}
export default LocationDropdowns;