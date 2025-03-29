"use client";

import { useEffect, useState } from "react";

import type { TokenizerEncoderType } from "./types";

interface TokenizerCounterProps {
  value: string;
  tokenCounter: (text: string) => number;
  characterCounter?: (text: string) => number;
  wordCounter?: (text: string) => number;
  includeCharacters?: boolean;
  includeWords?: boolean;
  encoding: TokenizerEncoderType;
}

export default function TokenizerCounter({
  value,
  tokenCounter,
  characterCounter,
  wordCounter,
  includeCharacters = false,
  includeWords = false,
  encoding = "gpt-4o",
}: TokenizerCounterProps) {
  const [tokenCount, setTokenCount] = useState<number>(0);
  const [characterCount, setCharacterCount] = useState<number>(0);
  const [wordCount, setWordCount] = useState<number>(0);
  useEffect(() => {
    const tokens = tokenCounter(value);
    setTokenCount(tokens);

    if (includeCharacters && typeof characterCounter === "function") {
      const characters = characterCounter(value);
      setCharacterCount(characters);
    }

    if (includeWords && typeof wordCounter === "function") {
      const words = wordCounter(value);
      setWordCount(words);
    }
  }, [value, encoding]);

  return (
    <div className="text-sm text-gray-400 mb-2">
      <strong>Tokens:</strong> {tokenCount}
      {includeCharacters && (
        <>
          {" "}
          <strong>Characters:</strong> {characterCount}
        </>
      )}
      {includeWords && (
        <>
          {" "}
          <strong>Words:</strong> {wordCount}
        </>
      )}
    </div>
  );
}
