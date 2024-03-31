import CountrySelect from "./CountrySelect.jsx";
import StateSelect from "./StateSelect.jsx";
import React, {useState} from "react";

function TestPage() {

    const [stateIso2, setStateIso2] = useState("");
    const [countryIso2, setCountryIso2] = useState("");
    
    console.log("countryIso2: ", countryIso2);

    return (
        <div>
            <h1>Test Page</h1>
            <CountrySelect setCountryIso2={setCountryIso2} />
            <StateSelect countryIso2={countryIso2} setStateIso2={setStateIso2}/>
        </div>
    );
}
export default TestPage;