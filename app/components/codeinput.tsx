"use client";
import React, { useState } from "react";

export default function CodeInput() {
  const [cssCode, setCssCode] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssCode(event.target.value);
  };

  const handleSubmit = () => {
    // You can perform actions with the entered CSS code here
    console.log(cssCode);
  };

  return (
    <div className="container w-50">
      <h5 className="my-2">Enter Your CSS Code</h5>
      <textarea
        className="code-input leetcode-input"
        placeholder="Enter your CSS code here..."
        value={cssCode}
        onChange={handleInputChange}
      ></textarea>
      <button className="submit-btn" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
