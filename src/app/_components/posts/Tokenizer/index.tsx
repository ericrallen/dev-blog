"use client";

import { useEffect, useState } from "react";
import {
  encode as gpt4oEncode,
  decode as gpt4oDecode,
} from "gpt-tokenizer/model/gpt-4o";
import {
  encode as gpt4Encode,
  decode as gpt4Decode,
} from "gpt-tokenizer/model/gpt-4";
import {
  encode as gpt35TurboEncode,
  decode as gpt35TurboDecode,
} from "gpt-tokenizer/model/gpt-3.5-turbo";
import llamaTokenizer from "llama-tokenizer-js";
import llama3Tokenizer from "llama3-tokenizer-js";
// @ts-expect-error this package needs to update it's package.json
import { MistralTokenizer } from "mistral-tokenizer-ts";
import {
  encode as pgnEncode,
  decode as pgnDecode,
} from "@dvdagames/pgn-tokenizer";

import TokenizerEncoder from "./encoder";
import TokenizerInput from "./input";
import TokenizerCounter from "./counter";
import TokenizerVisualization from "./visualization";

import type { TokenizerEncoderType } from "./types";

interface TokenizerProps {
  defaultValue?: string;
  value?: string;
  includeCharacters?: boolean;
  includeWords?: boolean;
  defaultEncoder?: TokenizerEncoderType;
  canChangeEncoder?: boolean;
  excludeEncoders?: TokenizerEncoderType[];
  disabled?: boolean;
}

const mistralTokenizer = new MistralTokenizer();

export default function Tokenizer({
  defaultValue = "",
  value,
  includeCharacters = false,
  includeWords = false,
  defaultEncoder = "gpt-4o",
  canChangeEncoder = false,
  excludeEncoders = [],
  disabled = false,
}: TokenizerProps) {
  const [text, setText] = useState<string>(value ?? defaultValue);
  const [encoderType, setEncoderType] =
    useState<TokenizerEncoderType>(defaultEncoder);

  useEffect(() => {
    if (value) {
      setText(value);
    }
  }, [value]);

  const encoder = (text: string): number[] => {
    switch (encoderType) {
      case "gpt-4o":
        return gpt4oEncode(text);
      case "gpt-4":
        return gpt4Encode(text);
      case "gpt-3.5-turbo":
        return gpt35TurboEncode(text);
      case "llama-3":
        return llama3Tokenizer.encode(text);
      case "llama-2":
        return llamaTokenizer.encode(text);
      case "mistral":
        return mistralTokenizer.encode(text);
      case "pgn":
        return pgnEncode(text);
      default:
        return gpt4oEncode(text);
    }
  };

  const decoder = (tokens: number[]): string => {
    switch (encoderType) {
      case "gpt-4o":
        return gpt4oDecode(tokens);
      case "gpt-4":
        return gpt4Decode(tokens);
      case "gpt-3.5-turbo":
        return gpt35TurboDecode(tokens);
      case "llama-3":
        return llama3Tokenizer.decode(tokens);
      case "llama-2":
        return llamaTokenizer.decode(tokens);
      case "mistral":
        return mistralTokenizer.decode(tokens);
      case "pgn":
        return pgnDecode(tokens);
      default:
        return gpt4oDecode(tokens);
    }
  };

  const tokenCounter = (text: string) => {
    return encoder(text).length;
  };

  const characterCounter = (text: string) => {
    return text.length;
  };

  const wordCounter = (text: string) => {
    return text.split(" ").length;
  };

  const tokenizer = (text: string) => {
    return encoder(text).map((token) => decoder([token]));
  };

  return (
    <div className="flex flex-col w-full justify-center items-start">
      {canChangeEncoder && (
        <TokenizerEncoder
          type={encoderType}
          onChange={(value) => setEncoderType(value as TokenizerEncoderType)}
          excludeEncoders={excludeEncoders}
        />
      )}
      <TokenizerInput value={text} onChange={setText} disabled={disabled} />
      <TokenizerCounter
        value={text}
        tokenCounter={tokenCounter}
        characterCounter={characterCounter}
        wordCounter={wordCounter}
        includeCharacters={includeCharacters}
        includeWords={includeWords}
        encoding={encoderType}
      />
      <TokenizerVisualization
        value={text}
        tokenizer={tokenizer}
        encoding={encoderType}
      />
    </div>
  );
}
