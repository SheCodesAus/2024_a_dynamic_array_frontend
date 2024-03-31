import CountrySelect from "./CountrySelect.jsx";
import StateSelect from "./StateSelect.jsx";
// import CitySelect from "./CitySelect.jsx";
import React, {useState} from "react";

function TestPage() {

    const [stateIso2, setStateIso2] = useState("");
    const [countryIso2, setCountryIso2] = useState("");
    const [cityIso2, setCityIso2] = useState("");
    
    return (
        <div>
            <h1>Test Page</h1>
            <CountrySelect setCountryIso2={setCountryIso2} />
            { countryIso2 
                && <StateSelect countryIso2={countryIso2} setStateIso2={setStateIso2}/>}
            {/* { stateIso2 
                && <CitySelect cityIso2={cityIso2} setCityIso2={setCityIso2}/>} */}
        </div>
    );
}
export default TestPage;