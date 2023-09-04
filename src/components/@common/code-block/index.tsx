"use client";
import { CodeBlock as ReactCodeBlock, dracula } from "react-code-blocks";

export const CodeBlock = ({ value }: { value: string }) => {
  return (
    <ReactCodeBlock
      text={value}
      language="tsx"
      showLineNumbers
      // @ts-ignore this is the libraries own import and export and is from their docs, ignoring
      theme={dracula}
    />
  );
};
