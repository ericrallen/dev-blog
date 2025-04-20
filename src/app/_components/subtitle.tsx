"use client";

import { useState } from "react";
import Ciph3rText from "@interwebalchemy/ciph3r-text";
import { useTimeout } from "usehooks-ts";

export function Intro() {
  const [defaultText, setDefaultText] = useState("haunted");
  const [targetText, setTargetText] = useState("powered");
  const [hasTransformed, setHasTransformed] = useState(false);

  useTimeout(
    () => {
      setHasTransformed(false);

      const previousTargetText = targetText;
      const previousDefaultText = defaultText;

      setDefaultText(previousTargetText);
      setTargetText(previousDefaultText);
    },
    hasTransformed ? 2500 : null
  );

  return (
    <h4 className="text-xl text-gray-400 ml-auto">
      Human-centered software for an AI-
      <Ciph3rText
        defaultText={defaultText}
        targetText={targetText}
        action="transform"
        onFinish={() => {
          setHasTransformed(true);
        }}
      />{" "}
      world.
    </h4>
  );
}

export default Intro;
