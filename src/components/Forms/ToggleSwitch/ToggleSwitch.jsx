import React, {useState} from "react";
import "./ToggleSwitch.scss";

function ToggleSwitch(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
    props.onChange({
      target: {
      id: props.Name,
      value: !isChecked
    }});
  };

  return (
    <div className="toggle-switch">
      <input
        type="checkbox"
        className="toggle-switch-checkbox"
        name={props.Name}
        id={props.Name}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <label className="toggle-switch-label" htmlFor={props.Name}>
        <span className="toggle-switch-inner" />
        <span className="toggle-switch-switch" />
      </label>
    </div>
  );
}

export default ToggleSwitch;
