"use client";
import { on } from "events";
import React, { useState } from "react";

export default function CodeInput({
  mode,
  onSubmit,
}: {
  mode: number;
  onSubmit: (input: string) => void;
}) {
  const [cssCode, setCssCode] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCssCode(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(cssCode);
  };

  return (
    <div className="container w-50 d-flex flex-column justify-content-between">
      <h5 className="my-2 text-white">Enter Your CSS Code</h5>
      <div
        className="code-input leetcode-input"
        style={{
          minHeight: "200px",
          border: "1px solid #ced4da",
          padding: "10px",
          borderRadius: "4px",
          backgroundColor: "#000",
          color: "#495057",
          overflow: "auto",
        }}
      >
        {/* Permanent text */}
        <pre className="m-0">element.class{"{"}</pre>
        <pre>display:{mode <= 5 ? "grid" : "flex"}</pre>
        {/* Editable text */}
        <textarea
          style={{
            width: "100%",
            border: "none",
            outline: "none",
            resize: "none",
            background: "transparent",
            color: "#fff",
          }}
          placeholder="Enter your CSS code here..."
          value={cssCode}
          onChange={handleInputChange}
        ></textarea>
        <pre>{"}"}</pre>
      </div>
      <button className="submit-btn btn w-100" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
}
