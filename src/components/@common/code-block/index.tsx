"use client";
import { CodeBlock as ReactCodeBlock, dracula } from "react-code-blocks";

export const CodeBlock = ({ value }: { value: string }) => {
  return (
    <ReactCodeBlock
      text={value}
      language="tsx"
      showLineNumbers
      theme={dracula}
    />
  );
};
