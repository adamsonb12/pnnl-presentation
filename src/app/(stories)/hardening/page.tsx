import { WritingTitle } from "@lab/components/@common/typography/writing-title";
import { StoryHeading } from "../(story-heading)";
import { List, ListItem } from "@lab/components/@common/typography/list";
import styles from "./styles.module.css";
import { Paragraph } from "@lab/components/@common/typography/paragraph";
import Image from "next/image";
import { CodeBlock } from "@lab/components/@common/code-block";
import { PLAID_IMPROVED } from "@lab/assets/code-strings";

export default function Hardening() {
  return (
    <>
      <StoryHeading
        title="Hardening"
        subtitle="Improving the product and our processes"
        imageUri="/gym.jpg"
      />

      <div>
        <WritingTitle>Don&apos;t Break Prod (anymore)</WritingTitle>
        <List>
          <ListItem>
            Updated CI Pipelines to run thorough tests of the code before and
            after each merge
          </ListItem>
          <ListItem>
            Added Gitlab Actions using their pipelines to control app releases
          </ListItem>
        </List>

        <Image
          alt="Swyf pipelines"
          src={"/pipeline.png"}
          width={301.6}
          height={184}
          style={{
            marginTop: 16,
            marginLeft: 16,
          }}
        />
      </div>

      <div>
        <WritingTitle>Improving the Code</WritingTitle>
        <List>
          <ListItem>
            We added more data to our datadog analytics, to further understand
            what our users were doing (or not doing)
          </ListItem>
          <ListItem>Vastly Improved Plaid Integration</ListItem>
        </List>
      </div>

      <div>
        <Paragraph>Updated Plaid File (now only 1 file too!)</Paragraph>
        <CodeBlock value={PLAID_IMPROVED} />
      </div>

      <div>
        <WritingTitle>Enhancing the Product - Pay Anyone</WritingTitle>
        <List>
          <ListItem>
            Users could pay anyone, regardless if the recipient had the Swyf
            mobile app
          </ListItem>
          <ListItem>
            Allowed users to solely use Swyf payment app, without relying on
            their peer groups to also adopt it
          </ListItem>
          <ListItem>
            Built a web app with Next.js and React to support the feature
          </ListItem>
        </List>
      </div>

      <div>
        <WritingTitle>Pay Anyone Demo!</WritingTitle>

        <Paragraph>Swyf home screen</Paragraph>
        <Image
          alt="Pay Anyone"
          src={"/swyf-home.jpeg"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />

        <Paragraph>
          Find someone to pay (In this case someone who does not have Swyf)
        </Paragraph>
        <Image
          alt="Pay Anyone"
          src={"/pay-anyone.jpeg"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />

        <Paragraph>Enter the amount</Paragraph>
        <Image
          alt="Pay Anyone"
          src={"/pay-anyone-send.png"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />

        <Paragraph>Generate the link</Paragraph>
        <Image
          alt="Pay Anyone"
          src={"/link-created.png"}
          width={288}
          height={640}
          style={{
            marginTop: 16,
            marginLeft: 16,
            marginBottom: 16,
          }}
        />

        <Paragraph>
          Recipient clicks on the link and automatically is navigated here in
          their browser
        </Paragraph>
        <div className={styles.imageWrapper}>
          <Image
            alt="Pay Anyone"
            src={"/pay-anyone-recieve.png"}
            fill
            className={styles.image}
            style={{
              marginTop: 16,
              marginLeft: 16,
              marginBottom: 16,
            }}
          />
        </div>
      </div>
    </>
  );
}
