"use client";

import { useEffect, useState, useRef } from "react";

interface TokenizerInputProps {
  value: string;
  onChange: (value: string) => void;
}

export default function TokenizerInput({
  value = "",
  onChange,
}: TokenizerInputProps) {
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState<string>(value);

  useEffect(() => {
    if (textAreaRef.current !== null) {
      const value = textAreaRef.current.value;

      setText(value);
    }
  }, [textAreaRef.current]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;

    setText(value);
    onChange(value);
  };

  return (
    <textarea
      defaultValue={text}
      ref={textAreaRef}
      onChange={handleChange}
      className="text-neutral-800 w-full p-2 border rounded-sm resize-none my-2 h-10"
      placeholder="Enter text to tokenize"
    />
  );
}
