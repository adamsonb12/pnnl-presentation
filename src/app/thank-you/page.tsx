"use client";

import { Heading1 } from "@lab/components/@common/typography/heading";
import { Link } from "@lab/components/@common/typography/link";
import { Paragraph } from "@lab/components/@common/typography/paragraph";

export default function ThankYouPage() {
  return (
    <>
      <Heading1>Thank you!</Heading1>
      <Paragraph>
        You can checkout the repository for this project on{" "}
        <Link
          href="https://github.com/adamsonb12/pnnl-presentation"
          target="_blank"
        >
          Github!
        </Link>
      </Paragraph>
    </>
  );
}
