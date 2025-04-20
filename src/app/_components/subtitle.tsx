"use client";

import { useState } from "react";
import Ciph3rText from "@interwebalchemy/ciph3r-text";
import { useTimeout } from "usehooks-ts";

const aiModifiers = [
  "powered",
  "haunted",
  "focused",
  "enabled",
  "augmented",
  "transformed",
  "enhanced",
  "optimized",
  "integrated",
  "accelerated",
  "transformed",
];

export function Intro() {
  const [defaultText, setDefaultText] = useState(aiModifiers[0]);
  const [targetText, setTargetText] = useState<string | undefined>();
  const [hasTransformed, setHasTransformed] = useState(false);

  useTimeout(
    () => {
      setHasTransformed(false);

      const previousTargetText = targetText;
      const previousDefaultText = defaultText;

      const filteredAiModifiers = aiModifiers.filter(
        (modifier) =>
          modifier !== previousTargetText && modifier !== previousDefaultText
      );

      const randomAiModifier =
        filteredAiModifiers[
          Math.floor(Math.random() * filteredAiModifiers.length)
        ];

      setDefaultText(previousTargetText ?? "");
      setTargetText(randomAiModifier);
    },
    hasTransformed ? 2500 : null
  );

  useTimeout(
    () => {
      setTargetText(aiModifiers[1]);
    },
    hasTransformed ? null : 2500
  );

  return (
    <h4 className="text-4xl text-gray-400">
      Human-centered software for an AI-
      {targetText ? (
        <Ciph3rText
          defaultText={defaultText}
          targetText={targetText}
          action="transform"
          onFinish={() => {
            setHasTransformed(true);
          }}
        />
      ) : (
        defaultText
      )}{" "}
      world.
    </h4>
  );
}

export default Intro;
