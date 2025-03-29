import { useState } from "react";

import type { TokenizerEncoderType } from "./types";

interface TokenizerEncoderProps {
  type: TokenizerEncoderType;
  onChange: (value: string) => void;
  excludeEncoders?: TokenizerEncoderType[];
}

export default function TokenizerEncoder({
  type,
  onChange,
  excludeEncoders = [],
}: TokenizerEncoderProps) {
  const [selectedType, setSelectedType] = useState<string>(type);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  const options = [
    { label: "GPT-4o", value: "gpt-4o" },
    { label: "GPT-4", value: "gpt-4" },
    { label: "GPT-3.5 Turbo", value: "gpt-3.5-turbo" },
    { label: "Llama-3", value: "llama-3" },
    { label: "Llama-2", value: "llama-2" },
    // TODO: something is broken in the mistral tokenizer, so we're not using it yet
    // { label: "Mistral", value: "mistral" },
    { label: "PGN Tokenizer", value: "pgn" },
  ];

  const filteredOptions = options.filter(
    (option) => !excludeEncoders.includes(option.value as TokenizerEncoderType)
  );

  const renderOptions = filteredOptions.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <select
      className="w-1/3 text-sm border border-gray-300 rounded-sm p-2 text-gray-700 ml-auto"
      onChange={handleChange}
      defaultValue={selectedType}
    >
      {renderOptions}
    </select>
  );
}
