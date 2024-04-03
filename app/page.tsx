import View from "@/app/components/view";
import CodeInput from "./components/codeinput";
import { useState } from "react";

export default function Home() {
  const cssClass = ["mode1", "mode2", "mode3", "mode4", "mode5"];

  return (
    <>
      <section className="main d-flex justify-content-center align-items-center">
        <div className="game-container d-flex">
          <View cssDetails={cssClass[0]} />
          <CodeInput />
        </div>
      </section>
    </>
  );
}
