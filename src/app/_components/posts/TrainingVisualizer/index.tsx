"use client";

import { useState, useEffect } from "react";
import { encode, decode } from "@dvdagames/pgn-tokenizer";
import { IconArrowNarrowRightDashed, IconRotateRectangle } from "@tabler/icons-react";

const PGN_STRING = "1.e4 e5 2.Nf3 Nc6 3.Bc4 Nf6";

const TURN_REGEX = /^\s?\d+\.$/;

export interface TrainingVisualizerProps {
  pgn: string;
}

export default function TrainingVisualizer({ pgn = PGN_STRING }: TrainingVisualizerProps) {
  const [tokenIds, setTokenIds] = useState<number[]>(encode(pgn));
  const [tokens, setTokens] = useState<string[]>([]);
  const [inputTokenIndex, setInputTokenIndex] = useState<number>(0);
  const [outputTokenIndex, setOutputTokenIndex] = useState<number>(1);

  useEffect(() => {
    const currentTokenIds = encode(pgn);
    const currentTokens = currentTokenIds.map((id) => decode([id]));

    setTokenIds(currentTokenIds);
    setTokens(currentTokens);
  }, [pgn]);

  const handleNext = () => {
    const nextInputTokenIndex = inputTokenIndex + 1;
    const nextOutputTokenIndex = nextInputTokenIndex + 1;

    setInputTokenIndex(nextInputTokenIndex);
    setOutputTokenIndex(nextOutputTokenIndex);
  };

  const handleReset = () => {
    setInputTokenIndex(0);
    setOutputTokenIndex(1);
  };

  const renderTokenVisualization = () => {
    const inputTokens = tokens.slice(0, inputTokenIndex + 1);
    const outputToken = tokens[outputTokenIndex];

    return (
      <>
        <div className="flex flex-col">
          <div className="text-xs text-neutral-600">In</div>
          <div className="flex flex-row gap-0 items-center justify-start">
            {inputTokens.map((token, index) => {
              const isTurn = TURN_REGEX.test(token);
              const isInput = index === inputTokenIndex;

              const color = isTurn
                ? isInput
                  ? "text-amber-500"
                  : "text-amber-800"
                : isInput
                ? "text-teal-500"
                : "text-teal-800";

              const border = isTurn
                ? isInput
                  ? "border-amber-500"
                  : "border-amber-800"
                : isInput
                ? "border-teal-500"
                : "border-teal-800";

              const opacity = isInput ? "opacity-100" : "opacity-50";

              const className = `${color} border ${border} rounded-sm ${opacity}`;

              return (
                <div className={className} key={`${token}-${index}`}>
                  {token[0] === " " ? (
                    <>
                      <span className="inline-block w-4">&nbsp;</span>
                      {token.slice(1)}
                    </>
                  ) : (
                    token
                  )}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col ml-2">
          <div className="text-xs text-neutral-600">Out</div>
          <div className="flex flex-row gap-0 items-center justify-start">
            {outputToken && (
              <div
                className={`text-neutral-300 border border-neutral-600 rounded-sm border-dashed`}
                key={`${outputToken}-${outputTokenIndex}`}
              >
                {outputToken[0] === " " ? (
                  <>
                    <span className="inline-block w-4">&nbsp;</span>
                    {outputToken.slice(1)}
                  </>
                ) : (
                  outputToken
                )}
              </div>
            )}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="w-full flex flex-col">
      <div className="w-full flex flex-row items-end">
        {renderTokenVisualization()}
        <button
          className="bg-transparent text-neutral-600 px-2 py-1 rounded-sm ml-2 border border-neutral-600 hover:text-neutral-100 hover:border-neutral-100"
          onClick={handleNext}
          disabled={outputTokenIndex >= tokens.length - 1}
          aria-label="Next Step"
        >
          <IconArrowNarrowRightDashed />
        </button>
        <button
          className="bg-transparent text-neutral-600 px-2 py-1 rounded-sm ml-auto border border-neutral-600 hover:text-neutral-100 hover:border-neutral-100"
          onClick={handleReset}
          disabled={outputTokenIndex <= 1}
          aria-label="Reset Progress"
        >
          <IconRotateRectangle />
        </button>
      </div>
      <div className="text-sm text-neutral-600 mt-2">
        Use the Arrow button to step through each iteration of the training loop.
      </div>
    </div>
  );
}
