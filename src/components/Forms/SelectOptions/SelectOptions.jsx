import React, { Component } from "react";

class SelectOptions extends Component {
  render() {
    const options = ["options 1", "option 2", "option 3"];
    const [myValue, setMyValue] = useState(options[0]);
    return (    
        <div>
            <select
            onChange={(e) => setMyValue(e.target.value)}
            defaultValue={myValue}
            >
            {options.map((option, idx) => (
                <option key={idx}>{option}</option>
            ))}
            </select>
            <h2>
            {" "}
            You selected{" "}
            <span style={{ backgroundColor: "yellow" }}>{myValue}</span>
            </h2>
        </div>
    );
  }
}

export default SelectOptions;