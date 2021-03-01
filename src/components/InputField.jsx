import React, { useState } from "react";

const InputField = (prop) => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    setInputText(newValue);
  };
  return (
    <div className="form">
      <input type="text" onChange={handleChange} value={inputText} />
      <button
        className="add"
        onClick={() => {
          prop.addFun(inputText);
          setInputText(" ");
        }}
      >
        <span> Add </span>
      </button>
    </div>
  );
};

export default InputField;
