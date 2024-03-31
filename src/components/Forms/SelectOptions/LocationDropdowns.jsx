import CountrySelect from "./CountrySelect.jsx";
import StateSelect from "./StateSelect.jsx";
import CitySelect from "./CitySelect.jsx";
import React, {useState} from "react";

function LocationDropdowns({setCountryIso2, setStateIso2, setSelectedCityId, countryIso2, stateIso2, selectedCityId}) {

    // const [stateIso2, setStateIso2] = useState("");
    // const [countryIso2, setCountryIso2] = useState("");
    // const [selectedCityId, setSelectedCityId] = useState("");
    
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