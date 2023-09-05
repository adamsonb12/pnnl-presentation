"use client";
import { CodeBlock as ReactCodeBlock, dracula } from "react-code-blocks";

export const CodeBlock = ({
  value,
  language = "tsx",
  ...props
}: {
  language?: string;
  value: string;
}) => {
  return (
    <ReactCodeBlock
      text={value}
      language={language}
      showLineNumbers
      // @ts-ignore this is the libraries own import and export and is from their docs, ignoring
      theme={dracula}
      {...props}
    />
  );
};
