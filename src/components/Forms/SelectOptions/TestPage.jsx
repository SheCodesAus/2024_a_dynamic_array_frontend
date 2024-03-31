import CountrySelect from "./CountrySelect.jsx";
import React, {useState} from "react";

function TestPage() {
    const [countryIso2, setCountryIso2] = useState("");
    //const [state, setState] = useState("");

    return (
        <div>
            <h1>Test Page</h1>
            <CountrySelect setCountryIso2={setCountryIso2} />
            {/* <StateSelect countryIso2={countryIso2} setState={setState} /> */}
{/* create the state select with parameters of countryIso2 */}
        </div>
    );
}
export default TestPage;