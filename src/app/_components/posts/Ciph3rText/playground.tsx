"use client";

import Ciph3rText from "@interwebalchemy/ciph3r-text";

export interface Ciph3rTextPlaygroundProps {
  defaultText: string;
  targetText: string;
  action: "encode" | "decode" | "transform" | "scramble";
}

export default function Ciph3rTextPlayground({
  defaultText = "Hello, world!",
  targetText,
  action,
}: Ciph3rTextPlaygroundProps) {
  return (
    <div className="flex flex-col border border-neutral-600 rounded-sm p-4">
      <Ciph3rText
        defaultText={defaultText}
        targetText={targetText}
        action={action}
      />
    </div>
  );
}
