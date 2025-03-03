import React, { useState } from "react";
import "./styles.css";

const CustomCheckbox = ({ checked, label, onChange }) => {
  return (
    <label className={`checkbox-container ${checked ? "checked" : ""}`} onClick={onChange}>
      <div className="checkbox">{checked && <span className="checkmark">x</span>}</div>
      <span className="label">{label}</span>
    </label>
  );
};

export default function App() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="container">
      <nav></nav>
      <div className="checkbox-section">
      <h2 className="title">Your checkbox</h2>
        <CustomCheckbox checked={isChecked} label="Complete the task" onChange={() => setIsChecked(!isChecked)} />
      </div>
      <div className="template-section">
        <h2 className="title">Template</h2>
        <div className="section">
          <span className="instruction">Unchecked</span>
          <CustomCheckbox checked={false} label="Complete the task" onChange={() => {}} />
        </div>
        
        <div className="section">
          <span className="instruction">Checked</span>
          <CustomCheckbox checked={true} label="Complete the task" onChange={() => {}} />
        </div>
      </div>
    </div>
  );
}
