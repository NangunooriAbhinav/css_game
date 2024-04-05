"use client";
import View from "@/app/components/view";
import CodeInput from "./components/codeinput";
import { useState } from "react";

export default function Home() {
  const [cssMode, setCssMode] = useState(1);
  const [isCorrect, setIsCorrect] = useState(false);
  const [progress, setProgress] = useState(0);
  const [wrongSubmit, setWrongSubmit] = useState(false);

  const answers = [
    "grid-template-columns: 1fr 1fr 1fr;",
    "grid-template-columns: 1fr 2fr 1fr;",
    "grid-template-columns: 1fr 2fr;",
    "grid-template-columns: 1fr 1fr 1fr;grid-template-rows: 1fr 1fr;",
    "grid-template-columns: 1fr 2fr;grid-auto-rows: 1fr 2fr;",
    "justify-content: center;",
    "justify-content: center;align-items: center;",
    "justify-content: space-between;align-items: center;",
    "justify-content: space-around;align-items: center;",
    "justify-content: center;align-items: flex-end;",
  ];

  const normalizeCSS = (cssString: string) => {
    const trimmedString = cssString.replace(/\s+/g, "");

    const sortedString = trimmedString.split(";").sort().join(";");

    return sortedString;
  };

  const handleModeChange = () => {
    if (cssMode < progress + 1) {
      setCssMode((prev) => (prev === 10 ? 1 : prev + 1));
      setProgress(cssMode + 1);
    } else {
      setWrongSubmit(true);
    }
  };

  const handleSubmit = (input: string) => {
    const normalizedInput = normalizeCSS(input);
    const normalizedAnswer = normalizeCSS(answers[cssMode - 1]);

    if (normalizedInput === normalizedAnswer) {
      console.log("Correct!");
      setIsCorrect(true);
      setProgress((prev) => (prev === 9 ? 0 : prev + 1));
    } else {
      console.log("Incorrect!");
      setWrongSubmit(true);
    }
    console.log(input);
  };

  return (
    <>
      <section className="main d-flex justify-content-center align-items-center">
        {isCorrect && (
          <div
            className="modal show d-flex justify-content-center align-items-center"
            style={{ display: "block" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Congratulations!</h5>
                  <button
                    type="button"
                    className="btn btn-close "
                    onClick={() => setIsCorrect(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>You gave the correct answer.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {wrongSubmit && (
          <div
            className="modal show d-flex justify-content-center align-items-center"
            style={{ display: "block" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    Please finish the Current Stage!
                  </h5>
                  <button
                    type="button"
                    className="btn btn-close "
                    onClick={() => setWrongSubmit(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>You gave the wrong answer.</p>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="game-container d-flex p-3 ">
          <View cssDetails={cssMode} />
          <CodeInput mode={cssMode} onSubmit={handleSubmit} />
          <button onClick={handleModeChange} className="btn border switch">
            {">"}
          </button>
        </div>
      </section>
    </>
  );
}
