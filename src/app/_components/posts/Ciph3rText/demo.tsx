"use client";

import { useState } from "react";
import { IconAB2 } from "@tabler/icons-react";
import Ciph3rText from "@interwebalchemy/ciph3r-text";

import IconButton from "../VisualizationLibrary/IconButton";

export default function Ciph3rTextDemo() {
  const [text, setText] = useState("The Matrix has you...");
  const [targetText, setTargetText] = useState("Wake up, Neo...");
  const [isTransforming, setIsTransforming] = useState(true);

  const changeText = () => {
    setIsTransforming(true);
    setText(targetText);
    setTargetText(text);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center justify-start">
        <Ciph3rText
          className="text-green-600"
          style={{
            textShadow: "0 0 3px rgba(0, 255, 170, 0.75)",
          }}
          defaultText={text}
          action="transform"
          targetText={targetText}
          onFinish={() => setIsTransforming(false)}
        />
        <div className="ml-auto">
          <IconButton
            icon={<IconAB2 />}
            onClick={changeText}
            label="Swap text"
            disabled={isTransforming}
          />
        </div>
      </div>
      <div className="text-sm text-neutral-600">
        Click the button to see the transformation effect in action.
      </div>
    </div>
  );
}
