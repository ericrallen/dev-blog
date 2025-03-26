"use client";

import { useEffect, useState, useRef } from "react";
import { encode, decode } from "gpt-tokenizer";

export default function TokenizerViz() {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>("");
  const [tokens, setTokens] = useState<string[]>([]);
  const [tokenCount, setTokenCount] = useState<number>(0);

  const tokenColors = [
    "bg-purple-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-blue-500",
  ];

  useEffect(() => {
    if (textAreaRef.current !== null) {
      const value = textAreaRef.current.value;
      const tokens = encode(value).map((token) => decode([token]));
      setText(value);
      setTokens(tokens);
      setTokenCount(tokens.length);
    }
  }, [textAreaRef.current]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    const tokens = encode(value).map((token) => decode([token]));
    setText(value);
    setTokens(tokens);
    setTokenCount(tokens.length);
  };

  const renderTokenVisualization = () => {
    // highlight each token in the text by wrapping it in a span and adding a background color that changes based on the token
    // preserve the whitespace between tokens
    return tokens.map((token, index) => {
      return (
        <mark
          key={`token-${index}`}
          className={`${
            tokenColors[index % tokenColors.length]
          } text-white px-[2px] py-[1px] mr-[1px] rounded-sm`}
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
    <div className="flex flex-col">
      <textarea
        defaultValue={text}
        ref={textAreaRef}
        onChange={handleChange}
        className="text-neutral-800 w-full p-2 border rounded-sm resize-none mb-1"
        placeholder="Enter text to tokenize"
      />
      <div className="text-sm text-gray-400 mb-2">Tokens: {tokenCount}</div>
      <div className="whitespace-pre-wrap break-words">
        {renderTokenVisualization()}
      </div>
    </div>
  );
}
