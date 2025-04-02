import Dropdown from "../VisualizationLibrary/Dropdown";
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
    <div className="w-full flex flex-row items-center justify-end">
      <Dropdown
        options={filteredOptions}
        onChange={onChange}
        value={type}
        label="Tokenizer"
      />
    </div>
  );
}
