"use client";

import { useEffect, useState } from "react";

import type { TokenizerEncoderType } from "./types";

interface TokenizerVisualizationProps {
  value: string;
  tokenizer: (text: string) => string[];
  encoding: TokenizerEncoderType;
}

export default function TokenizerVisualization({
  value,
  tokenizer,
  encoding,
}: TokenizerVisualizationProps) {
  const [tokens, setTokens] = useState<string[]>([]);

  // sort of like the palette from tiktoken and gpt-tokenizer
  const tokenColors = [
    "bg-purple-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-blue-500",
  ];

  useEffect(() => {
    const tokens = tokenizer(value);

    setTokens(tokens);
  }, [value, encoding]);

  const renderTokenVisualization = () => {
    // highlight each token in the text by wrapping it in a span and adding a background color that changes based on the token
    // preserve the whitespace between tokens
    return tokens.map((token, index) => {
      return (
        <mark
          key={`token-${index}`}
          className={`${
            tokenColors[index % tokenColors.length]
          } text-neutral-200 px-[2px] py-[1px] mr-[1px] rounded-sm bg-opacity-75`}
        >
          {token.startsWith(" ") ? (
            <>
              <span className="inline-block w-4">&nbsp;</span>
              {token.slice(1)}
            </>
          ) : (
            token
          )}
        </mark>
      );
    });
  };

  return (
    <div className="whitespace-pre-wrap break-words">
      {renderTokenVisualization()}
    </div>
  );
}
