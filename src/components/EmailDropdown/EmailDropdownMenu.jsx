import React from "react";
import { useState } from "react";
import "./EmailDropdownMenu.css"
function EmailDropdownMenu({ setSelectedSubject }) {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (e) => {
    setSelectedValue(e.target.value);
    setSelectedSubject(e.target.value);
  };

  return (
    <>
      <select value={selectedValue} onChange={handleChange} className="form-select">
        <option value="">Select a subject</option>
        <option value="Report Inappropriate Content">
          Report Inappropriate Content
        </option>
        <option value="Technical Support">Technical Support</option>
        <option value="Contact Admin">Contact Admin</option>
        <option value="Provide Feedback">Provide Feedback</option>
        <option value="Privacy Concerns">Privacy Concerns</option>
        <option value="Legal Issues">Legal Issues</option>
        <option value="Other">Other</option>
      </select>
    </>
  );
}
export default EmailDropdownMenu;
