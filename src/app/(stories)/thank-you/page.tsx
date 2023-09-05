"use client";

import { Heading1 } from "@lab/components/@common/typography/heading";
import { Link } from "@lab/components/@common/typography/link";
import { Paragraph } from "@lab/components/@common/typography/paragraph";
import { StoryHeading } from "../(story-heading)";

export default function ThankYouPage() {
  return (
    <>
      <StoryHeading
        title="Thank You!"
        subtitle="May the Force be with you"
        imageUri="/keanu.gif"
      />

      <div>
        <Paragraph>
          You can checkout the repository for this project on{" "}
          <Link
            href="https://github.com/adamsonb12/pnnl-presentation"
            target="_blank"
          >
            Github!
          </Link>
        </Paragraph>
        <Paragraph>
          Interested in reading more about Swyf and the team? Check out this{" "}
          <Link
            href="https://alwaysbuilding.substack.com/archive?sort=new"
            target="_blank"
          >
            Substack
          </Link>{" "}
          from Swyf&apos;s product head.
        </Paragraph>
      </div>
    </>
  );
}
