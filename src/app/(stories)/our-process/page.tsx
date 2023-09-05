import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";
import { Link } from "@lab/components/@common/typography/link";
import { Paragraph } from "@lab/components/@common/typography/paragraph";
import { CodeBlock } from "@lab/components/@common/code-block";
import { PLANNING_OUTPUT } from "@lab/assets/code-strings";
import Image from "next/image";

export default function OurProcess() {
  // TODO = this whole page in detail with PICS
  return (
    <>
      <StoryHeading
        title="Our Process"
        subtitle="Optimize for Velocity"
        imageUri="/cars.jpeg"
      />

      <div>
        <WritingTitle>Methodology</WritingTitle>
        <List>
          <ListItem>Optimize for velocity in everything</ListItem>
          <ListItem>
            Repeatedly ask, &rdquo;What are we optimizing for?&rdquo; when we
            are making decisions
          </ListItem>
          <ListItem>
            Understand the &rdquo;Why?&rdquo; about everything
          </ListItem>
          <ListItem>Strip out what isn&apos; necessary</ListItem>
          <ListItem>
            Done isn&apos;t &rdquo;done&rdquo; until it&apos;s shipped
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Architecting</WritingTitle>
        <List>
          <ListItem>Prepare for the future, but not too much</ListItem>
          <ListItem>
            Architect and build planning to iterate on it again later
          </ListItem>
          <ListItem>
            We chose the{" "}
            <Link href="https://docs.expo.dev/" target="_blank">
              Expo
            </Link>{" "}
            framework, because it allowed us to test and build rapidly
          </ListItem>
          <ListItem>
            Most importantly, contributors need to be aligned. The how is less
            important than the consensus
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Planning</WritingTitle>
        <List>
          <ListItem>
            <Link
              href="https://en.wikipedia.org/wiki/MoSCoW_method#:~:text=The%20term%20MOSCOW%20itself%20is,to%20make%20the%20word%20pronounceable."
              target="_blank"
            >
              {" "}
              MoSCoW{" "}
            </Link>{" "}
            method, planning held weekly
          </ListItem>
          <ListItem>
            Each developer planned their own week beforehand, the meeting was to
            make sure we were aligned
          </ListItem>
        </List>
      </div>

      <div>
        <Paragraph>
          Example planning output for mobile goals, Oct. 3, 2022
        </Paragraph>
        <CodeBlock language="markdown" value={PLANNING_OUTPUT} />
      </div>

      <div>
        <WritingTitle>Adapting</WritingTitle>
        <List>
          <ListItem>
            Frequent communication is necessary to quickly adapt and avoid
            blockers
          </ListItem>
          <ListItem>
            We tossed out any unnecessary overhead, including Clickup
          </ListItem>
          <ListItem>
            Standups were quick every morning to ensure we were still aligned,
            and that no one was blocked
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Build First, Design After</WritingTitle>
        <List>
          <ListItem>Identify requirements and establish priorities</ListItem>
          <ListItem>Sketch on paper</ListItem>
          <ListItem>Put code down, get the flow functional</ListItem>
          <ListItem>Riff on UI until it is shippable</ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Example of this Process</WritingTitle>
        <Paragraph>Sketches</Paragraph>
        <Image
          alt="Sketch"
          src={"/chat-sketch2.jpg"}
          width={300}
          height={500}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
        <Image
          alt="Sketch"
          src={"/chat-sketch.jpg"}
          width={300}
          height={500}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
        <Image
          alt="Sketch"
          src={"/chat-sketch1.jpg"}
          width={300}
          height={500}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
      </div>

      <div>
        <Paragraph>Riffing</Paragraph>
        <Image
          alt="screenshot of Swyf app"
          src={"/chat-1.png"}
          width={700}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
        <Image
          alt="screenshot of Swyf app"
          src={"/chat-2.png"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
        <Image
          alt="screenshot of Swyf app"
          src={"/chat-3.png"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
        <Image
          alt="screenshot of Swyf app"
          src={"/chat-4.png"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
        <Image
          alt="screenshot of Swyf app"
          src={"/chat-5.png"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />
      </div>
    </>
  );
}
