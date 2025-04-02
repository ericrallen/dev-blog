"use client";

import { useState } from "react";
import Ciph3rText from "@interwebalchemy/ciph3r-text";

export default function Ciph3rTextDemo() {
  const [text, setText] = useState("Hello, world!");
  const [targetText, setTargetText] = useState("Enter the Matrix");

  const changeText = () => {
    setText(targetText);
    setTargetText(text);
  };

  return (
    <div className="flex flex-row items-start justify-center">
      <Ciph3rText
        defaultText={text}
        action="transform"
        targetText={targetText}
      />
      <button className="ml-auto" onClick={changeText}>
        Swap
      </button>
    </div>
  );
}
