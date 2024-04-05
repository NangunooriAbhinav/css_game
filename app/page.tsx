"use client";
import View from "@/app/components/view";
import CodeInput from "./components/codeinput";
import { useState } from "react";

export default function Home() {
  const [cssMode, setCssMode] = useState(1);

  const handleModeChange = () => {
    setCssMode((prev) => (prev === 10 ? 1 : prev + 1));
  };

  return (
    <>
      <section className="main d-flex justify-content-center align-items-center">
        <div className="game-container d-flex p-3 ">
          <View cssDetails={cssMode} />
          <CodeInput />
          <button onClick={handleModeChange} className="btn border switch">
            {">"}
          </button>
        </div>
      </section>
    </>
  );
}
